/**
 * 随机漫步 - 抽签逻辑
 */

(function() {
    // 获取DOM元素
    const drawBtn = document.getElementById('drawBtn');
    const cardContainer = document.getElementById('cardContainer');
    const resultCard = document.getElementById('resultCard');
    const resultPhoto = document.getElementById('resultPhoto');
    const resultBlessing = document.getElementById('resultBlessing');
    const dailyQuote = document.getElementById('dailyQuote');
    const drawAgainBtn = document.getElementById('drawAgainBtn');

    // 用于记录已抽过的索引，避免短时间内重复
    let drawnIndices = [];
    const warmImageCache = new Set();
    const defaultDrawLabel = drawBtn.innerHTML;

    function sleep(milliseconds) {
        return new Promise(resolve => window.setTimeout(resolve, milliseconds));
    }

    function getThumbPhotoPath(photoPath) {
        if (typeof photoPath !== 'string') {
            return photoPath;
        }

        return photoPath.replace('images/wishes/', 'images/wishes/thumbs/');
    }

    function warmRandomWishImages(limit = wishesData.length) {
        const shuffled = wishesData
            .map((item, index) => ({ item, sortKey: ((index * 17) + 11) % wishesData.length }))
            .sort((left, right) => left.sortKey - right.sortKey)
            .slice(0, limit)
            .map(entry => entry.item);

        shuffled.forEach(item => {
            const thumbPath = getThumbPhotoPath(item.photo);
            if (warmImageCache.has(thumbPath)) {
                return;
            }

            const image = new Image();
            image.decoding = 'async';
            image.loading = 'eager';
            image.src = thumbPath;
            warmImageCache.add(thumbPath);
        });
    }

    /**
     * 随机获取一个未抽过的数据
     */
    function getRandomWish() {
        // 如果所有都抽过了，重置
        if (drawnIndices.length >= wishesData.length) {
            drawnIndices = [];
        }

        // 获取未抽过的索引
        const availableIndices = wishesData
            .map((_, i) => i)
            .filter(i => !drawnIndices.includes(i));

        // 随机选择一个
        const randomIndex = availableIndices[Math.floor(Math.random() * availableIndices.length)];
        drawnIndices.push(randomIndex);

        return wishesData[randomIndex];
    }

    /**
     * 执行抽签动画
     */
    async function draw() {
        if (drawBtn.disabled) {
            return;
        }

        const wish = getRandomWish();

        drawBtn.disabled = true;
        drawBtn.classList.add('is-drawing');
        drawBtn.innerHTML = '签文<br>浮现';

        cardContainer.style.display = 'none';
        resultCard.classList.remove('show');
        resultPhoto.classList.remove('clear');
        dailyQuote.classList.remove('show');
        resultBlessing.textContent = '';
        dailyQuote.textContent = '';

        await sleep(760);

        drawBtn.classList.remove('is-drawing');
        drawBtn.style.display = 'none';
        drawBtn.innerHTML = defaultDrawLabel;
        cardContainer.style.display = 'flex';

        resultPhoto.src = getThumbPhotoPath(wish.photo);
        resultPhoto.dataset.fullsrc = wish.photo;
        resultPhoto.onerror = () => {
            if (resultPhoto.src !== new URL(wish.photo, window.location.href).href) {
                resultPhoto.src = wish.photo;
            }
        };
        resultPhoto.classList.add('clear');

        resultCard.classList.add('show');

        if (resultPhoto.dataset.fullsrc) {
            const fullImage = new Image();
            fullImage.decoding = 'async';
            fullImage.src = resultPhoto.dataset.fullsrc;
            fullImage.addEventListener('load', () => {
                resultPhoto.src = resultPhoto.dataset.fullsrc;
            }, { once: true });
        }

        resultBlessing.textContent = wish.blessing;

        dailyQuote.textContent = `日签：${wish.dailyQuote}`;
        await sleep(180);
        dailyQuote.classList.add('show');
    }

    /**
     * 重置状态，准备下一次抽签
     */
    function reset() {
        cardContainer.style.display = 'none';
        drawBtn.style.display = 'flex';
        drawBtn.disabled = false;
        drawBtn.classList.remove('is-drawing');
        drawBtn.innerHTML = defaultDrawLabel;
        
        resultCard.classList.remove('show');
        resultPhoto.classList.remove('clear');
        dailyQuote.classList.remove('show');
        resultBlessing.textContent = '';
    }

    // 绑定事件
    drawBtn.addEventListener('click', draw);
    drawAgainBtn.addEventListener('click', reset);

    // 添加页面入场动画
    document.querySelector('.random-walk-container').classList.add('fade-in');
    warmRandomWishImages();
})();
