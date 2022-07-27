module.exports = {
  title: 'xqh-vue-ui',
  description: 'xqh-vue-ui 是一款轻量、好用的 Vue 组件库',
  base: '/xqh-vue-ui-doc/',
  // dest: './docs/.vuepress/build', // 设置输出目录
  port: 1234,
  head: [['link', { rel: 'icon', href: 'logo.png' }]],
  themeConfig: {
    logo: 'https://raw.githubusercontent.com/lanyuxqh/xqh-vue-ui-doc/gh-pages/logo.png',
    search: false,
    displayAllHeaders: true,
    sidebar: 'auto',
    nav: [
      {
        text: '组件',
        link: '/components/installation'
      },
      {
        text: '总结',
        link: '/conclusion/组件设计与开发'
      },
      // {
      //   text: '其他插件',
      //   link: '/plugins/todo'
      // },
      // {
      //   text: '友链',
      //   items: [
      //     {
      //       text: '我的博客',
      //       link: '',
      //       target: '_blank'
      //     },
      //     {
      //       text: '我的掘金',
      //       link: '',
      //       target: '_blank'
      //     }
      //   ]
      // },
      // {
      //   text: 'Github',
      //   link: 'https://github.com/lanyuxqh/xqh-vue-ui',
      //   target: '_blank'
      // }
    ],
    sidebar: {
      '/components': [
        {
          title: '快速上手',
          collapsable: false,
          children: ['/components/installation']
        },
        {
          title: '常规',
          collapsable: false,
          children: [
            '/components/grid',
            '/components/container',
            '/components/tab',
            '/components/icon',
            '/components/space',
            '/components/divider',
            '/components/spread'
          ]
        },
        {
          title: '通用',
          collapsable: false,
          children: [
            '/components/button',
            '/components/input',
            '/components/inputNumber',
            '/components/textarea',
            '/components/select',
            '/components/radio',
            '/components/checkbox',
            '/components/switch',
            '/components/rate',
            '/components/datePicker',
            '/components/upload'
          ]
        },
        {
          title: '数据',
          collapsable: false,
          children: [
            '/components/table',
            '/components/list',
            '/components/collapse',
            '/components/card',
            '/components/carousel',
            '/components/tag',
            '/components/badge',
            '/components/avatar',
            '/components/pagination',
            '/components/skeleton'
          ]
        },
        {
          title: '交互',
          collapsable: false,
          children: [
            '/components/progress',
            '/components/loading',
            '/components/alert',
            '/components/toast',
            '/components/popover',
            '/components/modal',
            '/components/drawer',
            '/components/infiniteScroll',
            '/components/lazy',
            '/components/goTopBottom'
          ]
        }
      ],
      '/conclusion': [
        {
          title: '总结',
          collapsable: false,
          children: [
            '/conclusion/组件设计与开发',
            '/conclusion/单元测试',
            '/conclusion/文档搭建',
            '/conclusion/npm包发布',
            '/conclusion/文档部署',
          ]
        }
      ]
    }
  }
}
