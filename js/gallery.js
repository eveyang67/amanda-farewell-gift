/**
 * 照片长廊逻辑
 */

(function() {
    const availableGalleryData = galleryData.filter(item => {
        return typeof item.photo === 'string' && item.photo.length > 0;
    });
    const heartGrid = document.getElementById('heartGrid');
    const photoWall = document.getElementById('photoWall');
    const photoWallSection = document.getElementById('photoWallSection');
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.getElementById('lightboxImage');
    const lightboxCaption = document.getElementById('lightboxCaption');
    const lightboxClose = document.getElementById('lightboxClose');
    const lightboxPrev = document.getElementById('lightboxPrev');
    const lightboxNext = document.getElementById('lightboxNext');

    let currentIndex = 0;
    let photoWallRendered = false;
    let heartWallRendered = false;

    const HEART_TEMPLATE = [
        "0001111000001111000",
        "0111111110011111110",
        "1111111111111111111",
        "1111111111111111111",
        "1111111111111111111",
        "0111111111111111110",
        "0011111111111111100",
        "0001111111111111000",
        "0000111111111110000",
        "0000011111111100000",
        "0000001111111000000",
        "0000000111110000000",
        "0000000011100000000",
        "0000000001000000000"
    ];

    function getThumbPhotoPath(photoPath) {
        if (typeof photoPath !== 'string') {
            return photoPath;
        }

        return photoPath.replace('images/gallery/', 'images/gallery/thumbs/');
    }

    function createImageButton(item, index, className, imageClassName) {
        const button = document.createElement('button');
        button.className = className;
        button.type = 'button';
        button.setAttribute('aria-label', `查看第 ${index + 1} 张照片`);

        const image = document.createElement('img');
        image.src = getThumbPhotoPath(item.photo);
        image.alt = item.title || `照片 ${index + 1}`;
        image.loading = 'lazy';
        image.decoding = 'async';
        image.fetchPriority = 'low';
        if (imageClassName) {
            image.className = imageClassName;
        }
        image.addEventListener('error', () => {
            if (image.src !== new URL(item.photo, window.location.href).href) {
                image.src = item.photo;
                return;
            }
            button.classList.add('image-missing');
            image.alt = `${image.alt}（加载失败）`;
        });

        button.appendChild(image);
        button.addEventListener('click', () => openLightbox(index));

        return button;
    }

    function collectHeartSlots() {
        const slots = [];

        HEART_TEMPLATE.forEach((rowValue, rowIndex) => {
            rowValue.split('').forEach((value, columnIndex) => {
                if (value === '1') {
                    slots.push({ row: rowIndex + 1, col: columnIndex + 1 });
                }
            });
        });

        return {
            columns: HEART_TEMPLATE[0].length,
            rows: HEART_TEMPLATE.length,
            slots
        };
    }

    function buildHeartAssignments(slots) {
        const extraCopies = Math.max(0, slots.length - availableGalleryData.length);
        const remainingCounts = availableGalleryData.map(() => 1);

        for (let index = 0; index < extraCopies; index += 1) {
            const photoIndex = Math.floor((index * availableGalleryData.length) / extraCopies);
            remainingCounts[photoIndex] += 1;
        }

        const slotLookup = new Map(
            slots.map((slot, index) => [`${slot.row}:${slot.col}`, index])
        );

        const neighbors = slots.map(slot => {
            const adjacent = [];

            for (let rowOffset = -1; rowOffset <= 1; rowOffset += 1) {
                for (let colOffset = -1; colOffset <= 1; colOffset += 1) {
                    if (rowOffset === 0 && colOffset === 0) {
                        continue;
                    }

                    const neighborIndex = slotLookup.get(`${slot.row + rowOffset}:${slot.col + colOffset}`);
                    if (neighborIndex !== undefined) {
                        adjacent.push(neighborIndex);
                    }
                }
            }

            return adjacent;
        });

        const assigned = new Array(slots.length).fill(-1);
        const usageCounts = new Array(availableGalleryData.length).fill(0);
        const slotOrder = slots
            .map((slot, index) => ({
                index,
                degree: neighbors[index].length,
                distance: Math.abs(slot.row - 7.5) + Math.abs(slot.col - 10)
            }))
            .sort((left, right) => right.degree - left.degree || left.distance - right.distance);

        slotOrder.forEach(({ index: slotIndex }) => {
            const blockedPhotos = new Set(
                neighbors[slotIndex]
                    .map(neighborIndex => assigned[neighborIndex])
                    .filter(photoIndex => photoIndex !== -1)
            );

            let bestPhotoIndex = -1;
            let bestScore = -Infinity;

            remainingCounts.forEach((remainingCount, photoIndex) => {
                if (remainingCount <= 0 || blockedPhotos.has(photoIndex)) {
                    return;
                }

                const score =
                    (usageCounts[photoIndex] === 0 ? 1000 : 0) +
                    remainingCount * 10 -
                    photoIndex * 0.001;

                if (score > bestScore) {
                    bestScore = score;
                    bestPhotoIndex = photoIndex;
                }
            });

            if (bestPhotoIndex === -1) {
                remainingCounts.forEach((remainingCount, photoIndex) => {
                    if (remainingCount <= 0) {
                        return;
                    }

                    const score = remainingCount * 10 - usageCounts[photoIndex];
                    if (score > bestScore) {
                        bestScore = score;
                        bestPhotoIndex = photoIndex;
                    }
                });
            }

            assigned[slotIndex] = bestPhotoIndex;
            remainingCounts[bestPhotoIndex] -= 1;
            usageCounts[bestPhotoIndex] += 1;
        });

        return assigned;
    }

    function getHeartData() {
        const template = collectHeartSlots();
        if (availableGalleryData.length === 0) {
            return {
                columns: template.columns,
                rows: template.rows,
                heartSlots: []
            };
        }

        const assignedPhotoIndexes = buildHeartAssignments(template.slots);
        const heartSlots = template.slots.map((slot, slotIndex) => {
            const photoIndex = assignedPhotoIndexes[slotIndex];
            const item = availableGalleryData[photoIndex];
            return { ...slot, item, index: photoIndex };
        });

        return {
            columns: template.columns,
            rows: template.rows,
            heartSlots
        };
    }

    function scheduleFrame(callback) {
        if ('requestIdleCallback' in window) {
            window.requestIdleCallback(callback, { timeout: 120 });
            return;
        }

        window.requestAnimationFrame(() => callback());
    }

    function renderHeartWall() {
        if (heartWallRendered) {
            return;
        }

        const { columns, rows, heartSlots } = getHeartData();

        heartGrid.style.setProperty('--heart-columns', columns);
        heartGrid.style.setProperty('--heart-rows', rows);
        const chunkSize = 10;
        let pointer = 0;

        function appendChunk() {
            const fragment = document.createDocumentFragment();
            const end = Math.min(pointer + chunkSize, heartSlots.length);

            for (; pointer < end; pointer += 1) {
                const { item, index, row, col } = heartSlots[pointer];
                const cell = createImageButton(item, index, 'heart-cell', 'heart-image');
                cell.style.gridColumn = `${col}`;
                cell.style.gridRow = `${row}`;
                fragment.appendChild(cell);
            }

            heartGrid.appendChild(fragment);

            if (pointer < heartSlots.length) {
                scheduleFrame(appendChunk);
                return;
            }

            heartWallRendered = true;
        }

        appendChunk();
    }

    function renderPhotoWall() {
        if (photoWallRendered) {
            return;
        }
        const photoRows = buildPhotoRows(availableGalleryData);
        const chunkSize = 3;
        let pointer = 0;

        function appendChunk() {
            const fragment = document.createDocumentFragment();
            const end = Math.min(pointer + chunkSize, photoRows.length);

            for (; pointer < end; pointer += 1) {
                fragment.appendChild(createPhotoRow(photoRows[pointer]));
            }

            photoWall.appendChild(fragment);

            if (pointer < photoRows.length) {
                scheduleFrame(appendChunk);
                return;
            }

            photoWallRendered = true;
        }

        appendChunk();
    }

    function getItemRatio(item) {
        if (typeof item.width === 'number' && typeof item.height === 'number' && item.height > 0) {
            return item.width / item.height;
        }

        return 1;
    }

    function getOrientation(item) {
        const ratio = getItemRatio(item);
        if (ratio < 0.9) {
            return 'portrait';
        }
        if (ratio > 1.12) {
            return 'landscape';
        }
        return 'square';
    }

    function getPhotoWallConfig() {
        const viewportWidth = window.innerWidth || document.documentElement.clientWidth || 1280;

        if (viewportWidth <= 767) {
            return {
                portraitRow: 2,
                landscapeRow: 2,
                squareRow: 2
            };
        }

        if (viewportWidth <= 1024) {
            return {
                portraitRow: 3,
                landscapeRow: 2,
                squareRow: 3
            };
        }

        return {
            portraitRow: 4,
            landscapeRow: 3,
            squareRow: 4
        };
    }

    function takeItems(queue, count) {
        return queue.splice(0, Math.min(count, queue.length));
    }

    function buildPhotoRows(items) {
        const config = getPhotoWallConfig();
        const portraitQueue = [];
        const landscapeQueue = [];
        const squareQueue = [];

        items.forEach(item => {
            const orientation = getOrientation(item);
            if (orientation === 'portrait') {
                portraitQueue.push(item);
                return;
            }

            if (orientation === 'landscape') {
                landscapeQueue.push(item);
                return;
            }

            squareQueue.push(item);
        });

        const rows = [];

        function hasItems() {
            return portraitQueue.length || landscapeQueue.length || squareQueue.length;
        }

        function fillRow(row, targetSize) {
            while (row.length < targetSize && squareQueue.length) {
                row.push(squareQueue.shift());
            }

            while (row.length < targetSize && portraitQueue.length && landscapeQueue.length) {
                if (row.length % 2 === 0) {
                    row.push(portraitQueue.shift());
                } else {
                    row.push(landscapeQueue.shift());
                }
            }

            return row;
        }

        while (hasItems()) {
            if (landscapeQueue.length >= portraitQueue.length && landscapeQueue.length > 0) {
                const row = fillRow(takeItems(landscapeQueue, config.landscapeRow), config.landscapeRow);
                rows.push({ kind: row.every(item => getOrientation(item) === 'landscape') ? 'landscape' : 'mixed', items: row });
                continue;
            }

            if (portraitQueue.length > 0) {
                const row = fillRow(takeItems(portraitQueue, config.portraitRow), config.portraitRow);
                rows.push({ kind: row.every(item => getOrientation(item) === 'portrait') ? 'portrait' : 'mixed', items: row });
                continue;
            }

            const row = takeItems(squareQueue, config.squareRow);
            rows.push({ kind: 'square', items: row });
        }

        return rows.filter(row => row.items.length > 0);
    }

    function createPhotoRow(row) {
        const rowElement = document.createElement('div');
        rowElement.className = `photo-row photo-row--${row.kind}`;

        row.items.forEach(item => {
            const tile = createImageButton(
                item,
                availableGalleryData.indexOf(item),
                'photo-tile',
                'photo-tile-image'
            );
            tile.style.setProperty('--photo-ratio', `${getItemRatio(item)}`);
            rowElement.appendChild(tile);
        });

        return rowElement;
    }

    function observePhotoWall() {
        if (!photoWallSection) {
            renderPhotoWall();
            return;
        }

        if (!('IntersectionObserver' in window)) {
            renderPhotoWall();
            return;
        }

        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (!entry.isIntersecting) {
                    return;
                }

                renderPhotoWall();
                observer.disconnect();
            });
        }, {
            rootMargin: '240px 0px'
        });

        observer.observe(photoWallSection);
    }

    function updateLightbox() {
        const item = availableGalleryData[currentIndex];
        if (!item) {
            return;
        }

        lightboxImage.dataset.fullsrc = item.photo;
        lightboxImage.src = item.photo;
        lightboxImage.alt = item.title || `照片 ${currentIndex + 1}`;
        lightboxCaption.textContent = `第 ${currentIndex + 1} 张 / 共 ${availableGalleryData.length} 张`;
    }

    function openLightbox(index) {
        currentIndex = index;
        updateLightbox();
        lightbox.classList.add('open');
        lightbox.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
    }

    function closeLightbox() {
        lightbox.classList.remove('open');
        lightbox.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
    }

    function stepLightbox(direction) {
        currentIndex = (currentIndex + direction + availableGalleryData.length) % availableGalleryData.length;
        updateLightbox();
    }

    renderHeartWall();
    observePhotoWall();
    document.querySelector('.gallery-page').classList.add('fade-in');

    lightboxClose.addEventListener('click', closeLightbox);
    lightboxPrev.addEventListener('click', () => stepLightbox(-1));
    lightboxNext.addEventListener('click', () => stepLightbox(1));

    lightbox.addEventListener('click', event => {
        if (event.target === lightbox) {
            closeLightbox();
        }
    });

    document.addEventListener('keydown', event => {
        if (!lightbox.classList.contains('open')) {
            return;
        }

        if (event.key === 'Escape') {
            closeLightbox();
        }

        if (event.key === 'ArrowLeft') {
            stepLightbox(-1);
        }

        if (event.key === 'ArrowRight') {
            stepLightbox(1);
        }
    });
})();
