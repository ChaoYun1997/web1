<template>
	<div>
		<div class="index-banner">
			<div class="index-banner-div">
				<p class="p16">Make The Props More Realistic</p>
				<p class="p17">Realistic <br> Prop Project</p>
				<div class="index-banner-div-div">
					<div></div>
					<p style="font-family: UbuntuL;">In the prop customization industry, we are ready to be <br> your first choice.
						<br> We provide more than props.</p>
				</div>
				<router-link to="/product">Learn more ></router-link>
			</div>
		</div>
		<div class="logo-list">
			<div class="logo1">
				<splide :options="options">
					<splide-slide class="logo-item">
						<div>
							<img src="../../public/img/c1.png" width="100%" alt="">
						</div>
					</splide-slide>
					<splide-slide class="logo-item">
						<div>
							<img src="../../public/img/c2.png" width="100%" alt="">
						</div>
					</splide-slide>
					<splide-slide class="logo-item">
						<div>
							<img src="../../public/img/c3.png" width="100%" alt="">
						</div>
					</splide-slide>
					<splide-slide class="logo-item">
						<div>
							<img src="../../public/img/c4.png" width="100%" alt="">
						</div>
					</splide-slide>
					<splide-slide class="logo-item">
						<div>
							<img src="../../public/img/c5.png" width="100%" alt="">
						</div>
					</splide-slide>
					<splide-slide class="logo-item">
						<div>
							<img src="../../public/img/c6.png" width="100%" alt="">
						</div>
					</splide-slide>
					<splide-slide class="logo-item">
						<div>
							<img src="../../public/img/c7.png" width="100%" alt="">
						</div>
					</splide-slide>
					<splide-slide class="logo-item">
						<div>
							<img src="../../public/img/c8.png" width="100%" alt="">
						</div>
					</splide-slide>
					<splide-slide class="logo-item">
						<div>
							<img src="../../public/img/c9.png" width="100%" alt="">
						</div>
					</splide-slide>
					<!-- <splide-slide class="logo-item">
						<div>
							<img src="../../public/img/c1.png" alt="">
						</div>
					</splide-slide> -->
				</splide>
			</div>
			<div class="logo2">
				<splide :options="optionsyu">
					<splide-slide class="logo-item">
						<div>
							<img src="../../public/img/c1.png" width="100%" alt="">
						</div>
					</splide-slide>
					<splide-slide class="logo-item">
						<div>
							<img src="../../public/img/c2.png" width="100%" alt="">
						</div>
					</splide-slide>
					<splide-slide class="logo-item">
						<div>
							<img src="../../public/img/c3.png" width="100%" alt="">
						</div>
					</splide-slide>
					<splide-slide class="logo-item">
						<div>
							<img src="../../public/img/c4.png" width="100%" alt="">
						</div>
					</splide-slide>
					<splide-slide class="logo-item">
						<div>
							<img src="../../public/img/c5.png" width="100%" alt="">
						</div>
					</splide-slide>
					<splide-slide class="logo-item">
						<div>
							<img src="../../public/img/c6.png" width="100%" alt="">
						</div>
					</splide-slide>
					<splide-slide class="logo-item">
						<div>
							<img src="../../public/img/c7.png" width="100%" alt="">
						</div>
					</splide-slide>
					<splide-slide class="logo-item">
						<div>
							<img src="../../public/img/c8.png" width="100%" alt="">
						</div>
					</splide-slide>
					<splide-slide class="logo-item">
						<div>
							<img src="../../public/img/c9.png" width="100%" alt="">
						</div>
					</splide-slide>
					<!-- <splide-slide class="logo-item">
						<div>
							<img src="../../public/img/c1.png" alt="">
						</div>
					</splide-slide> -->
				</splide>
			</div>
		</div>
		<div class="cate">
			<p class="biaoti">Prop Category</p>
			<div class="cate-list">
				<div class="cate-list-l">
					<div class="catetop">
						<div><img src="../../public/img/ici1.png" alt="">
							<router-link :to="{path:'Product',query:{queryId:4}}" class="hover1">Prop phone ></router-link>
						</div>
						<div><img src="../../public/img/ici6.png" alt="">
							<router-link :to="{path:'Product',query:{queryId:3}}" class="hover1">Prop ipad ></router-link>
						</div>
					</div>
					<div class="catebottom"><img src="../../public/img/ici5.png" alt="">
						<router-link :to="{path:'Product',query:{queryId:0}}" class="hover1">Prop tv ></router-link>
					</div>
				</div>
				<div class="cate-list-r">
					<div class="catebottom"><img src="../../public/img/ici4.png" alt="">
						<router-link :to="{path:'Product',query:{queryId:2}}" class="hover1">Prop aio ></router-link>
					</div>
					<div class="catetop">
						<div><img src="../../public/img/ici3.png" alt="">
							<router-link :to="{path:'Product',query:{queryId:1}}" class="hover1">Prop LAPTOP ></router-link>
						</div>
						<div><img src="../../public/img/ici2.png" alt="">
							<router-link :to="{path:'Product',query:{queryId:5}}" class="hover1">Prop book ></router-link>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="cust">
			<p class="p1">customized service</p>
			<div class="cust-list">
				<div><img src="../../public/img/sheji.png" alt="">
					<p>Logo custom</p>
					<p>The precise equipments allow the logo of different brands to be highly restored.</p>
				</div>
				<div><img src="../../public/img/fengmian.png" alt="">
					<p>COVER CUSTOM</p>
					<p>We design anything! Custom covers for any scene is available.</p>
				</div>
				<div><img src="../../public/img/gaojingyanseshengyinshezhi.png" alt="">
					<p>COLOR CUSTOM</p>
					<p>Original color, or any color you want can be well achieved by advanced technology.</p>
				</div>
				<div><img src="../../public/img/daxiao.png" alt="">
					<p>SIZE CUSTOM</p>
					<p>Strict testing procedures ensures that the size of props and the original products are identical.</p>
				</div>
			</div>
		</div>
		<div class="star">
			<p class="biaoti">star products </p>
			<div class="star-list">
				<!-- <div class="star-item" v-for="item of hotShopList.slice(0,4)" :key="item.num">
					<div>
						<p>{{item.name}}</p>
						<p>Size and cover can be customized for all your scene requirements.</p>
						<router-link :to="{path:'Details',query:{queryId:item.id}}">→ more</router-link>
					</div><img :src="'http://cdn.fish-cloud.com/'+item.img" width="100%" height="379px" alt="">
				</div> -->
				<div class="star-item" v-if="hotShopList.length>=1">
					<div>
						<p>{{hotShopList[2].name}}</p>
						<p>{{hotShopList[2].describe}}</p>
						<router-link :to="{path:'Details',query:{queryId:hotShopList[2].id}}">→ more</router-link>
					</div><img src="../../public/img/star1.png" width="100%" alt="">
				</div>
				<div class="star-item" v-if="hotShopList.length>=2">
					<div>
						<p>{{hotShopList[0].name}}</p>
						<p>{{hotShopList[0].describe}}</p>
						<router-link :to="{path:'Details',query:{queryId:hotShopList[0].id}}">→ more</router-link>
					</div><img src="../../public/img/star2.png" width="100%" alt="">
				</div>
				<div class="star-item" v-if="hotShopList.length>=3">
					<div>
						<p>{{hotShopList[3].name}}</p>
						<p>{{hotShopList[3].describe}}</p>
						<router-link :to="{path:'Details',query:{queryId:hotShopList[3].id}}">→ more</router-link>
					</div><img src="../../public/img/star3.png" width="100%" alt="">
				</div>
				<div class="star-item" v-if="hotShopList.length>=4">
					<div>
						<p>{{hotShopList[1].name}}</p>
						<p>{{hotShopList[1].describe}}</p>
						<router-link :to="{path:'Details',query:{queryId:hotShopList[1].id}}">→ more</router-link>
					</div><img src="../../public/img/star4.png" width="100%" alt="">
				</div>
			</div>
		</div>
		<div class="yaers">
			<div class="number">
				<div><span></span>
					<p>10+</p>
					<p>years</p>
				</div>
				<div><span></span>
					<p>6</p>
					<p>experts of R&D team</p>
				</div>
				<div><span></span>
					<p>40</p>
					<p>countries</p>
				</div>
				<div><span></span>
					<p>12000㎡</p>
					<p>factory area</p>
				</div>
			</div>

		</div>
		<div class="yaers-bot">
			<div class="yaers-bot-l">
				<div>
					<p>about company</p>
					<p>I am Shing How, CEO of YIJIA. Ten years ago, I began to learn model and soft decoration industry by chance. I
						found that the quality and the restoration of the prop would affect the visual effect. However, many props will
						be discarded after being used for a period of time, so they are relatively crude and cannot be restored to the
						original appearance.
					</p>
				</div>
				<div>
					<p>How to make props more realistic?</p>
					<img src="../../public/img/dhk2.png" width="100%" alt="">
				</div>
			</div>
			<div class="yaers-bot-r">
				<p class="p2">Our Values</p>
				<div class="y-top">
					<div>01</div>
					<div>Quality</div>
				</div>
				<div class="y-bottom">Provide quality products and considerate services that perfectly meet the customers' needs
					and expectations</div>
				<div class="y-top">
					<div>02</div>
					<div>Humanistic Company</div>
				</div>
				<div class="y-bottom">We take each employee's personal development into consideration and willing to offer
					assistance.</div>
				<div class="y-top">
					<div>03</div>
					<div>Team Work</div>
				</div>
				<div class="y-bottom">We work as a team, learn from each other, and always try to improve our skills to benefit our
					customers. </div>
				<div class="y-top">
					<div>04</div>
					<div>Efficiency</div>
				</div>
				<div class="y-bottom">We constantly update ourselves to improve our work efficiency and provide better service for
					customers.</div>
			</div>
		</div>
		<div class="inqu">
			<div class="inqu-item">
				<div>
					<p>Superior props, <br>professionally designed.</p>
					<router-link to="/contact">INQUIRY ></router-link>
				</div>
			</div>
		</div>
		<div class="indu">
			<p class="biaoti">INdustries</p>
			<div class="indu-top">
				<div>
					<img src="../../public/img/indu1.png" width="100%" alt="">
					<p>SAMPLE ROOM</p>
					<p>YIJIA provides a wide range of soft decorations such as TV props,pros books and prop laptops to decorate your
						showroms.</p>
				</div>
				<div>
					<img src="../../public/img/indu2.png" width="100%" alt="">
					<p>film and tv prodution</p>
					<p>At YIJIA, you can find high quality props like iphone props, ipad props and prop books to help you reduce costs
						o film and TV production.</p>
				</div>
				<div>
					<img src="../../public/img/indu3.png" width="100%" alt="">
					<p>advertising shooting</p>
					<p>It can be inevitable to use props when shooting advertisement.YIJIA can help find the suitable props you want
						with resonable and competitive prices.</p>
				</div>
			</div>
			<div class="indu-bot">
				<div>
					<img src="../../public/img/indu4.png" width="100%" alt="">
					<p>hotel decoration</p>
					<p>To decorate hotel with ranges of electronics and other soft decorations while minimizing costs, props can be a
						superior choice.</p>
				</div>
				<div>
					<img src="/img/indu5.png" width="100%" alt="">
					<p>exhibition</p>
					<p>At YIJIA, we can provide OEM and customized serveice for props production. wWe can meet te neds of unique
						products your exhibitions need.</p>
				</div>
			</div>
		</div>
		<div class="index-boot">
			<p class="biaoti" style="padding-top: 110px;">Case Show</p>
			<div class="lunbo">
				<div class="shouji"><img src="/img/smds.png" width="100%" height="100%" alt=""></div>
				<carousel-3d :perspective="0" :autoplayTimeout="2500" :autoplay="true" :clickable="false" :border="0" :height="576" :width="267" :space="310"
				:controlsVisible="true">
					<slide :index="0">
						<div class="lunbo-sj" style="background-image: url(/img/phone1.jpg);">
							<div class="lunbo-sj-item">
								<div class="toutoubig">
									<img src="/img/toutou1.png" alt="" class="toutou">
								</div>
								<div>
									<p>Thomas</p>
									<img src="../../public/img/hstar.png" alt="">
									<img src="../../public/img/hstar.png" alt="">
									<img src="../../public/img/hstar.png" alt="">
									<img src="../../public/img/hstar.png" alt="">
									<img src="../../public/img/hstar.png" alt="">
								</div>
							</div>
							<p>It's WONDERFUL!! We're blown away again, we love its portability and light weight; it's exactly what we
								wanted. </p>
						</div>
					</slide>
					<slide :index="1">
						<div class="lunbo-sj" style="background-image: url(/img/phone2.jpg);">
							<div class="lunbo-sj-item">
								<div class="toutoubig">
									<img src="/img/toutou2.png" alt="" class="toutou">
								</div>
								<div>
									<p>Paul Dolley</p>
									<img src="../../public/img/hstar.png" alt="">
									<img src="../../public/img/hstar.png" alt="">
									<img src="../../public/img/hstar.png" alt="">
									<img src="../../public/img/hstar.png" alt="">
									<img src="../../public/img/hstar.png" alt="">
								</div>
							</div>
							<p>It is evident that your organization put a 100% plus effort into producing these props and we want to thank
								you and your staff for the quality props. </p>
						</div>
					</slide>
					<slide :index="2">
						<div class="lunbo-sj" style="background-image: url(/img/phone3.jpg);">
							<div class="lunbo-sj-item">
								<div class="toutoubig">
									<img src="/img/toutou3.png" alt="" class="toutou">
								</div>
								<div>
									<p>Laurel</p>
									<img src="../../public/img/hstar.png" alt="">
									<img src="../../public/img/hstar.png" alt="">
									<img src="../../public/img/hstar.png" alt="">
									<img src="../../public/img/hstar.png" alt="">
									<img src="../../public/img/hstar.png" alt="">
								</div>
							</div>
							<p>It's been wonderful working with you. You're a great team to work with the first prop makers I came across
								who knew exactly what we needed and could always work within our tight time frame! Thank you!</p>
						</div>
					</slide>
					<slide :index="3">
						<div class="lunbo-sj" style="background-image: url(/img/phone4.jpg);">
							<div class="lunbo-sj-item">
								<div class="toutoubig">
									<img src="/img/toutou4.png" alt="" class="toutou">
								</div>
								<div>
									<p>Josh</p>
									<img src="../../public/img/hstar.png" alt="">
									<img src="../../public/img/hstar.png" alt="">
									<img src="../../public/img/hstar.png" alt="">
									<img src="../../public/img/hstar.png" alt="">
									<img src="../../public/img/hstar.png" alt="">
								</div>
							</div>
							<p>Our client received it and said it looks great, exactly what they wanted it to be. I want to thank you for
								the well-done job. We'll be sure and contact Beidingyue for any additional scale prop work that comes up.</p>
						</div>
					</slide>
					<slide :index="4">
						<div class="lunbo-sj" style="background-image: url(/img/phone5.jpg);">
							<div class="lunbo-sj-item">
								<div class="toutoubig">
									<img src="/img/toutou5.png" alt="" class="toutou">
								</div>
								<div>
									<p>Jamie</p>
									<img src="../../public/img/hstar.png" alt="">
									<img src="../../public/img/hstar.png" alt="">
									<img src="../../public/img/hstar.png" alt="">
									<img src="../../public/img/hstar.png" alt="">
									<img src="../../public/img/hstar.png" alt="">
								</div>
							</div>
							<p>It looks FANTASTIC!! Thanks for your great work and appreciate your due diligence to get this completed
								within such a tight time!</p>
						</div>
					</slide>
				</carousel-3d>
			</div>
		</div>
		<Right></Right>
	</div>
