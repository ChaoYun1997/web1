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
					<span class="detals-mb" style="font-family: UbuntuL;">
						<router-link to="/product">PRODUCT</router-link>
					</span>
					<span>></span>
					<span style="font-family: UbuntuB;">{{shopList.shopTitle}}</span>
				</div>
			</div>
		</div>
		<div class="details">
			<div class="details-l">
				<a-menu :default-selected-keys="['1']" :open-keys.sync="openKeys" mode="inline" @click="handleClick">
					<a-sub-menu v-for="(item,index) of categoryList" :key="'sub'+index">
						<span slot="title">
							<span>{{item.catName}}</span>
						</span>
						<a-menu-item v-for="ads of item.shopList" :key="ads.id">
							{{ads.name}}
						</a-menu-item>
					</a-sub-menu>
					<!-- <a-sub-menu key="sub2">
						<span slot="title">
							<span>Prop TVv</span>
						</span>
						<a-menu-item key="5">
							Prop 50″LED TV YT8250
						</a-menu-item>
						<a-menu-item key="6">
							Prop 50″LED TV YT8250
						</a-menu-item>
					</a-sub-menu>
					<a-sub-menu key="sub4">
						<span slot="title">
							<span>Prop TVw</span></span>
						<a-menu-item key="9">
							Prop 50″LED TV YT8250
						</a-menu-item>
						<a-menu-item key="10">
							Prop 50″LED TV YT8250
						</a-menu-item>
					</a-sub-menu> -->
				</a-menu>
				<div class="details-l-b">
					<img src="../../public/img/logo.png" alt="">
					<p>yijia</p>
					<p>Make The Props More Realistic</p>
					<router-link to="/contact">contact us</router-link>
				</div>
			</div>
			<div class="details-r">
				<div class="details-r-t">
					<div>
						<template v-for="(item,index) of shopList.shopImgList">
							<img :key="item.id" :src="'http://cdn.fish-cloud.com/'+ item" alt="" v-if="liunum==index" height="500px">
						</template>
					</div>
					<div>
						<ul>
							<li v-for="(item,index) of shopList.shopImgList" :key="item.id" :class="{'active':liunum==index}" @click="fns(index)"><img
								:src="'http://cdn.fish-cloud.com/'+ item" width="100%" alt=""></li>
						</ul>
					</div>
				</div>
				<div class="details-r-mid">
					<p class="p4">{{shopList.shopTitle}}</p>
					<div class="details-size">
						<p v-for="item of shopList.shopAttribute" :key="item.mun"><span>{{item.name}}<!-- Warranty service --></span>:
							<span>{{item.value}}<!-- 3 Years --></span></p>
						<!-- <p><span>Dimension</span>: <span>735mm*40mm*495mm</span></p>
						<p><span>Net Weight</span>: <span>3kg</span></p>
						<p><span>Packaging Dimension</span>: <span>800mm*120mm*520mm</span></p>
						<p><span>Gross Weight</span>: <span>4kg</span></p> -->
					</div>
					<div class="share">
						<div class="share-l">
							<p>Share to:</p>
							<div>
								<ShareNetwork network="facebook" :url="'http://www.dummylcdtv.com/Details?queryId='+ shopList.id +''" href="javascript:void(0);">
									<img src="/img/share2.jpg" width="35" alt="">
								</ShareNetwork>
								<ShareNetwork network="Twitter" :url="'http://www.dummylcdtv.com/Details?queryId='+ shopList.id +''" href="javascript:void(0);">
									<img src="/img/share1.jpg" width="35" alt="">
								</ShareNetwork>
								<ShareNetwork network="LinkedIn" :url="'http://www.dummylcdtv.com/Details?queryId='+ shopList.id +''" href="javascript:void(0);">
									<img src="/img/share3.png" width="35" alt="">
								</ShareNetwork>
							</div>
							<!-- <vshare :vshareConfig="vshareConfig">
							</vshare> -->
							<!-- <div></div> -->
							<!-- <Sharethis share-this-elementid="dws" share-this-embed-url="//platform-api.sharethis.com/js/sharethis.js#property=[5ff551bd63ffa200121a4764]&product=sticky-share-buttons&cms=sop"/> -->
							<!-- <div class="sharethis-inline-share-buttons"></div> -->
						</div>
						<div class="share-r" @click="showModal">Inquiry ></div>
						<!-- <a-button class="share-r" @click="showModal">
							Inquiry
						</a-button> -->
						<a-modal width="700px" :title="shopList.shopTitle" :visible="visible" :confirm-loading="confirmLoading" @ok="handleOk"
						@cancel="handleCancel">
							<!-- <template slot="footer">
								<a-button key="back" @click="handleCancel">
									Cancel
								</a-button>
								<a-button key="submit" type="primary" :loading="loading" @click="handleOk">
									Submit
								</a-button>
							</template> -->
							<div class="contact-form" style="height: auto;padding: 20px;">
								<form>
									<div class="contact-form-top">
										<div>
											<p>Name <span>*</span>:</p>
											<input type="text" placeholder="Name" v-model="quiryfrom.contactName">
										</div>
										<div>
											<p>Quantity <span>*</span>:</p>
											<input type="number" placeholder="Number" v-model.number="quiryfrom.quantity">
										</div>
									</div>
									<div class="contact-form-top">
										<div>
											<p>Email <span>*</span>:</p>
											<input type="text" placeholder="Email Address" v-model="quiryfrom.contactEMail">
										</div>
										<div>
											<p>TEL <span>*</span>:</p>
											<input type="text" placeholder="Phone Number" v-model="quiryfrom.contactTel">
										</div>
									</div>
									<p>VerifyCode <span>*</span>:</p>
									<div style="display: flex;">
										<input type="text" v-model="quiryfrom.verifyCode" placeholder="VerifyCode" style="margin: 10px 20px 0 0;">
										<img :src="code.imgData" alt="" @click="cheangcod()">
									</div>
									<p style="margin-top: 30px;">Message <span>*</span>:</p>
									<textarea placeholder="Message" rows="3" v-model="quiryfrom.message"></textarea>


								</form>
							</div>
						</a-modal>
					</div>
				</div>
				<div class="product-details">
					<p class="psdas">product details</p>
					<img src="/img/tu1.png" width="100%" alt="" v-if="shopList.catId[0]==21">
					<img src="/img/1-com.jpg" width="100%" alt="" v-if="shopList.catId[0]==22">
					<img src="/img/1-book.jpg" width="100%" alt="" v-if="shopList.catId[0]==25">
					<img src="/img/1-IPAD.jpg" width="100%" alt="" v-if="shopList.catId[0]==20">
					<img src="/img/1-phone.jpg" width="100%" alt="" v-if="shopList.catId[0]==24">
					<img src="/img/1-AIO.jpg" width="100%" alt="" v-if="shopList.catId[0]==23">
				</div>
				<div class="product-details">
					<p class="psdas">Our Props in Sample Room</p>
					<!-- <img src="/img/tu1.png" width="100%" alt=""> -->
					<div v-html="shopList.shopDescribe"></div>
				</div>
				<div class="product-bottom">
					<p class="p5">Customized Service</p>
					<div class="bottom-sdmd">
						<div class="bottom-item">
							<div><img src="/img/sheji1.png" alt=""></div>
							<div>
								<p>Logo custom</p>
								<p>The precise equipments allow the logo of different brands to be highly restored.</p>
							</div>
						</div>
						<div class="bottom-item">
							<div><img src="/img/sheji2.png" alt=""></div>
							<div>
								<p>COVER CUSTOM</p>
								<p>We design anything! Custom covers for any scene is available.</p>
							</div>
						</div>
						<div class="bottom-item">
							<div><img src="/img/sheji3.png" alt=""></div>
							<div>
								<p>COLOR CUSTOM</p>
								<p>Original color, or any color you want can be well achieved by advanced technology.</p>
							</div>
						</div>
						<div class="bottom-item">
							<div><img src="/img/sheji4.png" alt=""></div>
							<div>
								<p>SIZE CUSTOM</p>
								<p>Strict testing procedures ensures that the size of props and the original products are identical.</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="ts-foot"></div>
	</div>
