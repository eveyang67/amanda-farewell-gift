# 项目上下文

## 项目概述

这是一个送给即将离职老板 Amanda 的静态纪念网站。

当前项目已经从早期的多页入口，演进为：

- `index.html`：最终版单页入口，整合全部主要内容
- `random-walk.html`：随机祝福独立页
- `gallery.html`：照片长廊独立页
- `memories.html`：全部祝福独立页

整体气质应保持温馨、简洁、带一点文艺感，并且偏私人纪念礼物而不是商业网站。

## 技术栈

- 静态 HTML
- `css/style.css` 中的纯 CSS
- `js/` 目录中的原生 JavaScript
- Docker + Nginx 作为可选本地运行方式
- GitHub Pages 作为正式部署方式

当前仓库没有：

- 前端框架
- 构建工具
- 包管理器
- 自动化测试

## 当前目录结构

- `index.html`：最终版单页首页，整合随机祝福、照片长廊、全部祝福
- `random-walk.html`：随机祝福独立页
- `gallery.html`：照片长廊独立页
- `memories.html`：全部祝福独立页
- `css/style.css`：全站共享样式、动画与响应式规则
- `js/data.js`：统一数据源，包含 `wishesData` 和 `galleryData`
- `js/random-walk.js`：随机抽签逻辑、动画时序、打字机效果
- `js/gallery.js`：爱心照片墙、原图照片流、大图预览逻辑
- `js/memories.js`：祝福卡片渲染逻辑
- `data/raw/wishes.xlsx`：原始 Excel 录入源
- `images/wishes/`：与 Excel 一一对应的祝福页照片
- `images/gallery/`：照片长廊素材
- `docs/PROJECT_STRUCTURE.md`：项目结构说明
- `docs/PRD.md`：产品需求文档
- `MATERIALS.md`：素材放置说明
- `background.md`：最初需求背景
- `brief.md`：后续增强需求
- `DEVELOPMENT.md`：早期开发记录
- `Dockerfile`、`docker-compose.yml`：本地静态托管配置

## 主页面说明

主页面就是仓库根目录下的 `index.html`。

如果后续任务里提到“主页”“首页”“主页面”“landing page”“最终版网页”，默认都指这个文件，除非用户明确说明是别的页面。

## 产品功能说明

### 首页 / 最终版单页

- 顶部封面标题
- 跳转到不同内容区块的入口卡片
- 单页内整合以下内容：
  - 随机漫步
  - 照片长廊
  - 往昔记忆

### 随机漫步

- 用户点击圆形抽签按钮
- 从 `wishesData` 中随机抽取一条内容，并避免短时间内重复
- 页面展示：
  - 一张照片
  - 一段离职祝福
  - 一条带“日签：”前缀的日签内容
- 当前动画顺序为：
  - 隐藏抽签按钮
  - 显示结果卡片
  - 照片由模糊变清晰
  - 祝福语打字机显示
  - 日签淡入

### 照片长廊

- 爱心照片墙：尽可能使用更多照片拼出爱心轮廓
- 原图照片流：按原始图片比例展示，避免裁切主体
- 点击任意照片可放大预览，并支持上一张 / 下一张切换

### 往昔记忆

- 将 `wishesData` 中的全部内容一次性渲染出来
- 使用响应式卡片网格布局
- 每张卡片包含照片和祝福语

## 数据模型

`js/data.js` 中定义了两个运行时数据源：

### `wishesData`

每一项包含：

- `id`
- `name`
- `photo`
- `blessing`
- `dailyQuote`

### `galleryData`

每一项包含：

- `id`
- `photo`
- `title`

如果要增加、修改、删除内容，优先更新素材与数据源，不要把内容直接硬编码进页面 HTML。

## 数据维护规则

- `data/raw/wishes.xlsx` 是祝福数据的原始录入表
- `images/wishes/` 中的文件名必须与 Excel 第一列完全一致
- `images/gallery/` 用于照片长廊素材
- `heic` / `heif` 目前不直接用于网页展示，因为浏览器兼容性不稳定
- 当前页面直接读取 `js/data.js`，而不是在浏览器里直接读取 Excel

## 样式与视觉约束

- 当前项目只有一份共享样式表
- 视觉主色是暖米白、暖棕、金色系
- 现有界面特征包括柔和阴影、圆角、轻微悬浮与渐入动画
- 当前重点适配：
  - 手机端
  - iPad 端

除非用户明确要求重新设计，否则应延续现在的温暖纪念感，而不是改成商业化或过于炫技的风格。

## 开发与修改原则

- 优先做小而直接的改动，不要无故引入框架或复杂工具链
- 保持项目为静态站点，除非用户明确要求做架构升级
- 能复用现有样式和脚本时，尽量复用
- 如果新增文案或版块，优先保持中文语境和告别纪念的情感基调
- 如果修改数据行为，继续以 `js/data.js` 作为页面唯一运行时数据源
- 如果需要重新整理数据，优先从 `data/raw/wishes.xlsx` 和图片目录出发

## 部署信息

- `Dockerfile` 使用 Nginx 托管整个仓库内容
- `docker-compose.yml` 将本地 `8080` 映射到容器 `80`
- 正式部署目标为 GitHub Pages
- 当前远端仓库为：
  - `https://github.com/eveyang67/amanda-farewell-gift.git`

## 资源说明

- 页面照片资源主要位于：
  - `images/wishes/`
  - `images/gallery/`
- `images/` 根目录下的 `photo1.jpg` 到 `photo6.jpg` 为早期版本遗留资源
- 仓库根目录还有一个本地截图文件，主要是参考资料，不属于运行时代码

## 已知限制

- 当前没有自动化测试
- 当前没有构建步骤
- 浏览器端行为依赖 HTML 中脚本的直接加载顺序
- 使用 `wishesData` / `galleryData` 的脚本必须在数据脚本之后加载
- `js/data.js` 当前是运行时数据文件，但还没有独立的自动生成脚本

## 后续 Agent 的建议阅读顺序

1. 先看 `docs/PROJECT_STRUCTURE.md`
2. 再看 `docs/PRD.md`
3. 再看 `index.html`
4. 再看 `js/data.js`
5. 然后看 `js/random-walk.js`、`js/gallery.js`、`js/memories.js`
6. 最后看 `css/style.css`

理解完这些之后，再开始改交互、视觉、内容或部署。
