# CloudBase 部署说明

这个项目可以直接作为腾讯云 CloudBase 的静态托管站点部署。

## 目录说明

- 站点根目录：项目根目录
- 入口文件：`index.html`
- 资源目录：`css/`、`js/`、`images/`

## 推荐原因

- 国内访问通常比 GitHub Pages 更稳
- 适合纯静态站点
- 可以继续把 GitHub 作为代码仓库

## 建议流程

1. 在腾讯云开通 CloudBase 静态托管
2. 新建环境
3. 上传当前项目根目录，或连接 GitHub 仓库自动部署
4. 绑定自定义域名
5. 如果要长期稳定在中国大陆访问，补齐 ICP 备案

## 当前项目的额外优化

这个仓库已经支持：

- 列表页优先使用缩略图
- 点开大图时再加载原图
- 图片目录可直接用于静态托管

## 上线前核对

- `index.html` 能本地直接打开
- `memories.html`、`gallery.html` 跳转正常
- `images/wishes/thumbs/` 与 `images/gallery/thumbs/` 已生成
