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
     * 打字机效果显示文字
     */
    function typeWriter(element, text, speed = 50) {
        return new Promise(resolve => {
            element.textContent = '';
            element.classList.add('typing-cursor');
            
            let i = 0;
            function type() {
                if (i < text.length) {
                    element.textContent += text.charAt(i);
                    i++;
                    setTimeout(type, speed);
                } else {
                    element.classList.remove('typing-cursor');
                    resolve();
                }
            }
            type();
        });
    }

    /**
     * 执行抽签动画
     */
    async function draw() {
        const wish = getRandomWish();

        // 隐藏按钮，显示卡片容器
        drawBtn.style.display = 'none';
        cardContainer.style.display = 'flex';

        // 重置状态
        resultCard.classList.remove('show');
        resultPhoto.classList.remove('clear');
        dailyQuote.classList.remove('show');
        resultBlessing.textContent = '';

        // 设置照片（先模糊）
        resultPhoto.src = wish.photo;

        // 延迟后翻转卡片
        await sleep(100);
        resultCard.classList.add('show');

        // 等待卡片翻转动画完成，然后照片变清晰
        await sleep(800);
        resultPhoto.classList.add('clear');

        // 等待照片清晰后，显示祝福语（打字机效果）
        await sleep(500);
        await typeWriter(resultBlessing, wish.blessing, 40);

        // 最后显示日签
        await sleep(300);
        dailyQuote.textContent = wish.dailyQuote;
        dailyQuote.classList.add('show');
    }

    /**
     * 重置状态，准备下一次抽签
     */
    function reset() {
        cardContainer.style.display = 'none';
        drawBtn.style.display = 'flex';
        
        resultCard.classList.remove('show');
        resultPhoto.classList.remove('clear');
        dailyQuote.classList.remove('show');
        resultBlessing.textContent = '';
    }

    /**
     * 工具函数：延迟
     */
    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    // 绑定事件
    drawBtn.addEventListener('click', draw);
    drawAgainBtn.addEventListener('click', reset);

    // 添加页面入场动画
    document.querySelector('.random-walk-container').classList.add('fade-in');
})();
