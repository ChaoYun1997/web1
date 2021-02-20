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
					<span style="font-family: UbuntuB;">company</span>
				</div>
			</div>
		</div>
		<div class="company-t">
			<p class="biaoti">Reasons to choose us</p>
			<div class="company-t-min">
				<div class="yaers-bot-l"><img src="/img/company.png" width="100%" alt=""></div>
				<div class="yaers-bot-r diy">
					<div class="y-top">
						<div>01</div>
						<div>Quality</div>
					</div>
					<div class="y-bottom" style="padding-bottom: 45px;">Provide quality products and considerate services that perfectly meet the customers' needs
						and expectations</div>
					<div class="y-top">
						<div>02</div>
						<div> Humanistic Company</div>
					</div>
					<div class="y-bottom" style="padding-bottom: 45px;">We take each employee's personal development into consideration and willing to offer assistance.</div>
					<div class="y-top">
						<div>03</div>
						<div>Team Work</div>
					</div>
					<div class="y-bottom" style="padding-bottom: 45px;">We work as a team, learn from each other, and always try to improve our skills to benefit our customers. </div>
					<div class="y-top">
						<div>04</div>
						<div>Efficiency</div>
					</div>
					<div class="y-bottom" style="padding-bottom: 45px;">We constantly update ourselves to improve our work efficiency and provide better service for customers.</div>
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
		<div class="company-dhk">
			<div class="company-dhk-l">
				<p>about company</p>
				<p>I am Shing How, CEO of YIJIA. Ten years ago, I began to learn model and soft decoration industry by chance. I
					found that the quality and the restoration of the prop would affect the visual effect. However, many props will
					be discarded after being used for a period of time, so they are relatively crude and cannot be restored to the
					original appearance.</p>
			</div>
			<div class="company-dhk-r">
				<p>How to make<br>
					props more realistic?</p>
				<img src="/img/dhk2.png" width="100%" alt="">
			</div>
		</div>
		<div class="company-team">
			<p class="p10">OUR TEAM</p>
			<div class="xuexiao1">
				<splide :options="options">
					<splide-slide>
						<div class="lunbo-bj">
							<div>
								<img src="/img/team1.png" width="78" alt="">
								<p><span>Alex</span><span>CEO</span></p>
							</div>
							<p class="p11">Hi, I am Alex, the CEO of YIJIA. I have been specialized in prop industry for over 10 years. Our purpose is to make props more realistic.</p>
						</div>
					</splide-slide>
					<splide-slide>
						<div class="lunbo-bj">
							<div>
								<img src="/img/team3.png" width="78" alt="">
								<p><span>Lynn</span><span>Vice President</span></p>
							</div>
							<p class="p11">Hello,I am Lynn. I have been working here for 8 years.I have professional management knowledge and always get along well with my staffs.</p>
						</div>
					</splide-slide>
					<splide-slide>
						<div class="lunbo-bj">
							<div>
								<img src="/img/team2.png" width="78" alt="">
								<p><span>Lucy</span><span>Sales Manager</span></p>
							</div>
							<p class="p11">My name is Lucy. I have worked in this industry for 6 years. I has expanded our business to  North America, Africa, and Europe.</p>
						</div>
					</splide-slide>
					<splide-slide>
						<div class="lunbo-bj">
							<div>
								<img src="/img/team4.png" width="78" alt="">
								<p><span>Athena</span><span>R&D Manager</span></p>
							</div>
							<p class="p11">I am Athena. Our team have more than 10 years of research and development experience. We have advanced technology to provide you with high-quality products.</p>
						</div>
					</splide-slide>
				</splide>
			</div>
			<div class="xuexiao2">
				<splide :options="options2">
					<splide-slide>
						<div class="lunbo-bj">
							<div>
								<img src="/img/team1.png" width="78" alt="">
								<p><span>Alex</span><span>CEO</span></p>
							</div>
							<p class="p11">Hi, I am Alex, the CEO of YIJIA. I have been specialized in prop industry for over 10 years. Our purpose is to make props more realistic.</p>
						</div>
					</splide-slide>
					<splide-slide>
						<div class="lunbo-bj">
							<div>
								<img src="/img/team3.png" width="78" alt="">
								<p><span>Lynn</span><span>Vice President</span></p>
							</div>
							<p class="p11">Hello,I am Lynn. I have been working here for 8 years.I have professional management knowledge and always get along well with my staffs.</p>
						</div>
					</splide-slide>
					<splide-slide>
						<div class="lunbo-bj">
							<div>
								<img src="/img/team2.png" width="78" alt="">
								<p><span>Lucy</span><span>Sales Manager</span></p>
							</div>
							<p class="p11">My name is Lucy. I have worked in this industry for 6 years. I has expanded our business to  North America, Africa, and Europe.</p>
						</div>
					</splide-slide>
					<splide-slide>
						<div class="lunbo-bj">
							<div>
								<img src="/img/team4.png" width="78" alt="">
								<p><span>Athena</span><span>R&D Manager</span></p>
							</div>
							<p class="p11">I am Athena. Our team have more than 10 years of research and development experience. We have advanced technology to provide you with high-quality products.</p>
						</div>
					</splide-slide>
				</splide>
			</div>
			<div class="xuexiao3">
				<splide :options="options3">
					<splide-slide>
						<div class="lunbo-bj">
							<div>
								<img src="/img/team1.png" width="78" alt="">
								<p><span>Alex</span><span>CEO</span></p>
							</div>
							<p class="p11">Hi, I am Alex, the CEO of YIJIA. I have been specialized in prop industry for over 10 years. Our purpose is to make props more realistic.</p>
						</div>
					</splide-slide>
					<splide-slide>
						<div class="lunbo-bj">
							<div>
								<img src="/img/team3.png" width="78" alt="">
								<p><span>Lynn</span><span>Vice President</span></p>
							</div>
							<p class="p11">Hello,I am Lynn. I have been working here for 8 years.I have professional management knowledge and always get along well with my staffs.</p>
						</div>
					</splide-slide>
					<splide-slide>
						<div class="lunbo-bj">
							<div>
								<img src="/img/team2.png" width="78" alt="">
								<p><span>Lucy</span><span>Sales Manager</span></p>
							</div>
							<p class="p11">My name is Lucy. I have worked in this industry for 6 years. I has expanded our business to  North America, Africa, and Europe.</p>
						</div>
					</splide-slide>
					<splide-slide>
						<div class="lunbo-bj">
							<div>
								<img src="/img/team4.png" width="78" alt="">
								<p><span>Athena</span><span>R&D Manager</span></p>
							</div>
							<p class="p11">I am Athena. Our team have more than 10 years of research and development experience. We have advanced technology to provide you with high-quality products.</p>
						</div>
					</splide-slide>
				</splide>
			</div>
		</div>
		<div class="factory">
			<p class="biaoti">OUR  Factory</p>
			<div class="factory-list">
				<div class="factory-list-l">
					<div>
						<p>Factory</p>
						<p>Our modern fatory improves the efficiency of prop production.</p>
					</div>
					<div><img src="/img/fact1.png" width="100%" alt=""></div>
					<div><img src="/img/fact2.png" width="100%" alt=""></div>
					<div>
						<p>Experience</p>
						<p>YIJIA has rich experience in prop business and is a specialist of prop provider in marketing. </p>
					</div>
				</div>
				<div class="factory-list-l">
					<div>
						<p>EQUIPMENT</p>
						<p>Our high quality equipment guarantees superior prop products.</p>
					</div>
					<div><img src="/img/fact3.png" width="100%" alt=""></div>
					<div><img src="/img/fact4.png" width="100%" alt=""></div>
					<div>
						<p>Efficiency</p>
						<p>Clear division of labor in multiple departments ensures efficient R&D development and production..</p>
					</div>
				</div>
			</div>
		</div>

		<div class="ts-foot"></div>
		<Right></Right>
	</div>
