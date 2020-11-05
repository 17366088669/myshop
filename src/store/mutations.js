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

export default {
	[RECEIVE_ADDRESS] (state, {address}) {
		state.address = address
	},
	[RECEIVE_CATEGORY] (state, {category}) {
		state.category = category
	},
	[RECEIVE_SHOPS] (state, {shops}) {
		state.shops = shops
	},
	[RECEIVE_USER_INFO] (state, {userInfo}) {
		state.userInfo = userInfo
	},
	[RESET_USER_INFO] (state) {
		state.userInfo = {}
	}
}
