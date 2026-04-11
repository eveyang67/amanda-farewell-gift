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

    function createImageButton(item, index, className, imageClassName) {
        const button = document.createElement('button');
        button.className = className;
        button.type = 'button';
        button.setAttribute('aria-label', `查看第 ${index + 1} 张照片`);

        const image = document.createElement('img');
        image.src = item.photo;
        image.alt = item.title || `照片 ${index + 1}`;
        image.loading = 'lazy';
        image.decoding = 'async';
        if (imageClassName) {
            image.className = imageClassName;
        }
        image.addEventListener('error', () => {
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

    function getHeartData() {
        const template = collectHeartSlots();
        if (availableGalleryData.length === 0) {
            return {
                columns: template.columns,
                rows: template.rows,
                heartSlots: []
            };
        }

        const heartSlots = template.slots.map((slot, index) => {
            const item = availableGalleryData[index % availableGalleryData.length];
            return { ...slot, item, index };
        });

        return {
            columns: template.columns,
            rows: template.rows,
            heartSlots
        };
    }

    function renderHeartWall() {
        const { columns, rows, heartSlots } = getHeartData();

        heartGrid.style.setProperty('--heart-columns', columns);
        heartGrid.style.setProperty('--heart-rows', rows);

        heartSlots.forEach(({ item, index, row, col }) => {
            const cell = createImageButton(item, index, 'heart-cell', 'heart-image');
            cell.style.gridColumn = `${col}`;
            cell.style.gridRow = `${row}`;
            heartGrid.appendChild(cell);
        });
    }

    function renderPhotoWall() {
        if (photoWallRendered) {
            return;
        }

        const fragment = document.createDocumentFragment();

        availableGalleryData.forEach((item, index) => {
            const tile = createImageButton(item, index, 'photo-tile', 'photo-tile-image');
            fragment.appendChild(tile);
        });

        photoWall.appendChild(fragment);
        photoWallRendered = true;
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
