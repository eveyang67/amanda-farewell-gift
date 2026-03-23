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
        blessing: "感谢您一直以来的指导和关怀，凡是过往，皆为序章。",
        dailyQuote: "今日宜：逐光而行"
    },
    {
        id: 2,
        photo: "images/photo2.jpg",
        blessing: "Everything's coming up roses，愿您的未来如玫瑰般绚烂！",
        dailyQuote: "今日宜：笑口常开"
    },
    {
        id: 3,
        photo: "images/photo3.jpg",
        blessing: "您不仅是我的领导，更是我的良师益友。感谢您这些年的栽培，祝您前路繁花似锦！",
        dailyQuote: "今日宜：放下过去，拥抱未来"
    },
    {
        id: 4,
        photo: "images/photo4.jpg",
        blessing: "感谢您创造的温暖团队氛围，让我们每天都能快乐工作。愿您未来的日子里充满阳光和欢笑！",
        dailyQuote: "今日宜：微笑面对每一次离别，期待每一次重逢"
    },
    {
        id: 5,
        photo: "images/photo5.jpg",
        blessing: "您的离开让我们感到不舍，但更祝福您追逐新的梦想。记得常回来看看，我们永远是您的伙伴！",
        dailyQuote: "今日宜：珍惜相遇，期待重逢"
    },
    {
        id: 6,
        photo: "images/photo6.jpg",
        blessing: "愿您在新的旅程中，遇见更美的风景，收获更多的幸福！",
        dailyQuote: "今日宜：似曾相识"
    }
];

// 导出数据供其他文件使用
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { wishesData };
}