</template>

<script>
	import Right from "../components/Right.vue"
	
	export default {
		name: 'Company',
		components: {
		Right
		},
		data() {
			return {
				options: {
					rewind: true,
					autoplay: true,
					interval: 2000,
					type: 'loop',
					padding: {
						right: '350px',
						left: '350px',
					},
					// autoWidth:true,
					// SplideWidth:250,
					perPage: 2,
					perMove: 1,
					arrows: false,
					// pagination: false,
					pauseOnHover: true
				},
				options2: {
					rewind: true,
					autoplay: true,
					interval: 2000,
					type: 'loop',
					padding: {
						right: '350px',
						left: '350px',
					},
					// autoWidth:true,
					// SplideWidth:250,
					perPage: 1,
					perMove: 1,
					arrows: false,
					// pagination: false,
					pauseOnHover: true
				},
				options3: {
					rewind: true,
					autoplay: true,
					interval: 2000,
					type: 'loop',
					
					// autoWidth:true,
					// SplideWidth:250,
					perPage: 1,
					perMove: 1,
					arrows: false,
					// pagination: false,
					pauseOnHover: true
				},
			}
		}
	}
</script>

<style scoped>
	.company-team>>>.splide__pagination{
		bottom: -40px;
	}
	.company-team>>>.splide__pagination__page{
		width: 15px;
		height: 15px;
		background-color: unset;
		border: #0088FC solid 2px;
	}
	.company-team>>>.splide__pagination__page.is-active{
		transform: scale(1);
		background-color: #0088FC;
	}
	@import url("../assets/css/style.css");
</style>
