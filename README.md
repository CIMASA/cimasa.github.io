# Mingshu Cai — Academic Homepage

面向 GitHub Pages 的个人学术网站。纯 HTML / CSS / JavaScript，无需安装依赖。

## 包含内容

- 中英文切换，自动记住语言偏好
- 个人简介、研究方向、四篇代表论文、教育经历、科研支持与联系方式
- 论文分类筛选、BibTeX 弹窗与复制、引用文件下载
- 手机端适配、键盘操作与减少动态效果支持
- 所有插图均为概念示意，并非实验结果或本人照片

## 发布到 GitHub Pages

目标账号：CIMASA。目标仓库：cimasa.github.io。

下载发布包后，将压缩包中的文件和 assets 文件夹上传到仓库根目录。注意上传解压后的内容，不是 ZIP 本身；index.html 必须位于仓库根目录。

在仓库 Settings → Pages 中，Source 选择 Deploy from a branch，Branch 选择 main，目录选择 / (root)，保存。

部署成功后，访问 https://cimasa.github.io/ 。这是预期地址，在 GitHub 确认部署完成之前并不表示已经上线。

本项目源码仓库使用 dist/ 保存网页。导出的 GitHub Pages 发布包已将 dist/ 内的文件放到压缩包根目录。

## 本地预览与修改

直接打开 index.html 即可浏览；如需本地服务器，可在发布包目录运行 python3 -m http.server 8000。

主要内容与样式在 index.html 内。带 data-en / data-zh 的元素分别保存中英文文本。修改论文后，请同时更新页面底部的 citations 对象与 publications.bib。

邮箱：mignshucai@gmail.com。Google Scholar 用户 ID：ogBpGrUAAAAJ。GitHub：CIMASA。

## 内容来源与范围

论文标题、作者顺序及发表信息核对于 2026-11-09：

- https://arxiv.org/abs/2603.08809 — CVPR 2026
- https://arxiv.org/abs/2512.21015 — IEEE TMM 2026
- https://doi.org/10.1109/TMM.2026.3651097 — 卷 28，页 3202–3213
- https://arxiv.org/abs/2605.29509 — KGEdit 预印本
- https://arxiv.org/abs/2512.21032 — IJCB 2025

教育背景、IJCB 口头报告与 W-SPRING-AI 来自本人既有材料。该版本未添加未公开研究计划、私有仓库、引用数量或未经确认的实习时间。

发布前可按需补充本人照片、正式简历和论文真实展示图。

## 官方说明

https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site
