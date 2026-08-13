import { figure } from '@mdit/plugin-figure';
import { defineConfig, type HeadConfig } from 'vitepress';
import { navTranslations, themeConfigTranslations } from './data/i18n';

// SEO 相关常量
const SITE_URL = 'https://pclce-web.demo.fis.ink';
const SITE_NAME = '千星 启动器';
const DEFAULT_DESCRIPTION =
  '千星 启动器电脑版，千星 启动器手机版分别是基于 PCL CE 、 FCL二次开发的启动器，提供更强大的功能服务器整合包安装功能和更好的用户体验';
const DEFAULT_KEYWORDS = 'ThousandStars,千星启动器';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  srcDir: './src',
  title: '千星 启动器',
  description: '开源免费的 Minecraft 启动器',
  cleanUrls: true,
  sitemap: {
    hostname: SITE_URL,
  },

  markdown: {
    lineNumbers: true,
    image: { lazyLoading: true },
    config: (md) => {
      md.use(figure);
    },
  },

  // 支持 iconify-icon 组件
  vue: {
    template: {
      compilerOptions: { isCustomElement: (tag) => tag === 'iconify-icon' },
    },
  },

  head: [
    ['link', { rel: 'icon', href: '/img/logo.ico' }],
    ['meta', { name: 'theme-color', content: '#0066CC' }],
    [
      'script',
      {
        defer: '',
        src: 'https://um.fis.ink/script.js',
        'data-website-id': '4e7333ce-6a82-408f-9ed5-bd0d0784cb5b',
      },
    ],
    // SEO 基础标签
    ['meta', { name: 'author', content: 'PCL Community' }],
    ['meta', { name: 'keywords', content: DEFAULT_KEYWORDS }],
    ['meta', { name: 'robots', content: 'index, follow' }],
    // 预连接优化
    [
      'link',
      { rel: 'preconnect', href: 'https://github.com', crossorigin: '' },
    ],
    ['link', { rel: 'dns-prefetch', href: 'https://github.com' }],
  ],

  // 动态生成 SEO 标签
  transformPageData(pageData) {
    const pagePath = pageData.relativePath
      .replace(/\.md$/, '')
      .replace(/\/index$/, '/');
    const canonicalUrl = `${SITE_URL}/${pagePath}`;
    const ogImage = pageData.frontmatter.ogImage || '/img/f1.png';
    const pageKeywords = pageData.frontmatter.keywords || DEFAULT_KEYWORDS;

    // 确定当前语言和路径
    let langCode = 'zh-CN';
    let langPath = pagePath;
    if (pagePath.startsWith('en/')) {
      langCode = 'en';
      langPath = pagePath.replace('en/', '');
    }

    // 生成 hreflang 标签
    const hreflangLinks: HeadConfig[] = [
      [
        'link',
        {
          rel: 'alternate',
          hreflang: 'zh-CN',
          href: `${SITE_URL}/${langPath}`,
        },
      ],
      [
        'link',
        {
          rel: 'alternate',
          hreflang: 'en',
          href: `${SITE_URL}/en/${langPath}`,
        },
      ],
      [
        'link',
        {
          rel: 'alternate',
          hreflang: 'x-default',
          href: `${SITE_URL}/${langPath}`,
        },
      ],
    ];

    const head: HeadConfig[] = [
      // Open Graph 标签
      ['meta', { property: 'og:type', content: 'website' }],
      ['meta', { property: 'og:site_name', content: SITE_NAME }],
      ['meta', { property: 'og:locale', content: langCode }],
      ['meta', { property: 'og:title', content: pageData.title || SITE_NAME }],
      [
        'meta',
        {
          property: 'og:description',
          content: pageData.description || DEFAULT_DESCRIPTION,
        },
      ],
      ['meta', { property: 'og:url', content: canonicalUrl }],
      ['meta', { property: 'og:image', content: `${SITE_URL}${ogImage}` }],
      // Twitter Card 标签
      ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
      ['meta', { name: 'twitter:title', content: pageData.title || SITE_NAME }],
      [
        'meta',
        {
          name: 'twitter:description',
          content: pageData.description || DEFAULT_DESCRIPTION,
        },
      ],
      ['meta', { name: 'twitter:image', content: `${SITE_URL}${ogImage}` }],
      // SEO 标签
      ['meta', { name: 'keywords', content: pageKeywords }],
      ['link', { rel: 'canonical', href: canonicalUrl }],
      ...hreflangLinks,
    ];

    pageData.frontmatter.head ??= [];
    pageData.frontmatter.head.push(...head);
  },

  locales: {
    root: {
      label: '简体中文',
      lang: 'zh-CN',
      title: '千星 启动器',
      description: '千星 服务器的专用启动器',
      themeConfig: {
        nav: navTranslations['zh-CN'],
        ...themeConfigTranslations['zh-CN'],
      },
    },
    en: {
      label: 'English',
      lang: 'en',
      title: 'Thousand Stars launcher',
      description: 'Dedicated launcher for Thousand Stars server',
      themeConfig: {
        nav: navTranslations.en,
        ...themeConfigTranslations.en,
      },
    },
  },

  themeConfig: {
    logo: '/img/logo.ico',
    socialLinks: [{ icon: 'github', link: 'https://github.com/PCL-Community' }],
  },
});
