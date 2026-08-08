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
      { text: '前言', link: '/前言/', collapsed: true, items: [
        { text: '写在前面的话', link: '/前言/写在前面的话' },
        { text: '贡献指南', link: '/前言/贡献指南' },
      ] },
      { text: '启发', link: '/启发/', collapsed: true, items: [
        { text: '关于桂航', link: '/启发/关于桂航' },
        { text: '怎么做', link: '/启发/怎么做' },
        { text: '失败不可怕', link: '/启发/失败不可怕' },
      ] },
      { text: '入学', link: '/入学/', collapsed: true, items: [
        { text: '开学携带', link: '/入学/开学携带' },
        { text: '新生群', link: '/入学/新生群' },
        { text: '入学流程', link: '/入学/入学流程' },
        { text: '快问快答', link: '/入学/快问快答' },
      ] },
      { text: '学业', link: '/学业/', collapsed: true, items: [
        { text: '课程', link: '/学业/课程' },
        { text: '规划', link: '/学业/规划' },
        { text: '自学', link: '/学业/自学' },
        { text: '记笔记', link: '/学业/记笔记' },
        { text: '竞赛', link: '/学业/竞赛' },
      ] },
      { text: '路线', link: '/路线/', collapsed: true, items: [
        { text: '人工智能', link: '/路线/人工智能' },
        { text: '航空宇航', link: '/路线/航空宇航' },
      ] },
      { text: '未来', link: '/未来/', collapsed: true, items: [
        {
          text: '考研',
          link: '/未来/考研/',
          collapsed: true,
          items: [
            { text: '备考指南', link: '/未来/考研/备考指南' },
            { text: '择校经验', link: '/未来/考研/择校经验' },
          ],
        },
        {
          text: '就业',
          link: '/未来/就业/',
          collapsed: true,
          items: [
            { text: '如何找实习', link: '/未来/就业/如何找实习' },
            { text: '投简历', link: '/未来/就业/投简历' },
          ],
        },
      ] },
      { text: '生活', link: '/生活/', collapsed: true, items: [
        { text: '食在桂航', link: '/生活/食在桂航' },
      ] },
      { text: '个人分享', link: '/个人分享/', collapsed: true, items: [] },
      { text: '社团', link: '/社团/', collapsed: true, items: [
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
