import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'zh-CN',
  title: 'CampusGUAT',
  description: '桂林航天学子的成长指南',
  appearance: true,
  head: [
    ['link', { rel: 'icon', type: 'image/png', href: '/logo.png' }],
  ],
  themeConfig: {
    siteTitle: 'CampusGUAT',
    logo: '/logo.png',
    nav: [
      { text: '首页', link: '/' },
    ],
    sidebar: [
      { text: '前言', collapsed: false, items: [
        { text: '写在前面的话', link: '/前言/写在前面的话' },
        { text: '征集', link: '/前言/征集' },
      ] },
      { text: '启发', collapsed: true, items: [
        { text: '关于桂航', link: '/启发/关于桂航' },
        { text: '怎么做', link: '/启发/怎么做' },
        { text: '失败不可怕', link: '/启发/失败不可怕' },
        { text: '提问的智慧', link: '/启发/提问的智慧' },
      ] },
      { text: '入学', collapsed: true, items: [
        { text: '开学携带', link: '/入学/开学携带' },
        { text: '新生群', link: '/入学/新生群' },
        { text: '报到', link: '/入学/报到' },
        { text: '快问快答', link: '/入学/快问快答' },
      ] },
      { text: '学业', collapsed: true, items: [
        { text: '课程', link: '/学业/课程' },
        { text: '规划', link: '/学业/规划' },
        { text: '自学', link: '/学业/自学' },
        { text: '记笔记', link: '/学业/记笔记' },
        { text: '竞赛', link: '/学业/竞赛' },
      ] },
      { text: '路线', collapsed: true, items: [
        { text: '人工智能', link: '/路线/人工智能' },
        { text: '航空宇航', link: '/路线/航空宇航' },
      ] },
      { text: '生活', collapsed: true, items: [
        { text: '食在桂航', link: '/生活/食在桂航' },
      ] },
      { text: '社团', collapsed: true, items: [
        { text: '社团', link: '/社团/' },
      ] },
      { text: '考研', collapsed: true, items: [
        { text: '考研', link: '/考研/考研' },
        { text: '择业', link: '/考研/择业' },
      ] },
    ],
    editLink: {
      pattern: 'https://github.com/CampusGUAT/CampusGUAT.github.io/edit/main/docs/:path',
      text: '在 GitHub 编辑本页',
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
