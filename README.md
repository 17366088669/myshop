# 一、个人笔迹

## 1.创建vue项目（环境搭建）
    npm install -g vue-cli
    vue init webpack vue_demo
    cd vue_demo
    npm install
    npm run dev

## 2.配置
### 运行自动打开浏览器
    config->index.js：
        autoOpenBrowser:true
## 3.src创建文件夹
    api: 与后台交互模块    components: 非路由组件
    common: 通用资源      filters: 过滤器
    mock: 模拟数据        pages: 路由组件
    router: 路由器文件    store: vuex相关模块文件夹
    util: 工具模块
## 4.组件引用
### 1）创建组件xxx.vue
### 2）在根组件App.vue引用组件
    import xxx from 'xxx.vue'
### 3）映射组件标签
    export default{
        components: {
            xxx
        }
    }
### 4）使用组件标签
### 5）入口main.js创建Vue实例
    import Vue from 'vue'
    import App from './App.vue'
    new Vue({
        el: '#app',
        components: {
            App
        },
        template: '<App/>'	// 挂载到html中
    })
    或：
    new Vue({
        el: '#app',
        render: h => h(App)
    })
## 5.技术栈
    vue-router
    vuex
    mint-ui // 移动端组件
    vue-lazyload //图片懒加载
    better-scroll // 滑动库
    swiper //轮播
    moment/date-fns //日期处理 fns轻量级
### vue-router：在入口注册路由器
    import router from './router' 
    new Vue({
        router
    })
#### a.文件夹router -> index.js
#### b.文件夹router -> index.js
    import Vue from 'vue'
    import VueRouter from 'vue-router'
    import Xxx from './Xxx.vue'
    import Yyy from './Yyy.vue'
    import Zzz from './Zzz.vue'
    
    Vue.use(VueRouter)
    export default new VueRouter({
        routes: [
            { // 一般路由
                path: '/xxx',
                component: Xxx
                children: [ // 嵌套路由
                    {
                        path: 'yyy', //path: 'xxx/yyy'
                        component: Yyy
                        meta: { // $route.meta.fun1 控制路由的显示隐藏
                               // <Xxx v-show='$route.meta.fun1'/>
                            fun1: true
                        }
                    },
                    {
                        path: 'zzz',
                        component: Zzz
                    },
                    { // 自动跳转路由
                        path: '',
                        redirect: '/xxx'
                    }
                ]
            },
            { // 自动跳转路由
                path: '/',
                redirect: '/xxx'
            }
        ]
    })
#### c.使用路由组件标签
##### <router-link>: 用来生成路由链接
     <router-link to="/xxx">Go to XXX</router-link>
##### <router-view>: 用来显示当前路由组件界面
     <router-view></router-view>
#### d.路由路径携带参数(param/query)
##### 配置路由
    children: [
        {
            path: 'mdetail/:id',
            component: MessageDetail
        }
    ]
##### 路由路径
    <router-link :to="'/home/message/mdetail/'+m.id">{{m.title}}</router-link>
##### 路由组件中读取请求参数
    this.$route.params.id
#### f.缓存路由组件对
    <keep-alive>
        <router-view></router-view>
    </keep-alive>
