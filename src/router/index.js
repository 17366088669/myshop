/*
路由器对象模块
* */
import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../pages/Home/Home'
import Search from '../pages/Search/Search'
import Order from '../pages/Order/Order'
import Profile from '../pages/Profile/Profile'
import Login from '../pages/Login/Login'
import Shop from '../pages/Shop/Shop'
import ShopGoods from '../pages/Shop/ShopGoods/ShopGoods'
import ShopInfo from '../pages/Shop/ShopInfo/ShopInfo'
import ShopRatings from '../pages/Shop/ShopRatings/ShopRatings'

Vue.use(VueRouter)
export default new VueRouter({
	routes: [
		{
			path: '/',
			redirect: '/home'
		},
		{
			path: '/home',
			component: Home,
			meta: {
				ShowFooter: true
			}
		},
		{
			path: '/search',
			component: Search,
			meta: {
				ShowFooter: true
			}
		},
		{
			path: '/order',
			component: Order,
			meta: {
				ShowFooter: true
			}
		},
		{
			path: '/profile',
			component: Profile,
			meta: {
				ShowFooter: true
			}
		},
		{
			path: '/login',
			component: Login
		},
		{
			path: '/shop',
			component: Shop,
			children: [
				{
					path: '',
					redirect: 'goods'
				},
				{
					path: 'goods',
					component: ShopGoods
				},
				{
					path: 'info',
					component: ShopInfo
				},
				{
					path: 'ratings',
					component: ShopRatings
				}
			]
		}
	]
})
