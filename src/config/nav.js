navData = {
    '/' : [ // 首页导航
      //{
      //  link : '/docs/projects',
      //  name : 'PROJECTS',
      //  cnName : '项目总结'
      //},
      //{
      //  link : '/docs/articles',
      //  name : 'ARTICLES',
      //  cnName : '团队博客'
      //}, 
      {
        link : '/cxd/about',
        name : 'ABOUT',
        cnName : '关于我们'            
      }  
    ],
    '/guide' : [ // 设计规范导航
      {
        link : 'http://v3.yunshe.design/portal/',
        name : 'PORTAL',
        type : 'out',
        cnName : '官  网'
      },
      {
        link : 'http://v3.yunshe.design/console/',
        name : 'CONSOLE',
        type : 'out',
        cnName : '控制台'
      },
      {
        link : 'http://tob.yunshe.design',
        name : 'BUSINESS SYSTEM',
        type : 'out',
        cnName : '企业级'
      },
    ]
  }

module.exports = navData;