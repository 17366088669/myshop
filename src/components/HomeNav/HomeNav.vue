<template>
	<nav class="home_nav">
		<div class="swiper-container" v-if="categoryArr.length">
			<div class="swiper-wrapper">
				<div class="swiper-slide" v-for="(categorys,index) in categoryArr" :key="index">
					<a href="javascript:" class="link_to_food" v-for="(category,index) in categorys" :key="index">
						<div class="food_container">
							<img :src="baseImgUrl+category.image_url">
						</div>
						<span>{{category.title}}</span>
					</a>
				</div>
			</div>
			<!-- Add Pagination -->
			<div class="swiper-pagination"></div>
		</div>
		<img src="./images/nav_back.svg" alt="nav_back" v-else>
	</nav>
</template>

<script>
	import Swiper from 'swiper'
	import 'swiper/dist/css/swiper.min.css'
	import {mapState} from 'vuex'

	export default {
		data () {
			return {
				baseImgUrl: 'https://fuss10.elemecdn.com'
			}
		},
		computed: {
			...mapState(['category']),

			categoryArr () {
				const {category} = this
				const Arr = []
				let minArr = []
				category.forEach(c => {
					if (minArr.length < 8) {
						minArr.push(c)
					}
					if (minArr.length === 8) {
						Arr.push(minArr)
						minArr = []
					}
				})
				if (minArr.length) {
					Arr.push(minArr)
				}
				return Arr
			}
		},
		watch: {
			category () {
				this.$nextTick(() => {
					new Swiper('.swiper-container', {
						pagination: {
							el: '.swiper-pagination'
						},
						loop: true // 循环模式选项
					})
				})
			}
		}
	}
</script>

<style lang="stylus" rel="stylesheet/stylus">
	@import "../../common/stylus/mixins.styl"
	.home_nav
		bottom-border-1px(#e4e4e4)
		margin-top 45px
		height 200px
		background #fff
		.swiper-container
			width 100%
			height 100%
			.swiper-wrapper
				width 100%
				height 100%
				.swiper-slide
					display flex
					justify-content center
					align-items flex-start
					flex-wrap wrap
					.link_to_food
						width 25%
						.food_container
							display block
							width 100%
							text-align center
							padding-bottom 10px
							font-size 0
							img
								display inline-block
								width 50px
								height 50px
						span
							display block
							width 100%
							text-align center
							font-size 13px
							color #666
			.swiper-pagination
				>span.swiper-pagination-bullet-active
					background #02a774
</style>
