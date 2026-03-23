/**
 * 数据配置文件
 * 
 * 使用说明：
 * 1. 将照片放入 images/ 目录
 * 2. 修改下面的数组，填入真实的照片路径、祝福语和日签
 * 3. 保存后刷新网页即可看到更新
 */

const wishesData = [
    {
        id: 1,
        photo: "images/photo1.jpg",
        blessing: "感谢您一直以来的指导和关怀，您的智慧和耐心让我们受益匪浅。愿您前程似锦，一切顺利！",
        dailyQuote: "今日宜：珍藏每一份回忆，迎接每一个新的开始。"
    },
    {
        id: 2,
        photo: "images/photo2.jpg",
        blessing: "和您共事的日子是我职业生涯中最美好的时光。感谢您教会我的一切，祝您未来一切安好！",
        dailyQuote: "今日宜：心怀感恩，勇敢前行。"
    },
    {
        id: 3,
        photo: "images/photo3.jpg",
        blessing: "您不仅是我的领导，更是我的良师益友。感谢您这些年的栽培，祝您前路繁花似锦！",
        dailyQuote: "今日宜：放下过去，拥抱未来。"
    },
    {
        id: 4,
        photo: "images/photo4.jpg",
        blessing: "感谢您创造的温暖团队氛围，让我们每天都能快乐工作。愿您未来的日子里充满阳光和欢笑！",
        dailyQuote: "今日宜：微笑面对每一次离别，期待每一次重逢。"
    },
    {
        id: 5,
        photo: "images/photo5.jpg",
        blessing: "您的离开让我们感到不舍，但更祝福您追逐新的梦想。记得常回来看看，我们永远是您的伙伴！",
        dailyQuote: "今日宜：珍惜相遇，期待重逢。"
    }
];

// 导出数据供其他文件使用
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { wishesData };
}
