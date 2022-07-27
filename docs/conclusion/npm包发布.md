# npm 包发布

1. 打包组件库

- 在 `package.json` 中增加打包组件库指令

  - target: 构建目标，默认为应用模式。这里修改为 lib 启用库模式。
  - dest: 输出目录，默认 dist。
  - [entry]: 最后一个参数为入口文件，默认为 src/App.vue。这里我们指定编译 packages/ 组件库目录。
    ```
    "script":{
      // 利用vue自带的工具 构建 目标(库)  库的名字xqh-vue-ui 当前的入口文件
      "lib": "vue-cli-service build --target lib --name xqh-vue-ui  packages/index.js"
    }
    ```

2. 配置 `.npmignore` 文件

   ```
   src/
   packages/
   public/
   tests/

   babel.config.js
   karma.conf.js
   server.js
   vue.config.js
   jsconfig.json
   ```

3. 配置 `package.json` 文件

   - name：发布到 npm 上的包名，也是安装时的包名。需要保证它的唯一性，可以到 npm 上先搜索一下，是否已经存在。

   - version：版本号，遵守语义化版本规则。每次新发布都要进行更改。可以使用 `npm version [major.minor.patch]` 命令来执行更新。

   - private：声明包的私有性，如果要发布到 npm 公⽹上，需删除该属性或者设置为 false。

   - main：包的入口。

   ```
   {
     "name": "xqh-vue-ui",
     "version": "1.0.3",
     "private": false,
     "main": "dist/xqh-vue-ui.umd.min.js",
     ...
   }
   ```

4. 发布

   ```
   // 先在npm官⽹(https://www.npmjs.com/)注册⼀个账号
   // 登录
   npm login
   // 发布，每次 publish 都需要修改版本号，删除某个包后24小时内不能发布相同名字的包。
   npm publish
   ```

5. 测试 npm 上传结果

   - 进入 npm 官网直接搜索 name 属性指定的包名就可以找到了～

   - 将组件库下载到本地项目中：`npm install xqh-vue-ui`
