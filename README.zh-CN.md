<div align="center">

# @kwooshung/console-badge

![GitHub Release Date - Published_At](https://img.shields.io/github/release-date/kwooshung/ConsoleBadge?labelColor=272e3b&color=00b42A&logo=github)
![GitHub last commit](https://img.shields.io/github/last-commit/kwooshung/ConsoleBadge?labelColor=272e3b&color=165dff)
![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/kwooshung/ConsoleBadge?labelColor=272e3b&color=165dff)
![GitHub top language](https://img.shields.io/github/languages/top/kwooshung/ConsoleBadge?labelColor=272e3b&color=165dff)
![GitHub pull requests](https://img.shields.io/github/issues-pr/kwooshung/ConsoleBadge?labelColor=272e3b&color=165dff)
![GitHub issues](https://img.shields.io/github/issues/kwooshung/ConsoleBadge?labelColor=272e3b&color=165dff)
[![NPM Version](https://img.shields.io/npm/v/@kwooshung/console-badge?labelColor=272e3b&color=165dff)](https://www.npmjs.com/package/@kwooshung/console-badge)
[![Npm.js Downloads/Week](https://img.shields.io/npm/dw/@kwooshung/console-badge?labelColor=272e3b&labelColor=272e3b&color=165dff&logo=npm)](https://www.npmjs.com/package/@kwooshung/console-badge)
[![Github CI/CD](https://github.com/kwooshung/ConsoleBadge/actions/workflows/ci.yml/badge.svg)](https://github.com/kwooshung/ConsoleBadge/actions/)
[![codecov](https://codecov.io/gh/kwooshung/ConsoleBadge/graph/badge.svg?token=VVZJE7H0KD)](https://codecov.io/gh/kwooshung/ConsoleBadge)
[![Maintainability](https://api.codeclimate.com/v1/badges/662609ca5c84f9a6357e/maintainability)](https://codeclimate.com/github/kwooshung/ConsoleBadge/maintainability)
[![GitHub License](https://img.shields.io/github/license/kwooshung/ConsoleBadge?labelColor=272e3b&color=165dff)](LICENSE)
[![Gitee Repo](https://img.shields.io/badge/gitee-ConsoleBadge-165dff?logo=gitee)](https://gitee.com/kwooshung/ConsoleBadge/)
![Github Stars](https://img.shields.io/github/stars/kwooshung/ConsoleBadge?labelColor=272e3b&color=165dff)

<p align="center">
    <a href="README.md">English</a> | 
    <a href="README.zh-CN.md" style="font-weight:700;color:#165dff;text-decoration:underline;">中文</a>
</p>
</div>

# 为什么开发它？

在开源程序中，存在各种各样的徽章，就上面所展示的徽章一样；我希望在控制台中也能显示这样的徽章，方便展示当前程序的信息，比如版本号、构建时间、构建状态等等信息。

# 为什么使用它？

- 支持中英文双语注释；
- 学习成本低，链式调用，使用简单且灵活；
- **ES6** 的现代特性实现；
- **TypeScript** 编写，类型安全；
- 纯脚本，你可以依赖于任何框架，任何平台，任何环境；
- 可按需引入，`esm` 模块化，天生支持 **树摇（tree-shaking）**，不用担心打包后的体积；
- 当然本项目也提供了 `commonjs` 规范的 `cjs` 版本；
- 测试覆盖率 **100%**；

# 安装

## npm

```bash
npm install @kwooshung/console-badge
```

## yarn

```bash
yarn add @kwooshung/console-badge
```

## pnpm

```bash
pnpm add @kwooshung/console-badge
```

# 使用方法

## 基本用法如下：

```typescript
import ConsoleBadge from '@kwooshung/console-badge';

const cb = new ConsoleBadge('version', 'v1.2.3');
cb.[这里是各种设置函数，支持链式调用].print();
```

## 演示截图

> 以下只演示了部分函数功能；

![ConsoleBadge 演示截图](./docs/images/demo.png)

## 有哪些函数，为什么不在这里列出？

- 本来想列出来的，但是考虑到使用简单，代码也简单，直接看源码就好了 [戳这里，直接看源码](./src/index.ts)。
- 函数命名都很直观，不需要担心看不懂。
- 如果你用的是ts，本身也会有提示，而且注释有中英文双语，使用非常简单，没有什么好担心的。
