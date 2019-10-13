module.exports = {
  title:'Levin',
  description: '前端工程师个人博客，作者：刘维',
  locales: {
    '/': {
      lang: 'zh-CN', // 将会被设置为 <html> 的 lang 属性
    } 
  },
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }]
  ],
  base:'/vuepress-blog/', 
  themeConfig: {
    lastUpdated: '上次更新', 
    // navbar: false, //禁用导航栏
    repo: 'ldlw/vuepress-blog',  //跳转到vuepress的外链
    // repoLabel: '查看源码',
    editLinks: true,
    editLinkText: '编辑文档', 
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/' },
      {
        text:'language',
        items: [
          { text: 'Chinese', link: '/language/chinese/' },
          { text: 'Japanese', link: '/language/japanese/' },
          { text: '亚洲', items: [
            { text: 'Chinese', link: '/language/chinese/' },
            { text: 'Japanese', link: '/language/japanese/' },
          ] },
        ] 
      },
      { text: 'External', link: 'https://google.com' },
    ],
    // sidebar: 'auto'
    // sidebar: [
    //   '/',
    //   '/css/',
    //   '/about/test',
    //   ['javascript/', 'Explicit link text']
    // ],
    // sidebarDepth: 2, //深度为2
    // displayAllHeaders: true, // 默认值：false
    // activeHeaderLinks: false, // 默认值：true

    // sidebar: [
    //   {
    //     title: 'Group 1',   // 必要的
    //     path: '/css/',      // 可选的, 应该是一个绝对路径
    //     collapsable:true, // 折叠
    //     sidebarDepth: 1,    // 可选的, 默认值是 1
    //     children: [
    //       '/',
    //       '/css/',
    //       '/css/css1'
    //     ]
    //   },
    //   {
    //     title: 'Group 2',
    //     children: [ /* ... */ ]
    //   }
    // ]

    sidebar: {
      '/css/': [
        '',     /* /foo/ */
        'css1',  /* /foo/one.html */
        'css2'   /* /foo/two.html */
      ],

      '/javascript/': [
        '',      /* /bar/ */
        'javascript1', /* /bar/three.html */
        'javascript2'   /* /bar/four.html */
      ],

      // fallback
      '/': [
        '',        /* / */
        '/about/', /* /contact.html */
        '/about/test'    /* /about.html */
      ]
    }
  }
}
