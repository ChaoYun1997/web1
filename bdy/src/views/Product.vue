<template>
	<div>
		<div class="pro-banner">
			<div class="topsa">
				<div class="topsa-l">
					<p>You can always <br> find what you want</p>
				</div>
				<div class="topsa-r">
					<span style="font-family: UbuntuL;">
						<router-link to="/">HOME</router-link>
					</span>
					<span>></span>
					<span style="font-family: UbuntuB;">PRODUCT</span>
				</div>
			</div>
		</div>
		<div class="shopList">
			<p class="p3">our product</p>
			<div class="cates">
				<ul>
					<a href="javascript:void(0)" @click="yiji1()" :class="{'active': yijix == 0}">
						<li>{{categoryList[0].catName}}</li>
					</a>
					<li class="xian"></li>
					<a href="javascript:void(0)" @click="yiji2()" :class="{'active': yijix == 1}">
						<li>{{categoryList[1].catName}}</li>
					</a>
					<li class="xian"></li>
					<a href="javascript:void(0)" @click="yiji3()" :class="{'active': yijix == 2}">
						<li>{{categoryList[2].catName}}</li>
					</a>
					<li class="xian"></li>
					<a href="javascript:void(0)" @click="yiji4()" :class="{'active': yijix == 3}">
						<li>{{categoryList[3].catName}}</li>
					</a>
					<li class="xian"></li>
					<a href="javascript:void(0)" @click="yiji5()" :class="{'active': yijix == 4}">
						<li>{{categoryList[4].catName}}</li>
					</a>
					<li class="xian"></li>
					<a href="javascript:void(0)" @click="yiji6()" :class="{'active': yijix == 5}">
						<li>{{categoryList[5].catName}}</li>
					</a>
				</ul>
			</div>
			<div class="productlist">
				<div v-for="item of newshoplist" :key="item.num">
					<router-link :to="{path:'Details',query:{queryId:item.id}}">
						<p>{{item.name}} ></p>
						<img :src="'http://cdn.fish-cloud.com/'+item.img" width="100%" alt="">
					</router-link>
				</div>
				<!-- <div>
					<a href="">
						<p>Prop 42″LED TV YT3942 ></p>
						<img src="../../public/img/product1.png" width="100%" alt="">
					</a>
				</div>
				<div>
					<a href="">
						<p>Prop 42″LED TV YT3942 ></p>
						<img src="../../public/img/product1.png" width="100%" alt="">
					</a>
				</div>
				<div>
					<a href="">
						<p>Prop 42″LED TV YT3942 ></p>
						<img src="../../public/img/product1.png" width="100%" alt="">
					</a>
				</div>
				<div>
					<a href="">
						<p>Prop 42″LED TV YT3942 ></p>
						<img src="../../public/img/product1.png" width="100%" alt="">
					</a>
				</div> -->
			</div>
		</div>


		<div class="ts-foot"></div>
	</div>
</template>

<script>
	export default {
		name: 'Product',
		data() {
			return {
				yijix: 0,
				categoryList: [],
				pri:'',
				newshoplist:[],
				oioi:0,
			}
		},
		created() {
			if(this.$route.query.queryId){
				this.oioi = this.$route.query.queryId
				this.yijix = this.$route.query.queryId
			}
			this.getdata()
		},
		methods: {
			getdata() {
				this.$axios.get('/api/catShop').then(res => {
					this.categoryList = res.data;
					this.pri = res.data[this.oioi].id
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
			yiji1(){
				this.yijix = 0
				this.pri = this.categoryList[0].id
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
			},
			yiji2(){
				this.yijix = 1
				this.pri = this.categoryList[1].id
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
			},
			yiji3(){
				this.yijix = 2
				this.pri = this.categoryList[2].id
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
			},
			yiji4(){
				this.yijix = 3
				this.pri = this.categoryList[3].id
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
			},
			yiji5(){
				this.yijix = 4
				this.pri = this.categoryList[4].id
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
			},
			yiji6(){
				this.yijix = 5
				this.pri = this.categoryList[5].id
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
			}
		},
	}
</script>

<style>
	@import url("../assets/css/style.css");
</style>
