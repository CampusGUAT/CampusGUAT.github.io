import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'zh-CN',
  title: 'CampusGUAT',
  description: '桂林航天学子的成长指南',
  appearance: true,
  themeConfig: {
    siteTitle: 'CampusGUAT',
    logo: '/logo.png',
    nav: [
      { text: '首页', link: '/' },
      { text: '入学篇', link: '/入学篇/' },
      { text: '学习篇', link: '/学习篇/' },
      { text: '生活篇', link: '/生活篇/' },
      { text: '升学与就业', link: '/升学与就业/' },
    ],
    sidebar: {
      '/入学篇/': [
        {
          text: '🎒 入学篇',
          collapsed: false,
          items: [
            { text: '新生指南', link: '/入学篇/' },
          ],
        },
      ],
      '/学习篇/': [
        {
          text: '📚 学习篇',
          collapsed: false,
          items: [
            { text: '学习指南', link: '/学习篇/' },
          ],
        },
      ],
      '/生活篇/': [
        {
          text: '🧭 生活篇',
          collapsed: false,
          items: [
            { text: '生活指南', link: '/生活篇/' },
          ],
        },
      ],
      '/升学与就业/': [
        {
          text: '🚀 升学与就业',
          collapsed: false,
          items: [
            { text: '发展指南', link: '/升学与就业/' },
          ],
        },
      ],
    },
    outline: 'deep',
    lastUpdated: true,
    search: { provider: 'local' },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/CampusGUAT' },
    ],
    footer: {
      message: '目前由遥测成员共同维护',
      copyright: 'CampusGUAT · 内容仅供参考，请以学校最新通知为准',
    },
  },
})
