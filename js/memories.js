/**
 * 往昔记忆 - 卡片展示逻辑
 */

(function() {
    const memoriesGrid = document.getElementById('memoriesGrid');
    const initialBatch = 8;
    const batchSize = 8;
    let renderedCount = 0;
    let loadMoreObserver = null;
    let isAppending = false;
    const fullFrameNames = new Set([
        'Clare Jiang',
        'June Wu',
        'Ma Xiaojiang',
        'Belle Qin',
        'Echo Pi',
        'Jackie Sun',
        'Telisiah Utami Putri'
    ]);

    function getThumbPhotoPath(photoPath) {
        if (typeof photoPath !== 'string') {
            return photoPath;
        }

        return photoPath.replace('images/wishes/', 'images/wishes/thumbs/');
    }

    /**
     * 创建单个记忆卡片
     */
    function createMemoryCard(data) {
        const card = document.createElement('div');
        card.className = 'memory-card fade-in';
        const image = document.createElement('img');
        image.className = 'memory-photo';
        image.src = getThumbPhotoPath(data.photo);
        image.alt = `${data.name || '合影'}照片`;
        image.loading = 'lazy';
        image.decoding = 'async';
        if (fullFrameNames.has(data.name)) {
            image.classList.add('memory-photo-full');
        }
        image.addEventListener('error', () => {
            if (image.src !== new URL(data.photo, window.location.href).href) {
                image.src = data.photo;
                return;
            }
            image.src = "data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 400 300%22><rect fill=%22%23f5ede3%22 width=%22400%22 height=%22300%22/><text x=%22200%22 y=%22150%22 text-anchor=%22middle%22 fill=%22%23999%22 font-size=%2220%22>照片加载失败</text></svg>";
        });

        const content = document.createElement('div');
        content.className = 'memory-content';

        const blessing = document.createElement('p');
        blessing.className = 'memory-blessing';
        blessing.textContent = data.blessing;

        content.appendChild(blessing);
        card.appendChild(image);
        card.appendChild(content);
        return card;
    }

    /**
     * 按批次渲染记忆卡片，减少首屏阻塞
     */
    function scheduleFrame(callback) {
        if ('requestIdleCallback' in window) {
            window.requestIdleCallback(callback, { timeout: 120 });
            return;
        }

        window.requestAnimationFrame(() => callback());
    }

    function appendMemories(count, onComplete) {
        if (isAppending) {
            return;
        }

        isAppending = true;
        const end = Math.min(renderedCount + count, wishesData.length);
        const chunkSize = 3;

        function appendChunk() {
            const fragment = document.createDocumentFragment();
            const chunkEnd = Math.min(renderedCount + chunkSize, end);

            for (let index = renderedCount; index < chunkEnd; index++) {
                const data = wishesData[index];
                const card = createMemoryCard(data);
                card.style.animationDelay = `${index * 0.06}s`;
                fragment.appendChild(card);
            }

            memoriesGrid.appendChild(fragment);
            renderedCount = chunkEnd;

            if (renderedCount < end) {
                scheduleFrame(appendChunk);
                return;
            }

            isAppending = false;
            if (typeof onComplete === 'function') {
                onComplete();
            }
        }

        appendChunk();
    }

    function mountLoadMoreTrigger() {
        if (renderedCount >= wishesData.length) {
            return;
        }

        const sentinel = document.createElement('div');
        sentinel.className = 'memories-sentinel';
        memoriesGrid.after(sentinel);

        loadMoreObserver = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (!entry.isIntersecting) {
                    return;
                }

                appendMemories(batchSize, () => {
                    if (renderedCount >= wishesData.length) {
                        loadMoreObserver.disconnect();
                        sentinel.remove();
                    }
                });

            });
        }, {
            rootMargin: '180px 0px'
        });

        loadMoreObserver.observe(sentinel);
    }

    function renderMemories() {
        memoriesGrid.innerHTML = '';
        renderedCount = 0;
        appendMemories(initialBatch, mountLoadMoreTrigger);
    }

    // 页面加载完成后渲染
    renderMemories();

    // 添加页面入场动画
    document.querySelector('.memories-container').classList.add('fade-in');
})();
