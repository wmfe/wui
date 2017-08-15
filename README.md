# wm-ui

这是一个文档介绍平台

### ui组件和标签添加： src/package

### ui组件和标签展示： src/example

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build  组件展示界面

npm run pkg 生成单独的组件包，直接import里面的js可以使用

# build for production and view the bundle analyzer report
npm run build --report
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).


### 目录
     root
        └─src (开发环境的页面展示)
            ├─assets （资源文件）
            ├─router （路由配置）
            └─nav.config.json (展示页面导航注册)
        └─build  （配置文件）
        └─config （配置文件）
        └─dist   （展示页面输出静态资源 npm run build）
        └─pkg    （各种组件独立包，直接import里面的js可以使用, 其中index.js是整个包集合 npm run pkg）
        └─lib  (集合包 npm run kit)
        └─components.json  （各种组件独立包注册）
        └─example （分页面组件示例）
        └─package （全局通用组件, 建议用js命名，体积较小，使用vue命名会额外增加包的体积）

### 开发

    npm i
    npm run dev 可以打开文档页面，查看组件用法
    新建组件：
    1.源文件在package目录下，index.js用于进行调用Vue.install钩子，源代码请在src中编辑
    2.示例请在example目录进行开发，需要配置src/nav.config.json,才能看到目录树
    3.新增的组件请配置在components.json和package/main.js中，这样打包才会输出

 


