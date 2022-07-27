# 安装使用

### 安装

#### 推荐使用 npm 的方式安装，它能更好地和 webpack 打包工具配合使用。

```
npm install xqh-vue-ui
```

or

```
yarn add xqh-vue-ui
```

### 引入

#### 需要注意的是 css 样式文件需要您单独引入。

```
import Vue from 'vue';
import xqhVueUI from 'xqh-vue-ui';
import 'xqh-vue-ui/lib/index/style.css';

Vue.use(xqhVueUI);
```

### 按需引用

#### 可以根据个人需要按需引用组件来使用。搭配 `babel-plugin-import`使用更方便哦

1. 安装依赖

```
npm install babel-plugin-import -D
```

2. 配置 babel.config.js ，这样不用手动引入按需引用的组件的样式文件了。

```
module.exports = {
  presets: ['@vue/cli-plugin-babel/preset'],
  plugins: [
    [
      'import',
      {
        libraryName: 'xqh-vue-ui',
        style: name => {
          return `${name}/style.css`
        },
      }
    ]
  ]
}
```

3. 引入需要的组件即可。

```
import { xButton } from 'xqh-vue-ui'
Vue.use(xButton)
```

### 开始使用~~

```
<x-button type="default" status="success">success</x-button>
<x-button type="primary" shape="square" icon="search"></x-button>
```