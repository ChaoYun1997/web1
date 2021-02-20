<template>
	<div style="position: relative;">
		<Header/>
		<router-view></router-view>
		<Bottom/>
		<Totop/>
	</div>
</template>

<script>
	import Header from "../../components/Header.vue"
	import Bottom from "../../components/Bottom.vue"
	import Totop from "../../components/Totop.vue"
	export default {
		name: "App",
		components: {
			Header,
			Bottom,
			Totop
		}
	}
</script>

<style>
</style>
