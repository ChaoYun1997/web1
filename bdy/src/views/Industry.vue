<template>
	<div>
		<div class="pro-banner">
			<div class="topsa">
				<div class="topsa-l">
					<p>How did the <br> prop industry evolve</p>
				</div>
				<div class="topsa-r">
					<span style="font-family: UbuntuL;">
						<router-link to="/">HOME</router-link>
					</span>
					<span>></span>
					<span style="font-family: UbuntuB;">INDUSTRY</span>
				</div>
			</div>
		</div>
		<div class="newlist">
			<div class="news" v-for="item of newslist" :key="item.num">
				<img :src="'http://cdn.fish-cloud.com/'+item.articleImg" width="100%" height="581" alt="">
				<p>{{item.name}}</p>
				<p>{{item.articleAbstract}}</p>
				<router-link :to="{path:'NewsDetails',query:{queryId:item.id}}"> → <span>Learn MOre</span></router-link>
				<p></p>
			</div>
			<!-- <div class="news">
				<img src="/img/new.png" width="100%" alt="">
				<p>The Real Industry behind Fake Electronics</p>
				<p>In real life, the fakery sometimes takes a tangible form. Say, if you're in a furniture store and trying to buy
					a desk, you might want an idea of what a computer might look like on that desk. But 'fakery' might ...</p>
				<router-link to="/NewsDetails"> → <span>Learn MOre</span></router-link>
				<p></p>
			</div> -->
			<!-- <div class="news">
				<img src="/img/new.png" width="100%" alt="">
				<p>The Real Industry behind Fake Electronics</p>
				<p>In real life, the fakery sometimes takes a tangible form. Say, if you're in a furniture store and trying to buy
					a desk, you might want an idea of what a computer might look like on that desk. But 'fakery' might ...</p>
				<router-link to="/NewsDetails"> → <span>Learn MOre</span></router-link>
				<p></p>
			</div>
			<div class="news">
				<img src="/img/new.png" width="100%" alt="">
				<p>The Real Industry behind Fake Electronics</p>
				<p>In real life, the fakery sometimes takes a tangible form. Say, if you're in a furniture store and trying to buy
					a desk, you might want an idea of what a computer might look like on that desk. But 'fakery' might ...</p>
				<router-link to="/NewsDetails"> → <span>Learn MOre</span></router-link>
				<p></p>
			</div> -->
		</div>

		<div class="ts-foot"></div>
		<Right></Right>
	</div>
</template>

<script>
	import Right from "../components/Right.vue"
	export default {
		name: 'Industry',
		components: {
			Right
		},
		data() {
			return {
				smm:{
					pageIndex:'1',
					pageSize:'100000',
					keyword:''
				},
				newslist:[]
			}
		},
		created() {
			this.getdata()
		},
		methods: {
			getdata() {
				this.$axios.get('/api/news',{params:this.smm}).then(res => {
					this.newslist = res.data.datas;
					console.log("123", this.newslist)
				})
			}
		}
	}
</script>

<style>
	@import url("../assets/css/style.css");
</style>
