import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'zh-CN',
  title: 'CampusGUAT',
  description: '桂林航天学子的成长指南',
  appearance: true,
  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/campusguat-visual.svg' }],
  ],
  themeConfig: {
    siteTitle: 'CampusGUAT',
    logo: '/logo.png',
    nav: [
      { text: '首页', link: '/' },
      { text: '前言', link: '/前言/写在前面的话' },
      { text: '启发', link: '/启发/关于桂航' },
      { text: '入学', link: '/入学/开学携带' },
      { text: '学业', link: '/学业/课程' },
      { text: '路线', link: '/路线/人工智能' },
      { text: '生活', link: '/生活/食在桂航' },
      { text: '社团', link: '/社团/社团' },
      { text: '考研', link: '/考研/考研' },
    ],
    sidebar: {
      '/前言/': [{ text: '前言', items: [
        { text: '写在前面的话', link: '/前言/写在前面的话' },
        { text: '征集', link: '/前言/征集' },
      ] }],
      '/启发/': [{ text: '启发', items: [
        { text: '关于桂航', link: '/启发/关于桂航' },
        { text: '怎么做', link: '/启发/怎么做' },
        { text: '失败不可怕', link: '/启发/失败不可怕' },
        { text: '提问的智慧', link: '/启发/提问的智慧' },
      ] }],
      '/入学/': [{ text: '入学', items: [
        { text: '开学携带', link: '/入学/开学携带' },
        { text: '新生群', link: '/入学/新生群' },
        { text: '报到', link: '/入学/报到' },
        { text: '快问快答', link: '/入学/快问快答' },
      ] }],
      '/学业/': [{ text: '学业', items: [
        { text: '课程', link: '/学业/课程' },
        { text: '规划', link: '/学业/规划' },
        { text: '自学', link: '/学业/自学' },
        { text: '记笔记', link: '/学业/记笔记' },
        { text: '竞赛', link: '/学业/竞赛' },
      ] }],
      '/路线/': [{ text: '路线', items: [
        { text: '人工智能', link: '/路线/人工智能' },
        { text: '航空宇航', link: '/路线/航空宇航' },
      ] }],
      '/生活/': [{ text: '生活', items: [
        { text: '食在桂航', link: '/生活/食在桂航' },
      ] }],
      '/社团/': [{ text: '社团', items: [
        { text: '社团', link: '/社团/社团' },
      ] }],
      '/考研/': [{ text: '考研', items: [
        { text: '考研', link: '/考研/考研' },
        { text: '择业', link: '/考研/择业' },
      ] }],
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
