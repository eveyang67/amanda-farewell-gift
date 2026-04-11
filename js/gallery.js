/**
 * 照片长廊逻辑
 */

(function() {
    const availableGalleryData = galleryData.filter(item => {
        return typeof item.photo === 'string' && item.photo.length > 0;
    });
    const heartGrid = document.getElementById('heartGrid');
    const photoWall = document.getElementById('photoWall');
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.getElementById('lightboxImage');
    const lightboxCaption = document.getElementById('lightboxCaption');
    const lightboxClose = document.getElementById('lightboxClose');
    const lightboxPrev = document.getElementById('lightboxPrev');
    const lightboxNext = document.getElementById('lightboxNext');

    let currentIndex = 0;

    function createImageButton(item, index, className, imageClassName) {
        const button = document.createElement('button');
        button.className = className;
        button.type = 'button';
        button.setAttribute('aria-label', `查看第 ${index + 1} 张照片`);

        const image = document.createElement('img');
        image.src = item.photo;
        image.alt = item.title || `照片 ${index + 1}`;
        image.loading = 'lazy';
        if (imageClassName) {
            image.className = imageClassName;
        }

        button.appendChild(image);
        button.addEventListener('click', () => openLightbox(index));

        return button;
    }

    function isHeartPoint(x, y) {
        return Math.pow(x * x + y * y - 1, 3) - x * x * Math.pow(y, 3) <= 0;
    }

    function collectSlots(columns, rows) {
        const slots = [];

        for (let row = 0; row < rows; row++) {
            for (let col = 0; col < columns; col++) {
                const x = (col / (columns - 1)) * 3 - 1.5;
                const y = 1.55 - (row / (rows - 1)) * 2.7;

                if (isHeartPoint(x, y)) {
                    slots.push({ row: row + 1, col: col + 1 });
                }
            }
        }

        return slots;
    }

    function buildHeartSlots(count) {
        let best = null;

        for (let columns = 14; columns <= 30; columns++) {
            for (let rows = 12; rows <= 30; rows++) {
                const slots = collectSlots(columns, rows);
                const diff = Math.abs(slots.length - count);

                if (!best || diff < best.diff || (diff === best.diff && slots.length >= count && slots.length < best.slots.length)) {
                    best = { columns, rows, slots, diff };
                }
            }
        }

        return best;
    }

    function renderHeartWall() {
        const { columns, rows, slots } = buildHeartSlots(availableGalleryData.length);

        heartGrid.style.setProperty('--heart-columns', columns);
        heartGrid.style.setProperty('--heart-rows', rows);

        availableGalleryData.forEach((item, index) => {
            const slot = slots[index];
            if (!slot) {
                return;
            }

            const cell = createImageButton(item, index, 'heart-cell', 'heart-image');
            cell.style.gridColumn = `${slot.col}`;
            cell.style.gridRow = `${slot.row}`;
            heartGrid.appendChild(cell);
        });
    }

    function renderPhotoWall() {
        availableGalleryData.forEach((item, index) => {
            const tile = createImageButton(item, index, 'photo-tile', 'photo-tile-image');
            photoWall.appendChild(tile);
        });
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
    renderPhotoWall();
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
