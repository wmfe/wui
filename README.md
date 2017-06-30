# wm-ui

这是一个文档介绍平台

### ui组件和标签添加： src/wm-kit/packages

### ui组件和标签展示： src/wm-pages

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
        └─src
            ├─assets （资源文件）
            ├─router （路由配置）
            ├─wm-kit （全局通用组件, 建议用js命名，体积较小，使用vue命名会额外增加包的体积）
            ├─wm-pages （分页面组件）
            └─nav.config.json (展示页面导航注册)
        └─build  （配置文件）
        └─config （配置文件）
        └─dist   （展示页面输出静态资源 npm run build）
        └─pkg    （各种组件独立包，直接import里面的js可以使用, 其中index.js是整个包集合 npm run pkg）
        └─kit  (集合包 npm run kit)
        └─components.json  （各种组件独立包注册）

 


