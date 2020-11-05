<template>
	<section class="home">
		<!--首页头部-->
		<Top :title="address.name">
			<router-link to="/search" class="header_search" slot="left">
				<i class="iconfont icon-sousuo"></i>
			</router-link>
			<router-link :to="userInfo._id?'':'/login'" class="header_login" slot="right">
				<span class="header_login_text" v-if="!userInfo._id">登录|注册</span>
				<span class="header_login_text" v-else>
					<i class="iconfont icon-person"></i>
				</span>
			</router-link>
		</Top>
		<!--首页导航-->
		<HomeNav/>
		<!--首页附近商家-->
		<ShopList/>
	</section>
</template>

<script>
	import Top from '../../components/Top/Top'
	import ShopList from '../../components/ShopList/ShopList'
	import HomeNav from '../../components/HomeNav/HomeNav'
	import {mapState} from 'vuex'

	export default {
		components: {
			Top,
			ShopList,
			HomeNav
		},
		computed: {
			...mapState(['address', 'userInfo'])
		}
	}
</script>

<style lang="stylus" rel="stylesheet/stylus">
	.home  //首页
		width 100%
</style>
