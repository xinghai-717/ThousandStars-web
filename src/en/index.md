---
layout: home
title: Thousand Stars Launcher | Server-Specific Launcher for Thousand Stars
description: Thousand Stars Launcher is the dedicated launcher for the Thousand Stars server
keywords: ThousandStars, Thousand Stars Launcher

hero:
  name: "Thousand Stars Launcher"
  text: "Dedicated launcher for Thousand Stars server"
  tagline: The PC version is based on PCL CE, and the mobile version is based on FCL, both offering more powerful server modpack installation and a better user experience
  image:
    src: /img/logo.ico
    alt: Thousand Stars Launcher
  actions:
    - theme: brand
      text: Download Now
      link: /en/download
    - theme: alt
      text: Learn More
      link: /en/about

features:
  - icon: 🔍
    title: Server Status Query
    details: Check server online player count, latency, and other status without entering the server.
  - icon: 📁
    title: Thousand Stars Instance Binding
    details: Bind mandatory game instance, disallow other instances, preventing issues caused by other launchers.
  - icon: 📦
    title: Direct Modpack Installation
    details: Automatically fetch server modpack addresses, support direct download and installation without manual steps.
  - icon: 👤
    title: Offline Account Support (PC only)
    details: Remove the requirement to log in with a genuine account at least once, ensuring offline players can log in normally.
  - icon: ☕
    title: Java Version Download (Mobile only)
    details: Only download Java 21 to avoid wasting bandwidth and storage on unnecessary Java versions.
  - icon: 🔓
    title: Open Source & Free
    details: Fully open-source secondary development project, free forever, with continuous updates and improvements.
---

<HomeUnderline />

<h2 style="text-align: center;">Some Screenshots</h2>

<ImageGallery :images="[
{ url: '/img/f1.png', alt: 'Thousand Stars Screenshot 1' },
{ url: '/img/x1.png', alt: 'Thousand Stars Screenshot 2' },
{ url: '/img/x2.png', alt: 'Thousand Stars Screenshot 3' },
{ url: '/img/x3.png', alt: 'Thousand Stars Screenshot 4' }
]" />

<div class="contributors-section">
  <h2 class="contributors-title">Thousand Stars Launcher Developers</h2>
  <div style="display: flex; gap: 20px; align-items: center; justify-content: center;">
    <a href="https://github.com/xinghai-717" target="_blank" rel="noopener noreferrer">
      <img src="/img/xinghai.jpg" width="128" height="128" alt="Thousand Stars Launcher Developer" />
    </a>
    <a href="https://thousand-stars.sourceforge.io" target="_blank" rel="noopener noreferrer">
      <img src="/img/bobo.png" width="128" height="128" alt="Thousand Stars Launcher Developer" />
    </a>
  </div>
  <div style="display: flex; gap: 20px; align-items: center; justify-content: center;">
    <h4 style="margin-right: 20px;">PC Developer</h4>
    <h4>Mobile Developer</h4>
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