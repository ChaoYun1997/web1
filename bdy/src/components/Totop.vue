<template>
	<div class="gototop" @click="toTop" :class="{'gototop-active': lika == 1}">
		<a-icon type="arrow-up" style="margin-right: 10px;" />Back To Top
	</div>
</template>

<script>
	export default{
		name:'Totop',
		data(){
			return{
				lika: 0,
			}
		},
		mounted() {
			let now = this;
			window.onscroll = function() {
				var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
				if (scrollTop > 600) {
					now.lika = 1
				}else{
					now.lika = 0
				}
			}
		},
		methods:{
			toTop() {
				var timer = setInterval(function() {
					let osTop = document.documentElement.scrollTop || document.body.scrollTop;
					let ispeed = Math.floor(-osTop / 5);
					document.documentElement.scrollTop = document.body.scrollTop = osTop + ispeed;
					this.isTop = true;
					if (osTop === 0) {
						clearInterval(timer);
					}
				}, 20)
			},
		}
	}
</script>

<style>
	@import url("../assets/css/style.css");
</style>
