import Vue from 'vue'
import ElementUI from 'element-ui' // 全局引入element-ui
import 'element-ui/lib/theme-chalk/index.css'
import hljs from 'highlight.js' // 代码高亮
import 'highlight.js/styles/googlecode.css'
// import xqhVueUI from 'xqh-vue-ui1' // 要编写对应的文档的包
import 'xqh-vue-ui1/dist/xqh-vue-ui.css'

// 全局注册指令
Vue.directive('highlight', function (el) {
  let blocks = el.querySelectorAll('pre code')
  blocks.forEach(block => {
    hljs.highlightBlock(block)
  })
})
export default ({ Vue }) => {
  Vue.use(ElementUI)
  // Vue.use(xqhVueUI)
  Vue.mixin({
    mounted() {
      import('xqh-vue-ui1').then(function (m) {
        Vue.use(m.default)
      })
    }
  })

  // import('xqh-vue-ui1').then(function (m) {
  //   Vue.use(m.default)
  // })
}
