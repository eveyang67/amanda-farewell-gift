# 素材放置说明

请将新增素材按以下位置放入仓库：

## 1. Excel 数据表

放到：

`data/raw/wishes.xlsx`

表格列顺序建议固定为：

1. 照片文件名
2. 同事祝福
3. 日签

注意：

- 第一列文件名必须包含扩展名，例如 `photo01.jpg`
- 第一列文件名必须与 `images/wishes/` 中的实际文件名完全一致

## 2. 祝福页 / 随机抽签页照片

放到：

`images/wishes/`

这部分照片需要和 Excel 一一对应。

## 3. 爱心照片墙 / 照片长廊照片

放到：

`images/gallery/`

这部分照片不需要出现在 Excel 里，会单独用于新增照片展示板块。

注意：

- 建议优先使用 `jpg`、`jpeg`、`png`、`webp`
- `heic` / `heif` 在网页中的兼容性较差，当前不会被自动接入页面展示

## 4. 当前数据接入方式

- `js/data.js` 是页面直接使用的统一数据源
- 其中 `wishesData` 来自 Excel 与 `images/wishes/`
- 其中 `galleryData` 来自 `images/gallery/` 中浏览器兼容的图片