</template>

<script>
	export default {
		name: 'Details',
		data() {
			return {
				// vshareConfig: {
				// 	shareList: [
				// 		'fbook',
				// 		'twi',
				// 		'linkedin'
				// 		// 此处放分享列表（ID）
				// 	],
				// 	common: {
				// 		//此处放置通用设置
				// 	},
				// 	share: [{
				// 		//此处放置分享按钮设置
				// 	}],
				// 	slide: [
				// 		//此处放置浮窗分享设置
				// 	],
				// 	image: [
				// 		//此处放置图片分享设置
				// 	],
				// 	selectShare: [
				// 		//此处放置划词分享设置
				// 	]
				// },
				url: '',
				id: '',
				pri: '',
				categoryList: [],
				shopList: [],
				current: ['44'],
				openKeys: ['sub0', '44'],
				liunum: 0,
				liucList: [{
						url: '/img/1-2.png'
					},
					{
						url: '/img/1-2.png'
					},
					{
						url: '/img/1-2.png'
					},
					{
						url: '/img/1-2.png'
					}
				],
				visible: false,
				confirmLoading: false,
				code: '',
				quiryfrom: {
					"shopId": '',
					"shopSku": "",
					"quantity": '',
					"contactName": "",
					"contactEMail": "",
					"contactCompany": "",
					"contactTel": "",
					"message": "",
					"codeSession": "",
					"sourceUrl": "",
					"enquirySource": "",
					"verifyCode": "",
					"enquiryType": 0
				}
			}
		},
		created() {
			this.id = this.$route.query.queryId;
			this.getdata()
		},
		watch: {
			$route() {
				if (this.$route) {
					this.id = this.$route.query.queryId;
					this.getdata()
					console.log('dasgkjd gaskj daskd')
				}
			}
		},
		methods: {
			cheangcod() {
				this.$axios.get('/api/getEnquiryCode').then(res => {
					this.code = res.data.data;
					console.log("xincode", this.code)
					this.quiryfrom.codeSession = this.code.session
					this.$forceUpdate()
				})
			},
			handleClick(e) {
				console.log('click', e.key);
				this.id = e.key
				this.$axios.get('/api/shopDetail?id=' + this.id + '').then(res => {
					this.shopList = res.data;
					console.log("xing", this.shopList)
					this.quiryfrom.shopId = this.shopList.id
				})
			},
			fns(index) {
				this.liunum = index
			},
			getdata() {
				this.$axios.get('/api/shopDetail?id=' + this.id + '').then(res => {
						this.shopList = res.data;
						console.log("123", this.shopList)
						this.quiryfrom.shopId = this.shopList.id
					}),
					this.$axios.get('/api/catShop').then(res => {
						this.categoryList = res.data;

					}),
					this.$axios.get('/api/getEnquiryCode').then(res => {
						this.code = res.data.data;
						console.log("code", this.code)
						this.quiryfrom.codeSession = this.code.session
					})
			},
			showModal() {
				this.visible = true;
			},
			handleOk() {
				this.confirmLoading = true;
				// 	/* json格式提交： */
				let quiryfrom = JSON.stringify(this.quiryfrom);

				// 	/* formData格式提交： */
				// 	// let formData = new FormData();
				// 	// for (var key in this.formMess) {
				// 	// 	formData.append(key, this.formMess[key]);
				// 	// }

				this.$axios({
					method: "post",
					url: "/api/pushEnquiry",
					headers: {
						// "Content-Type": "multipart/form-data",
						"Content-Type": "application/json"
					},
					withCredentials: true,
					data: quiryfrom
				}).then((res) => {
					// console.log("提示",res.data.data.msg);
					var a = res.data.code;
					if (a == 200) {
						this.$message.success(
							'Your inquire message has been successfully sent. We will contact you as soon as possible!',
							2, )
					} else {
						this.$message.error(
							'Error, Please Try again!',
							2, )
					}
				});
				console.log('ll', this.quiryfrom)
				setTimeout(() => {
					// this.visible = false;
					this.confirmLoading = false;
				}, 3500);
			},
			handleCancel() {
				console.log('Clicked cancel button');
				this.visible = false;
			}
		},
	}
</script>

<style scoped>
	#st-1 {
		z-index: 0;
	}

	.share-l>>>.st-last {
		display: block !important;
	}

	.share-l>>>#st-1 .st-btn:last-child {
		display: block !important;
	}

	.ant-menu-inline,
	.ant-menu-vertical,
	.ant-menu-vertical-left {
		border-right: none;
	}

	.details-l>>>.ant-menu-submenu-title {
		padding: 0 !important;
		border-bottom: #e5e5e5 solid 1px;
		text-transform: uppercase;
		font-size: 22px;
		font-family: UbuntuM;
	}

	.details-l>>>.ant-menu-inline .ant-menu-item {
		padding: 0 !important;
		font-family: UbuntuL;
	}

	.details-l>>>.ant-menu-inline .ant-menu-item-selected::after {
		opacity: 0;
	}

	.details-l>>>.ant-menu-item-selected {
		background-color: unset;
	}

	@import url("../assets/css/style.css");
</style>
