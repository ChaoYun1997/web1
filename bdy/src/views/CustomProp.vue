<template>
	<div>
		<div class="pro-banner" style="background-image: url(/img/contactus.png);position: absolute;top: 0; left: 0;">
			<div class="topsa">
				<div class="topsa-l">
					<p>Ready to <br> decorate your ideal life </p>
				</div>
				<div class="topsa-r">
					<span style="font-family: UbuntuL;">
						<router-link to="/">HOME</router-link>
					</span>
					<span>></span>
					<span style="font-family: UbuntuB;">
						Prop Customization
					</span>
				</div>
			</div>
		</div>
		<div class="tubiao">
			<p class="p12">Prop Customiazation</p>
			<div class="tubiao-list">
				<div class="tubiao-list-t">
					<div class="tubiao-item" style="background: linear-gradient(to right, #38bcf9 0%, #426cf5 100%); color: #FFFFFF;">
						<img src="/img/prop1.png" alt="">
						<p style="color: #FFFFFF;">Rich Selection</p>
						<p>Keep you ahead of your competition.</p>
					</div>
					<div class="tubiao-item">
						<img src="/img/prop2.png" alt="">
						<p>Customized Service</p>
						<p>Free to choose the images they want.</p>
					</div>
					<div class="tubiao-item">
						<img src="/img/prop3.png" alt="">
						<p>Easy Ordering</p>
						<p>Order on-line or send us an email.</p>
					</div>
					<div class="tubiao-item">
						<img src="/img/prop4.png" alt="">
						<p>High Quality</p>
						<p>Produce in accordance with standards.</p>
					</div>
				</div>
				<div class="tubiao-list-b">
					<div class="tubiao-item">
						<img src="/img/prop5.png" alt="">
						<p>Reasonable Price</p>
						<p>Our own factory ensures the favorable prices.</p>
					</div>
					<div class="tubiao-item">
						<img src="/img/prop6.png" alt="">
						<p>Safe Delivering</p>
						<p>Deliver punctually and safely.</p>
					</div>
					<div class="tubiao-item">
						<img src="/img/prop7.png" alt="">
						<p>After-sale Service</p>
						<p>Don't hesitate to contact us for any questions.</p>
					</div>
				</div>
			</div>
		</div>
		<div class="categ">
			<p class="biaoti">Customize Prop by Category</p>
			<div class="categ-list">
				<div class="categ-item">
					<img src="/img/category1.png" width="100%" alt="">
					<router-link :to="{path:'Product',query:{queryId:0}}"><div>PROP TV</div></router-link>
				</div>
				<div class="categ-item">
					<img src="/img/category2.png" width="100%" alt="">
					<router-link :to="{path:'Product',query:{queryId:2}}"><div>PROP COMPUTER</div></router-link>
				</div>
				<div class="categ-item">
					<img src="/img/category3.png" width="100%" alt="">
					<router-link :to="{path:'Product',query:{queryId:1}}"><div>PROP LAPTOP</div></router-link>
				</div>
				<div class="categ-item">
					<img src="/img/category4.png" width="100%" alt="">
					<router-link :to="{path:'Product',query:{queryId:3}}"><div>PROP PAD</div></router-link>
				</div>
				<div class="categ-item">
					<img src="/img/category5.png" width="100%" alt="">
					<router-link :to="{path:'Product',query:{queryId:4}}"><div>PROP PHONE</div></router-link>
				</div>
				<div class="categ-item">
					<img src="/img/category6.png" width="100%" alt="">
					<router-link :to="{path:'Product',query:{queryId:5}}"><div>PROP BOOK</div></router-link>
				</div>
			</div>
		</div>
		<div class="logo-list" style="padding: 30px 0;">
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
		<div class="inqyew">
			<p class="biaoti">Prop Customiazation</p>
			<div class="inqyew-list">
				<div class="inqyew-item">
					<div>
						<p>01</p>
						<img src="../../public/img/inqyew1.png" alt="">
					</div>
					<p class="p13">Inquiry</p>
				</div>
				<div class="inqyew-item">
					<div>
						<p>02</p>
						<img src="../../public/img/inqyew2.png" alt="">
					</div>
					<p class="p13">Discuss Details</p>
				</div>
				<div class="inqyew-item">
					<div>
						<p>03</p>
						<img src="../../public/img/inqyew3.png" alt="">
					</div>
					<p class="p13">Receive Quotation</p>
				</div>
				<div class="inqyew-item">
					<div>
						<p>04</p>
						<img src="../../public/img/inqyew4.png" alt="">
					</div>
					<p class="p13">Pay Deposit</p>
				</div>
				<div class="inqyew-item">
					<div>
						<p>05</p>
						<img src="../../public/img/inqyew5.png" alt="">
					</div>
					<p class="p13">Mass Production</p>
				</div>
				<div class="inqyew-item">
					<div>
						<p>06</p>
						<img src="../../public/img/inqyew6.png" alt="">
					</div>
					<p class="p13">Quality Check</p>
				</div>
				<div class="inqyew-item">
					<div>
						<p>07</p>
						<img src="../../public/img/inqyew7.png" alt="">
					</div>
					<p class="p13">Delivery</p>
				</div>
				<div class="inqyew-item">
					<div>
						<p>08</p>
						<img src="../../public/img/inqyew8.png" alt="">
					</div>
					<p class="p13">After-Sale Service</p>
				</div>
			</div>
		</div>
		<div class="inqu" style="background-image: url(/img/conprop1.png);">
			<div class="inqu-item">
				<div>
					<p>Superior props, <br>professionally designed.</p>
					<router-link to="/contact">INQUIRY ></router-link>
				</div>
			</div>
		</div>
		<div class="countries">
			<p class="biaoti">
				We Are Trusted<br>
				40+ Countries Worldwide
			</p>
		</div>
		<div class="countries-se">
			<div class="zuobioa a1">canada</div>
			<div class="zuobioa a2">america</div>
			<div class="zuobioa a3">brazl</div>
			<div class="zuobioa a4">uk</div>
			<div class="zuobioa a5">russa</div>
			<div class="zuobioa a6">india</div>
			<div class="zuobioa a7">thailand</div>
			<div class="zuobioa a8">japan</div>
			<div class="zuobioa-diandian b1"><div></div></div>
			<div class="zuobioa-diandian b2"><div></div></div>
			<div class="zuobioa-diandian b3"><div></div></div>
			<div class="zuobioa-diandian b4"><div></div></div>
			<div class="zuobioa-diandian b5"><div></div></div>
			<div class="zuobioa-diandian b6"><div></div></div>
			<div class="maswssda">
				<div class="yiqianliu">
					<carousel-3d :perspective="0" :border="0" :width="1170" :space="310" :controlsVisible="true" :inverseScaling="360" :autoplay="true"
					:controlsWidth="30" :controlsHeight="30">
						<slide :index="0">
							<div class="se-item">
								<div class="se-item-l">
									<div class="listitem">
										<img src="/img/touxx1.png" width="76px" alt="">
										<div>
											<p>Barton</p>
											<p>L.A., USA</p>
										</div>
									</div>
									<p class="p14">It's WONDERFUL!! We're blown away again, we love its portability and light weight; it's exactly what we wanted. </p>
								</div>
								<div class="se-item-r">
									<div class="listitem">
										<img src="/img/touxx2.png" width="76px" alt="">
										<div>
											<p>Charles</p>
											<p>Canberra, Australia</p>
										</div>
									</div>
									<p class="p14">It is evident that your organization put a 100% plus effort into producing these props and we want to thank you and your staff for the quality props.</p>
								</div>
							</div>
						</slide>
						<slide :index="1">
							<div class="se-item">
								<div class="se-item-l">
									<div class="listitem">
										<img src="/img/touxx3.png" width="76px" alt="">
										<div>
											<p>Derrick</p>
											<p>Birmingham, UK</p>
										</div>
									</div>
									<p class="p14">You're a great team to work with the first prop makers I came across who knew exactly what we needed and could always work within our tight time frame! Thank you!</p>
								</div>
								<div class="se-item-r">
									<div class="listitem">
										<img src="/img/touxx4.png" alt="">
										<div>
											<p>Quella</p>
											<p>Marseille, France</p>
										</div>
									</div>
									<p class="p14">Our client received it and said it looks great, exactly what they wanted it to be. We'll be sure and contact Beidingyue for any additional scale prop work that comes up.</p>
								</div>
							</div>
						</slide>
						<slide :index="2">
							<div class="se-item">
								<div class="se-item-l">
									<div class="listitem">
										<img src="/img/touxx5.png" alt="">
										<div>
											<p>Claudia</p>
											<p>Miami, USA</p>
										</div>
									</div>
									<p class="p14">It looks FANTASTIC!! Thanks for your great work and appreciate your due diligence to get this completed within such a tight time!</p>
								</div>
								<div class="se-item-r">
									<div class="listitem">
										<img src="/img/touxx6.png" alt="">
										<div>
											<p>Indira</p>
											<p>Munich, Germany</p>
										</div>
									</div>
									<p class="p14">Great job on the props! We looking forward to continuing this relationship with you to produce additional high-quality models in the future. </p>
								</div>
							</div>
						</slide>
					</carousel-3d>
				</div>
				<div class="yiqianliumja">
					<splide :options="optionssd">
						<splide-slide>
							<div class="se-item">
								<div class="se-item-l">
									<div class="listitem">
										<img src="/img/touxx1.png" width="76px" alt="">
										<div>
											<p>Barton</p>
											<p>L.A., USA</p>
										</div>
									</div>
									<p class="p14">It's WONDERFUL!! We're blown away again, we love its portability and light weight; it's exactly what we wanted. </p>
								</div>
								<div class="se-item-r">
									<div class="listitem">
										<img src="/img/touxx2.png" width="76px" alt="">
										<div>
											<p>Charles</p>
											<p>Canberra, Australia</p>
										</div>
									</div>
									<p class="p14">It is evident that your organization put a 100% plus effort into producing these props and we want to thank you and your staff for the quality props.</p>
								</div>
							</div>
						</splide-slide>
						<splide-slide>
							<div class="se-item">
								<div class="se-item-l">
									<div class="listitem">
										<img src="/img/touxx3.png" width="76px" alt="">
										<div>
											<p>Derrick</p>
											<p>Birmingham, UK</p>
										</div>
									</div>
									<p class="p14">You're a great team to work with the first prop makers I came across who knew exactly what we needed and could always work within our tight time frame! Thank you!</p>
								</div>
								<div class="se-item-r">
									<div class="listitem">
										<img src="/img/touxx4.png" alt="">
										<div>
											<p>Quella</p>
											<p>Marseille, France</p>
										</div>
									</div>
									<p class="p14">Our client received it and said it looks great, exactly what they wanted it to be. We'll be sure and contact Beidingyue for any additional scale prop work that comes up.</p>
								</div>
							</div>
						</splide-slide>
						<splide-slide>
							<div class="se-item">
								<div class="se-item-l">
									<div class="listitem">
										<img src="/img/touxx5.png" alt="">
										<div>
											<p>Claudia</p>
											<p>Miami, USA</p>
										</div>
									</div>
									<p class="p14">It looks FANTASTIC!! Thanks for your great work and appreciate your due diligence to get this completed within such a tight time!</p>
								</div>
								<div class="se-item-r">
									<div class="listitem">
										<img src="/img/touxx6.png" alt="">
										<div>
											<p>Indira</p>
											<p>Munich, Germany</p>
										</div>
									</div>
									<p class="p14">Great job on the props! We looking forward to continuing this relationship with you to produce additional high-quality models in the future. </p>
								</div>
							</div>
						</splide-slide>
					</splide>
				</div>
				<div class="yiqianliumja1">
					<splide :options="optionssd1">
						<splide-slide>
							<div class="se-item">
								<div class="se-item-l">
									<div class="listitem">
										<img src="/img/touxx1.png" width="76px" alt="">
										<div>
											<p>Barton</p>
											<p>L.A., USA</p>
										</div>
									</div>
									<p class="p14">It's WONDERFUL!! We're blown away again, we love its portability and light weight; it's exactly what we wanted. </p>
								</div>
								
							</div>
						</splide-slide>
						<splide-slide>
							<div class="se-item">
								<div class="se-item-r">
									<div class="listitem">
										<img src="/img/touxx2.png" width="76px" alt="">
										<div>
											<p>Charles</p>
											<p>Canberra, Australia</p>
										</div>
									</div>
									<p class="p14">It is evident that your organization put a 100% plus effort into producing these props and we want to thank you and your staff for the quality props.</p>
								</div>
							</div>
						</splide-slide>
						<splide-slide>
							<div class="se-item">
								<div class="se-item-l">
									<div class="listitem">
										<img src="/img/touxx3.png" width="76px" alt="">
										<div>
											<p>Derrick</p>
											<p>Birmingham, UK</p>
										</div>
									</div>
									<p class="p14">You're a great team to work with the first prop makers I came across who knew exactly what we needed and could always work within our tight time frame! Thank you!</p>
								</div>
								
								
							</div>
						</splide-slide>
						<splide-slide>
							<div class="se-item">
								<div class="se-item-r">
									<div class="listitem">
										<img src="/img/touxx4.png" alt="">
										<div>
											<p>Quella</p>
											<p>Marseille, France</p>
										</div>
									</div>
									<p class="p14">Our client received it and said it looks great, exactly what they wanted it to be. We'll be sure and contact Beidingyue for any additional scale prop work that comes up.</p>
								</div>
							</div>
						</splide-slide>
						<splide-slide>
							<div class="se-item">
								<div class="se-item-l">
									<div class="listitem">
										<img src="/img/touxx5.png" alt="">
										<div>
											<p>Claudia</p>
											<p>Miami, USA</p>
										</div>
									</div>
									<p class="p14">It looks FANTASTIC!! Thanks for your great work and appreciate your due diligence to get this completed within such a tight time!</p>
								</div>
								
								
							</div>
						</splide-slide>
						<splide-slide>
							<div class="se-item">
								<div class="se-item-r">
									<div class="listitem">
										<img src="/img/touxx6.png" alt="">
										<div>
											<p>Indira</p>
											<p>Munich, Germany</p>
										</div>
									</div>
									<p class="p14">Great job on the props! We looking forward to continuing this relationship with you to produce additional high-quality models in the future. </p>
								</div>
							</div>
						</splide-slide>
					</splide>
				</div>
			</div>
		</div>
		<div class="faq">
			<p class="p15">Frequently Asked Questions</p>
			<div class="faq-list">
				<div class="faq-list-l">
					<a-collapse accordion :bordered="false" expandIconPosition="right">
						<template #expandIcon="props">
							<img :src="props.isActive ? '/img/jtactive.png':'/img/jt.png'" alt="">
						</template>
						<a-collapse-panel key="1" header="1. What Is Your Minimum Order Quantity?">
							<p>We have the detail MOQ for each item, and we also accept the sample order. If the quantity of single item
								can't reach the MOQ, the price should be sample price.</p>
						</a-collapse-panel>
						<a-collapse-panel key="2" header="2. What Is Your After-Sale Service?">
							<p>We offer 100% quality guarantee on our product. If there is any unexpected quality problem, we will see to
								compensate.</p>
						</a-collapse-panel>
						<a-collapse-panel key="3" header="3. Can I Visit Your Factory?">
							<p>Yes! Warmly welcome to visit our factory and showroom. Please send us your schedule in case you come.</p>
						</a-collapse-panel>
						<a-collapse-panel key="4" header="4. Is The Sample Fee Refundable Or Not?">
							<p>Sure, it can be refundable once the order is confirmed.</p>
						</a-collapse-panel>
						<a-collapse-panel key="5" header="5. Do You Accept The OEM Or Custom Props Order?">
							<p>Yes, we do. Both are warmly welcomed.</p>
						</a-collapse-panel>
					</a-collapse>
				</div>
				<div class="faq-list-r">
					<a-collapse accordion :bordered="false" expandIconPosition="right">
						<template #expandIcon="props">
							<img :src="props.isActive ? '/img/jtactive.png':'/img/jt.png'" alt="">
						</template>
						<a-collapse-panel key="1" header="6. What Is Your Advantage?">
							<p>With 10 years’ specialty in decoration props industry, we always devoted ourselves in good quality and
								considerate services, which are the crucial points for a company's developing.</p>
						</a-collapse-panel>
						<a-collapse-panel key="2" header="7. Are You A Manufacturer Or Trading Company?">
							<p>We are a professional props manufacturer in China.</p>
						</a-collapse-panel>
						<a-collapse-panel key="3" header="8. What Are Your Main Export Regions?">
							<p>Currently, our main export regions are Europe, America, Japan, etc.</p>
						</a-collapse-panel>
						<a-collapse-panel key="4" header="9. How Long Is The Stocking Period?">
							<p>The stocking period can be 10 to 14 days.</p>
						</a-collapse-panel>
						<a-collapse-panel key="5" header="10. What Kind Of Payment Method Can You Accept?">
							<p>T/T is accepted.</p>
						</a-collapse-panel>
					</a-collapse>
				</div>
			</div>
		</div>
		<Right></Right>
	</div>
