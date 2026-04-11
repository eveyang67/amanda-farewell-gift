# 项目结构说明

## 项目定位

这是一个送给即将离职老板 Amanda 的静态纪念网站。

当前主体验已经整合到 `index.html` 单页中，便于在手机端和 iPad 端直接浏览全部内容；同时仍保留若干拆分页面，作为独立访问入口和结构备份。

## 当前目录结构

```text
website/
├── index.html              # 最终版单页入口，整合随机祝福、照片长廊、全部祝福
├── random-walk.html        # 随机祝福独立页
├── gallery.html            # 照片长廊独立页
├── memories.html           # 全部祝福独立页
├── css/
│   └── style.css           # 全站共享样式与响应式规则
├── js/
│   ├── data.js             # 统一数据源：wishesData + galleryData
│   ├── random-walk.js      # 随机抽签逻辑
│   ├── gallery.js          # 爱心照片墙、照片流、大图预览逻辑
│   └── memories.js         # 祝福卡片渲染逻辑
├── images/
│   ├── wishes/             # 和 Excel 一一对应的祝福页照片
│   ├── gallery/            # 照片长廊素材
│   └── photo1.jpg...       # 项目早期遗留图片
├── data/
│   └── raw/
│       └── wishes.xlsx     # 原始 Excel 数据
├── docs/
│   ├── PROJECT_STRUCTURE.md
│   └── PRD.md
├── AGENT.MD                # 面向后续 Agent 的项目说明
├── MATERIALS.md            # 素材放置规则
├── background.md           # 初始需求背景
├── brief.md                # 后续增强需求说明
├── DEVELOPMENT.md          # 早期开发记录
├── Dockerfile              # Nginx 静态托管配置
└── docker-compose.yml      # 本地运行配置
```

## 页面职责

### `index.html`

- 当前默认主入口
- 已整合以下区块：
  - 首页封面
  - 随机漫步
  - 照片长廊
  - 往昔记忆
- 适合作为最终交付页面和 GitHub Pages 首页

### `random-walk.html`

- 保留单独的随机抽签体验
- 用于独立调试抽签动画和祝福展示

### `gallery.html`

- 保留单独的照片长廊体验
- 用于独立调试爱心照片墙和大图查看

### `memories.html`

- 保留单独的全部祝福展示
- 用于独立查看完整卡片列表

## 数据组织方式

### `data/raw/wishes.xlsx`

- 原始录入源
- 当前约定 3 列：
  1. 照片文件名
  2. 同事祝福
  3. 日签

### `images/wishes/`

- 存放和 Excel 一一对应的照片
- 文件名必须和 Excel 第一列完全一致

### `images/gallery/`

- 存放照片长廊素材
- 页面当前仅接入浏览器兼容格式：
  - `jpg`
  - `jpeg`
  - `png`
  - `webp`
  - `gif`
  - `avif`
  - `svg`
- `heic` / `heif` 暂不直接用于网页展示

### `js/data.js`

- 当前运行时统一数据源
- 包含：
  - `wishesData`
  - `galleryData`
- 页面逻辑直接依赖这个文件，不直接读取 Excel

## 推荐维护方式

### 内容更新

- 更新祝福与日签：优先更新 `data/raw/wishes.xlsx` 和 `images/wishes/`
- 更新照片长廊：优先新增或替换 `images/gallery/`

### 代码更新

- 样式调整集中在 `css/style.css`
- 随机祝福交互修改看 `js/random-walk.js`
- 照片墙与预览修改看 `js/gallery.js`
- 全部祝福卡片修改看 `js/memories.js`

## 当前已知遗留

- `images/` 根目录下的 `photo1.jpg` 到 `photo6.jpg` 属于早期版本遗留资源
- `js/data.js` 当前由素材生成结果承载，但还没有单独的自动化生成脚本
- 项目仍无自动化测试，验证主要依赖浏览器查看和脚本语法检查
