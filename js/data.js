/**
 * 数据配置文件
 * 
 * 使用说明：
 * 1. 将照片放入 images/ 目录
 * 2. 修改下面的数组，填入真实的照片路径、祝福语和日签
 * 3. 保存后刷新网页即可看到更新
 */

// 占位符图片（粉色渐变背景）
const placeholderPhoto = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'%3E%3Cdefs%3E%3ClinearGradient id='g' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' stop-color='%23F5E6D3'/%3E%3Cstop offset='100%25' stop-color='%23D4A574'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect fill='url(%23g)' width='400' height='300'/%3E%3Ctext x='200' y='150' text-anchor='middle' fill='%23FFFFFF' font-size='48'%3E📷%3C/text%3E%3Ctext x='200' y='200' text-anchor='middle' fill='%23FFFFFF' font-size='16' font-family='PingFang SC, Microsoft YaHei, sans-serif'%3E待添加照片%3C/text%3E%3C/svg%3E";

const wishesData = [
    {
        id: 1,
        photo: placeholderPhoto,
        blessing: "感谢您一直以来的指导和关怀，凡是过往，皆为序章。",
        dailyQuote: "今日宜：逐光而行"
    },
    {
        id: 2,
        photo: placeholderPhoto,
        blessing: "Everything's coming up roses，愿您的未来如玫瑰般绚烂！",
        dailyQuote: "今日宜：笑口常开"
    },
    {
        id: 3,
        photo: placeholderPhoto,
        blessing: "您不仅是我的领导，更是我的良师益友。感谢您这些年的栽培，祝您前路繁花似锦！",
        dailyQuote: "今日宜：放下过去，拥抱未来"
    },
    {
        id: 4,
        photo: placeholderPhoto,
        blessing: "感谢您创造的温暖团队氛围，让我们每天都能快乐工作。愿您未来的日子里充满阳光和欢笑！",
        dailyQuote: "今日宜：微笑面对每一次离别，期待每一次重逢"
    },
    {
        id: 5,
        photo: placeholderPhoto,
        blessing: "您的离开让我们感到不舍，但更祝福您追逐新的梦想。记得常回来看看，我们永远是您的伙伴！",
        dailyQuote: "今日宜：珍惜相遇，期待重逢"
    },
    {
        id: 6,
        photo: placeholderPhoto,
        blessing: "愿您在新的旅程中，遇见更美的风景，收获更多的幸福！",
        dailyQuote: "今日宜：似曾相识"
    }
];

// 导出数据供其他文件使用
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { wishesData };
}
