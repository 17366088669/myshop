<template>
	<div id="app">
		<keep-alive>
			<router-view/>
		</keep-alive>
		<Footer v-show="$route.meta.ShowFooter"/>
	</div>
</template>

<script>
	import Footer from './components/Footer/Footer'

	export default {
		components: {
			Footer
		},
		mounted () {
			this.$store.dispatch('getAddress')
			this.$store.dispatch('getCategory')
			this.$store.dispatch('getShops')
			this.$store.dispatch('getUser')
		}
	}
</script>

<style lang="stylus" rel="stylesheet/stylus">
	#app
		width 100%
		height 100%
		background #f5f5f5
		position relative
</style>
