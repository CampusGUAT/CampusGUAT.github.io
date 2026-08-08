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
        { text: '入学篇', items: [
          { text: '新生报到清单', link: '/入学篇/' },
          { text: '校园第一周', link: '/入学篇/校园第一周' },
        ] },
      ],
      '/学习篇/': [
        { text: '学习篇', items: [
          { text: '课程与选课', link: '/学习篇/' },
          { text: '考试复习方法', link: '/学习篇/考试复习方法' },
        ] },
      ],
      '/生活篇/': [
        { text: '生活篇', items: [
          { text: '校园生活', link: '/生活篇/' },
          { text: '办事与求助', link: '/生活篇/办事与求助' },
        ] },
      ],
      '/升学与就业/': [
        { text: '升学与就业', items: [
          { text: '发展路线', link: '/升学与就业/' },
          { text: '保研、考研与实习', link: '/升学与就业/保研考研实习' },
        ] },
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
