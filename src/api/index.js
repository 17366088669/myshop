/*
	包含n个接口请求函数的模块
	函数的返回值：promise对象
*/
import ajax from './ajax'
const BASE_URL = '/api'
/* 根据经纬度获取位置详情 */
	// http://localhost:4000/position/40.10038,116.36867
export const reqAddress = (geohash) => ajax(`${BASE_URL}/position/${geohash}`)
/* 获取食品分类列表 */
export const reqFoodCategory = () => ajax(BASE_URL+'/index_category')
/* 根据经纬度获取商铺列表 */
export const reqShops = (longitude, latitude) => ajax(BASE_URL+'/shops', {longitude, latitude})

/* 账号密码登录 */
export const reqPwdLogin = (name, pwd, captcha) => ajax(BASE_URL+'/login_pwd', {
	name,
	pwd,
	captcha
}, 'POST')
/* 获取短信验证码 */
export const reqSendCode = phone => ajax(BASE_URL+'/sendcode', {phone})
/* 手机号验证码登录 */
export const reqSmsLogin = (phone, code) => ajax(BASE_URL+'/login_sms', {phone, code}, 'POST')
/* 获取用户信息(根据会话) */
export const reqUser = () => ajax(BASE_URL+'/userinfo')
/* 请求登出 */
export const reqLogout = () => ajax(BASE_URL+'/logout')
