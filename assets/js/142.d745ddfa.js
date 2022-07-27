(window.webpackJsonp=window.webpackJsonp||[]).push([[142],{682:function(n,a,e){"use strict";e.r(a);var s=e(19),t=Object(s.a)({},(function(){var n=this,a=n._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[a("h1",{attrs:{id:"npm-包发布"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#npm-包发布"}},[n._v("#")]),n._v(" npm 包发布")]),n._v(" "),a("ol",[a("li",[n._v("打包组件库")])]),n._v(" "),a("ul",[a("li",[a("p",[n._v("在 "),a("code",[n._v("package.json")]),n._v(" 中增加打包组件库指令")]),n._v(" "),a("ul",[a("li",[n._v("target: 构建目标，默认为应用模式。这里修改为 lib 启用库模式。")]),n._v(" "),a("li",[n._v("dest: 输出目录，默认 dist。")]),n._v(" "),a("li",[n._v("[entry]: 最后一个参数为入口文件，默认为 src/App.vue。这里我们指定编译 packages/ 组件库目录。"),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v('"script":{\n  // 利用vue自带的工具 构建 目标(库)  库的名字xqh-vue-ui 当前的入口文件\n  "lib": "vue-cli-service build --target lib --name xqh-vue-ui  packages/index.js"\n}\n')])])])])])])]),n._v(" "),a("ol",{attrs:{start:"2"}},[a("li",[a("p",[n._v("配置 "),a("code",[n._v(".npmignore")]),n._v(" 文件")]),n._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("src/\npackages/\npublic/\ntests/\n\nbabel.config.js\nkarma.conf.js\nserver.js\nvue.config.js\njsconfig.json\n")])])])]),n._v(" "),a("li",[a("p",[n._v("配置 "),a("code",[n._v("package.json")]),n._v(" 文件")]),n._v(" "),a("ul",[a("li",[a("p",[n._v("name：发布到 npm 上的包名，也是安装时的包名。需要保证它的唯一性，可以到 npm 上先搜索一下，是否已经存在。")])]),n._v(" "),a("li",[a("p",[n._v("version：版本号，遵守语义化版本规则。每次新发布都要进行更改。可以使用 "),a("code",[n._v("npm version [major.minor.patch]")]),n._v(" 命令来执行更新。")])]),n._v(" "),a("li",[a("p",[n._v("private：声明包的私有性，如果要发布到 npm 公⽹上，需删除该属性或者设置为 false。")])]),n._v(" "),a("li",[a("p",[n._v("main：包的入口。")])])]),n._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v('{\n  "name": "xqh-vue-ui",\n  "version": "1.0.3",\n  "private": false,\n  "main": "dist/xqh-vue-ui.umd.min.js",\n  ...\n}\n')])])])]),n._v(" "),a("li",[a("p",[n._v("发布")]),n._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("// 先在npm官⽹(https://www.npmjs.com/)注册⼀个账号\n// 登录\nnpm login\n// 发布，每次 publish 都需要修改版本号，删除某个包后24小时内不能发布相同名字的包。\nnpm publish\n")])])])]),n._v(" "),a("li",[a("p",[n._v("测试 npm 上传结果")]),n._v(" "),a("ul",[a("li",[a("p",[n._v("进入 npm 官网直接搜索 name 属性指定的包名就可以找到了～")])]),n._v(" "),a("li",[a("p",[n._v("将组件库下载到本地项目中："),a("code",[n._v("npm install xqh-vue-ui")])])])])])])])}),[],!1,null,null,null);a.default=t.exports}}]);