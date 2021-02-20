<template>
	<div class="header">
		<div>
			<img src="../../public/img/logo.png" alt="">
		</div>
		<div class="header-nav" :class="{'header-active':idexs == 1}">
			<ul style="position: relative;">
				<router-link to="/"><li>Home</li></router-link>
				<li class="sde"><router-link to="/Product" style="padding: 37.5px 0;">Product</router-link>
					<div class="tankuang">
						<div class="tankuang-l">
							<div v-for="(item,index) of categoryList" :key="item.num" :class="{'active':index==oiou}" @click="nied(index)">{{item.catName}}</div>
							<!-- <div>Prop Tv</div>
							<div>Prop Tv</div>
							<div>Prop Tv</div>
							<div>Prop Tv</div>
							<div>Prop Tv</div>
							<div>Prop Tv</div> -->
						</div>
						<div class="tankuang-r">
							<div v-for="item of newshoplist.slice(0,6)" :key="item.num">
								<router-link :to="{path:'Details',query:{queryId:item.id}}">
									<img :src="'http://cdn.fish-cloud.com/'+item.img" width="100px" alt="">
									<p>{{item.name}}</p>
								</router-link>
							</div>
							<!-- <div>
								<a href="">
									<img src="/img/product1.png" width="100px" alt="">
									<p>Prop 50 LED TV YT8250</p>
								</a>
							</div>
							<div>
								<a href="">
									<img src="/img/product1.png" width="100px" alt="">
									<p>Prop 50 LED TV YT8250</p>
								</a>
							</div>
							<div>
								<a href="">
									<img src="/img/product1.png" width="100px" alt="">
									<p>Prop 50 LED TV YT8250</p>
								</a>
							</div>
							<div>
								<a href="">
									<img src="/img/product1.png" width="100px" alt="">
									<p>Prop 50 LED TV YT8250</p>
								</a>
							</div>
							<div>
								<a href="">
									<img src="/img/product1.png" width="100px" alt="">
									<p>Prop 50 LED TV YT8250</p>
								</a>
							</div> -->
						</div>
					</div>
				</li>
				<router-link to="/CustomProp"><li>Custom Prop</li></router-link>
				<router-link to="/Company"><li>Company</li></router-link>
				<router-link to="/Industry"><li>Industry</li></router-link>
				<router-link to="/Contact"><li>Contact</li></router-link>
				<li class="search"><input type="text"><img src="/img/ss.png" width="16px" alt=""></li>
				
			</ul>
			
		</div>
		<div class="app-btn" @click="fun()"><img src="../../public/img/niuniuniu.png" alt=""></div>
	</div>
</template>

<script>
	export default {
		name: 'Header',
		data() {
			return {
				idexs: 0,
				categoryList: [],
				pri:'',
				newshoplist:[],
				oiou:0,
			}
		},
		created() {
			this.getdata()
		},
		methods:{
			getdata(){
				this.$axios.get('/api/catShop').then(res => {
					this.categoryList = res.data;
					this.pri = res.data[0].id
					console.log("11",this.pri)
					// console.log('pric',this.pri)
					for (var i = 0; i < this.categoryList.length; i++) {
						if (this.categoryList[i].id == this.pri && this.categoryList[i].catList.length == 0) {
							this.newshoplist=[]
							this.newshoplist = this.newshoplist.concat(this.categoryList[i].shopList)
							console.log('a', this.newshoplist)
						}
						if (this.categoryList[i].id == this.pri && this.categoryList[i].catList.length > 0) {
							this.newshoplist=[]
							for (var j = 0; j < this.categoryList[i].catList.length; j++){
								if(this.categoryList[i].catList[j].shopList.length > 0 ){
								this.newshoplist = this.newshoplist.concat(this.categoryList[i].shopList,this.categoryList[i].catList[j].shopList)
								// console.log('b', this.newshoplist)
								}
							}
						}
					}
					this.$forceUpdate()
				})
			},
			fun(){
				if(this.idexs==0){
					this.idexs = 1
				}else{
					this.idexs = 0
				}
			},
			nied(index){
				this.oiou=index
				this.pri = this.categoryList[this.oiou].id
				for (var i = 0; i < this.categoryList.length; i++) {
					if (this.categoryList[i].id == this.pri && this.categoryList[i].catList.length == 0) {
						this.newshoplist=[]
						this.newshoplist = this.newshoplist.concat(this.categoryList[i].shopList)
						console.log('a', this.newshoplist)
					}
					if (this.categoryList[i].id == this.pri && this.categoryList[i].catList.length > 0) {
						this.newshoplist=[]
						for (var j = 0; j < this.categoryList[i].catList.length; j++){
							if(this.categoryList[i].catList[j].shopList.length > 0 ){
							this.newshoplist = this.newshoplist.concat(this.categoryList[i].shopList,this.categoryList[i].catList[j].shopList)
							// console.log('b', this.newshoplist)
							}
						}
					}
				}
				this.$forceUpdate()
			}
		}
	}
</script>

<style>
	@import url("../assets/css/style.css");
</style>
