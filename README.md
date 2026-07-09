# 模拟项目说明123456

git-freshman-playground提供一组轻量、语言无关的训练素材，用于练习 GitHub 协作流程。

## 设计目的

这些文件不代表真实业务逻辑，而是用来承载以下练习动作：

- 修改文件
- 提交 Commit
- 合并分支
- 制造和解决冲突
- 准备发布
- 进行 hotfix
- 快速完成 first PR

## 为什么不用复杂代码工程

- 训练重点是 Git 操作，不是编程语言能力
- 参与者背景不完全一致，不应让语言门槛影响训练效果
- 文本类素材更容易重复演练、复盘和讲解

## 目录说明

`site/`：

- `index.html`: 统一入口页面。

`site/first-pr/`：

- `index.html`: First PR 页面。
- `page.js`: First PR 页面脚本。

`site/product-board/`：

- `index.html`: Product Board 页面（只读展示）。
- `page.js`: Product Board 页面脚本（读取 Markdown 并渲染列表/卡片）。

`site/shared/`：

- `css/site.css`: 站点样式文件
- `js/common.js`: 公共导航与文件读取逻辑

`baseline/`：

每次进阶训练都会用到的基础素材：

- `PRODUCT_BOARD.md`: 模拟产品任务板
- `FIRST_PR_REFLECTIONS.md`: First PR 页面感想配置
- `TEAM_NOTES.md`: 模拟团队协作记录
- `VERSION.txt`: 当前版本号
- `CHANGELOG.md`: 版本变更记录

## 页面访问

GitHub Pages 启用后，可通过同一站点访问两个页面并用导航切换：

- `https://linde-md.github.io/git-freshman-playground/site/`
- `https://linde-md.github.io/git-freshman-playground/site/first-pr/`
- `https://linde-md.github.io/git-freshman-playground/site/product-board/`

## 如何制造冲突

最简单的方法是：

1. 两个分支修改同一个文件中的相邻或相同段落
2. 先合并其中一个分支
3. 再让另一个分支同步目标分支

这能稳定地产生适合教学的文本冲突。