---
layout: home
title: 千星 启动器官网 | 千星 服务器专用启动器
description: 千星 启动器是 千星 服务器的专用启动器
keywords: ThousandStars,千星启动器

hero:
  name: "千星 启动器"
  text: "千星 服务器的专用启动器"
  tagline: 电脑版与手机版分别基于 PCL CE 、 FCL二次开发，提供更强大的服务器整合包安装功能和更好的用户体验
  image:
    src: /img/logo.ico
    alt: 千星 启动器
  actions:
    - theme: brand
      text: 立即下载  
      link: /download
    - theme: alt
      text: 了解更多
      link: /about

features:
  - icon: 🔍
    title: 服务器状态查询
    details: 无需进服即可查看服务器在线人数、延迟等状态。
  - icon: 📁
    title: 千星实例绑定
    details: 绑定强行游戏实例，不允许其他实例启动，杜绝启动器导致的其他实例出现问题。
  - icon: 📦
    title: 整合包直接安装
    details: 自动获取服务器整合包地址，支持直接下载并安装整合包，无需手动操作。
  - icon: 👤
    title: 离线账号支持(电脑版特供)
    details: 移除必须登录一次正版账户限制，确保离线玩家正常登录。
  - icon: ☕
    title: Java 版本下载(手机版特供)
    details: 仅下载JAVA 21避免下载无用的JAVA版本导致的宽带与存储空间浪费。
  - icon: 🔓
    title: 开源免费
    details: 完全开源的二次开发项目，永久免费使用，持续更新和改进。
---

<HomeUnderline />

<h2 style="text-align: center;">部分页面截图</h2>

<ImageGallery :images="[
  { url: '/img/f1.png', alt: 'Thousand Stars Screenshot 1' },
  { url: '/img/x1.png', alt: 'Thousand Stars Screenshot 2' },
  { url: '/img/x2.png', alt: 'Thousand Stars Screenshot 3' },
  { url: '/img/x3.png', alt: 'Thousand Stars Screenshot 4' }
]" />

<div class="contributors-section">
  <h2 class="contributors-title">千星 启动器开发者</h2>
  <div style="display: flex; gap: 20px; align-items: center; justify-content: center;">
    <a href="https://github.com/xinghai-717" target="_blank" rel="noopener noreferrer">
      <img src="/img/xinghai.jpg" width="128" height="128" alt="千星 启动器开发者" />
    </a>
    <a href="https://thousand-stars.sourceforge.io" target="_blank" rel="noopener noreferrer">
      <img src="/img/bobo.png" width="128" height="128" alt="千星 启动器开发者" />
    </a>
  </div>
  <div style="display: flex; gap: 20px; align-items: center; justify-content: center;">
    <h4 style="margin-right: 20px;">电脑版开发者</h4>
    <h4>手机版开发者</h4>
  </div>
</div>

<style>
.contributors-section {
  text-align: center;
  padding: 4rem 1.5rem 6rem;
  max-width: 960px;
  margin: 0 auto;
}
.contributors-title {
  font-size: 1.8rem;
  font-weight: 600;
  margin-bottom: 2rem;
  color: var(--vp-c-text-1);
}
.contributors-section img {
  max-width: 100%;
  height: auto;
}
</style>