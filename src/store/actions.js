/*
包含多个对应事件回调函数的对象
 */
import {
	RECEIVE_ADDRESS,
	RECEIVE_CATEGORY,
	RECEIVE_SHOPS,
	RECEIVE_USER_INFO,
	RESET_USER_INFO
} from './mutation-types'
import {
	reqAddress,
	reqFoodCategory,
	reqShops,
	reqUser,
	reqLogout
} from '../api'

export default {
	async getAddress ({commit, state}) {
		// 异步获取地址详情
		const geohash = state.latitude+','+state.longitude
		const result = await reqAddress(geohash)
		// 提交一个mutation
		if (result.code===0) {
			const address = result.data
			commit(RECEIVE_ADDRESS, {address})
		}
	},
	async getCategory ({commit}) {
		// 异步获取食品分类列表
		const result = await reqFoodCategory()
		if (result.code === 0) {
			const category = result.data
			commit(RECEIVE_CATEGORY, {category})
		}
	},
	async getShops ({commit, state}) {
		// 异步获取商铺列表
		const {latitude, longitude}=state
		const result = await reqShops(latitude, longitude)
		if (result.code === 0) {
			const shops = result.data
			commit(RECEIVE_SHOPS, {shops})
		}
	},
	// 同步记录用户信息
	recordUser ({commit}, userInfo) {
		commit(RECEIVE_USER_INFO, {userInfo})
	},
	// 异步读取用户信息
	async getUser ({commit}) {
		const result = await reqUser()
		if (result.code === 0) {
			const userInfo = result.data
			commit(RECEIVE_USER_INFO, {userInfo})
		}
	},
	async logout ({commit}) {
		const result = await reqLogout()
		if (result.code === 0) {
			commit(RESET_USER_INFO, {})
		}
	}
}