</template>

<script>
	import Right from "../components/Right.vue"
	export default {
		name: 'CustomProp',
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
				optionssd: {
					rewind: true,
					autoplay: true,
					interval: 1500,
					type: 'loop',
					perPage: 1,
					perMove: 1,
					arrows: true,
					pagination: false,
					pauseOnHover: false
				},
				optionssd1: {
					rewind: true,
					autoplay: true,
					interval: 1500,
					type: 'loop',
					perPage: 1,
					perMove: 1,
					arrows: true,
					pagination: false,
					pauseOnHover: false
				},
			}
		}
	}
</script>

<style scoped>
	.ant-collapse-borderless>.ant-collapse-item {
		border-bottom: unset;
		margin-bottom: 20px;
	}

	.ant-collapse-borderless {
		background-color: unset;
	}

	.faq-list>>>.ant-collapse-header {
		background-color: #FFFFFF;
		border-radius: 5px;
		padding: 15px 35px;
		font-size: 18px;
		font-family: UbuntuM;
	}

	.faq-list>>>.ant-collapse-header:last-child {
		border-radius: 5px;
	}

	.faq-list>>>.ant-collapse-borderless>.ant-collapse-item>.ant-collapse-content>.ant-collapse-content-box {
		padding: 15px 35px;
		font-size: 16px;
		color: #000000;
		font-family: UbuntuL;
	}

	.faq-list>>>.ant-collapse-item-active .ant-collapse-header {
		color: #0088FC;
	}

	.maswssda>>>.carousel-3d-controls {
		position: absolute;
		top: 50%;
		height: 0;
		margin-top: -45px;
		left: 0;
		width: 100%;
		z-index: 1000;
	}
	.maswssda>>>.splide__arrow svg{
		fill: #FFFFFF;
	}

	.carousel-3d-slide img {
		width: unset;
	}

	.carousel-3d-slide {
		background-color: unset;
	}

	.maswssda>>>.next {
		right: 2%;
		/* 
		margin-top: 35px; */
	}

	.maswssda>>>.prev {
		left: 2%;
	}

	.maswssda>>>.next span {
		background-color: rgba(0, 0, 0, 0.3);
		width: 30px;
		display: block;
		text-align: center;
		height: 30px;
		color: #FFFFFF;
		font-size: 45px;
		line-height: 16px;
		border-radius: 50%;
	}

	.maswssda>>>.prev span {
		background-color: rgba(0, 0, 0, 0.3);
		width: 30px;
		display: block;
		text-align: center;
		height: 30px;
		color: #FFFFFF;
		font-size: 45px;
		line-height: 16px;
		border-radius: 50%;
	}

	@import url("../assets/css/style.css");
</style>
