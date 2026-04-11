# Amanda Farewell Gift

送给 Amanda 的离职纪念网站。

这是一个纯静态网页项目，核心内容包括：

- 随机抽取同事祝福与日签
- 爱心照片墙与照片长廊
- 全部祝福卡片总览

当前最终版主入口是 `index.html`，已将主要内容整合到一个页面里，适合在手机端和 iPad 端直接浏览。

## 在线地址

- GitHub Pages: https://eveyang67.github.io/amanda-farewell-gift/

## 本地查看

### 方式 1：直接打开

直接打开根目录下的 `index.html` 即可查看当前整合后的最终版页面。

### 方式 2：Docker

```bash
docker-compose up -d
```

启动后访问：

`http://localhost:8080`

## 页面说明

- `index.html`
  最终版单页入口，整合封面、随机漫步、照片长廊、往昔记忆
- `random-walk.html`
  随机祝福独立页
- `gallery.html`
  照片长廊独立页
- `memories.html`
  全部祝福独立页

## 数据与素材

### 原始数据

- `data/raw/wishes.xlsx`

表格约定三列：

1. 照片文件名
2. 同事祝福
3. 日签

### 祝福照片

- `images/wishes/`

要求：

- 文件名必须和 Excel 第一列完全一致

### 照片长廊素材

- `images/gallery/`

当前网页优先使用浏览器兼容格式：

- `jpg`
- `jpeg`
- `png`
- `webp`
- `gif`
- `avif`
- `svg`

`heic` / `heif` 目前不会直接进入网页展示。

### 运行时数据

- `js/data.js`

页面当前直接使用这个文件中的：

- `wishesData`
- `galleryData`

## 主要代码位置

- `css/style.css`
  全站样式、动效、响应式规则
- `js/random-walk.js`
  随机祝福逻辑
- `js/gallery.js`
  爱心照片墙、原图照片流、大图预览逻辑
- `js/memories.js`
  全部祝福卡片渲染逻辑

## 文档

- `docs/PROJECT_STRUCTURE.md`
  项目结构说明
- `docs/PRD.md`
  产品需求文档
- `MATERIALS.md`
  素材放置说明
- `AGENT.MD`
  面向后续 Agent 的项目说明

## 技术栈

- HTML
- CSS
- 原生 JavaScript
- Docker + Nginx
- GitHub Pages

## 说明

这是一个礼物型静态站点，默认设计方向应保持温暖、克制、文艺的纪念感，而不是商业化活动页风格。
