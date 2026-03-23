/**
 * 往昔记忆 - 卡片展示逻辑
 */

(function() {
    const memoriesGrid = document.getElementById('memoriesGrid');

    /**
     * 创建单个记忆卡片
     */
    function createMemoryCard(data) {
        const card = document.createElement('div');
        card.className = 'memory-card fade-in';
        card.innerHTML = `
            <img class="memory-photo" src="${data.photo}" alt="合影照片" onerror="this.src='data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 400 300%22><rect fill=%22%23f5ede3%22 width=%22400%22 height=%22300%22/><text x=%22200%22 y=%22150%22 text-anchor=%22middle%22 fill=%22%23999%22 font-size=%2220%22>照片加载中...</text></svg>'">
            <div class="memory-content">
                <p class="memory-blessing">${data.blessing}</p>
            </div>
        `;
        return card;
    }

    /**
     * 渲染所有记忆卡片
     */
    function renderMemories() {
        // 清空容器
        memoriesGrid.innerHTML = '';

        // 为每个数据创建卡片
        wishesData.forEach((data, index) => {
            const card = createMemoryCard(data);
            // 添加延迟动画效果
            card.style.animationDelay = `${index * 0.1}s`;
            memoriesGrid.appendChild(card);
        });
    }

    // 页面加载完成后渲染
    renderMemories();

    // 添加页面入场动画
    document.querySelector('.memories-container').classList.add('fade-in');
})();