</template>

<script>
	import Right from "../components/Right.vue"
	export default {
		name: 'Home',
		components: {
			Right
		},
		data() {
			return {
				options: {
					rewind: true,
					autoplay: true,
					interval: 1500,
					type: 'loop',
					perPage: 8,
					perMove: 1,
					arrows: false,
					pagination: false,
					pauseOnHover: false
				},
				optionsyu: {
					rewind: true,
					autoplay: true,
					interval: 1500,
					type: 'loop',
					perPage: 4,
					perMove: 1,
					arrows: false,
					pagination: false,
					pauseOnHover: false
				},
				hotShopList: []
			}
		},
		created() {
			this.getdata()
		},
		methods: {
			getdata() {
				this.$axios.get('/api/hotShops').then(res => {
					this.hotShopList = res.data;
					console.log("aa", this.hotShopList)
				})
			}
		},
	}
</script>

<style scoped>
	.lunbo .current .lunbo-sj {
		border-radius: 20px;
	}

	.index-boot>>>.next {
		right: 0;
		/* 
		margin-top: 35px; */
	}

	.index-boot>>>.next span {
		background-color: rgba(0, 0, 0, 0.3);
		width: 45px;
		display: block;
		text-align: center;
		height: 45px;
		color: #FFFFFF;
		font-size: 70px;
		line-height: 24px;
		border-radius: 50%;
	}

	.index-boot>>>.prev span {
		background-color: rgba(0, 0, 0, 0.3);
		width: 45px;
		display: block;
		text-align: center;
		height: 45px;
		color: #FFFFFF;
		font-size: 70px;
		line-height: 24px;
		border-radius: 50%;
	}

	.carousel-3d-slide {
		background-color: unset;
	}

	.catetop div:hover .hover1 {
		display: block;
	}

	.catetop div:hover {
		background-color: #dfdfdf;
	}

	.catebottom:hover .hover1 {
		display: block;
	}

	.catebottom:hover {
		background-color: #dfdfdf;
	}

	.carousel-3d-slide img {
		width: unset;
	}

	@import url("../assets/css/style.css");
</style>
