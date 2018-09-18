# cli-3.0

> 基于vue-cli3.0，一个适合公司内部开发vue组件、插件使用的脚手架。

### 内置功能

- 热刷新
- Eslint代码规范检测
- 已配置好发布成npm包
- 内置组件、插件开发模板
- 自动生成组件、插件的README.md说明文档模板

### 开发流程

1. 在src/views/your-component.vue文件中开发你的组件；

2. 在src/App.vue中编写你的示例；

3. 编写组件的说明文档README.md文件（非常重要）；

### 目录结构
```
├── *index.js
├── src
│   ├── *api
│   ├── components
│   ├── App.vue
│   ├── main.js
│   ├── *mock
│   ├── *views
│   ├── *plugins
│   ├── router
│   ├── store
│   └── *utils
└── public
    ├── index.html
    ├── *public
    └── *theme
        └── default
            ├── assets
```

### 资源引用

vue-cli3.0中静态资源目录由原来的static调整为public，故资源引用方式也有所调整。引用静态资源按照以下方式来进行引用，以便在集成脚手架中能够自动整合，避免路径问题。

如，要引用以下目录结构下的a.png

```
├── *index.js
├── src
└── public
    ├── index.html
    ├── *public
    └── *theme
        └── default
            └── assets
            	└── my-component
                	├── a.png
```

单文件组件*.vue文件中，

- 在模板template中，使用public目录下的资源直接可以*直接访问*无需加以public开头，可以这样写：

```js
<template>
  <div class="test">
    <img src="theme/default/assets/my-component/a.png">
  </div>
</template>
```

- 在style中，资源引用要以~public，如：

```js
<template>
  ...
</template>

<script>
...
</script>

<style lang="scss">
.my-component {
  background-image: url('~public/theme/default/assets/my-component/a.png');
}
</style>
```

请谨记！`若基于当前文件使用相对路径的方式引用资源（ ./ 或者 ../ ），可忽略本节。`

### 接口代理

本地开发时，域名为localhost，为解决访问服务器接口时的跨域问题，可以通过设置代理来解决，只在开发阶段生效，在根目录下vue.config.js文件中设置，如：
```js
devServer: {
  proxy: {
      '/api/**': {
        target: 'http://47.95.14.230:9174'
      }
  }
}
```
