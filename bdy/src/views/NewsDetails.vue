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
		<div class="newszw">
			<div class="newsimg">
				<img :src="'http://cdn.fish-cloud.com/'+newsDetails.articleImg" alt="">
			</div>
			<p class="news-biaoti">
				{{newsDetails.name}}
			</p>
			<!--  -->
			<div v-if="newsDetails.articleContent == '<p>a</p>'">
				<p class="news1">
					In real life, the fakery sometimes takes a tangible form. Say, if you're in a furniture store and trying to buy a
					desk, you might want an idea of what a computer might look like on that desk. But 'fakery' might mean the computer
					on that desk isn't an iMac—and the entertainment center won't be sporting a real TV.
				</p>
				<div class="yinghao">
					<img src="/img/yinghao.png" alt="">
					<p>This leads me to an offbeat question: Who makes those?</p>
				</div>
				<p class="news1">
					Let's dig into the story behind the fake electronics you see in furniture stores.
					During the 1980s, a number of companies showed up in the suburbs of Chicago, each promising to fill a gap in the
					furniture showrooms of the world. West Chicago's Box Props, which kicked off the trend in 1981, used cardboard to
					create its made-up television sets and computers, and initially had artists draw fake facades on the side.
					Northbrook's Proptronics, a firm founded three years later, added plastic and a degree of realism to the equation.
					And Crystal Lake's Props by IDM innovated by making its large CRTs entirely out of plastic. Despite the fact that
					their model was very specific, it was large enough to support all three companies for decades. </p>
				<div class="newsliimg">
					<img src="/img/Bolg%20-%20Real%20industry%20-%20content1.jpg" alt="">
					<img src="/img/Bolg%20-%20Real%20industry%20-%20content2.jpg" alt="">
					<img src="/img/Bolg%20-%20Real%20industry%20-%20content3.jpg" alt="">
				</div>
				<p class="news1">
					These days, however, you won't find any of them online, though a successor of sorts to Props by IDM, Props
					America,
					YIJIA, TurboProps, ePROP, and Prop TVs remain active today. It can be pretty hard to miss these companies if you
					search for information on prop electronics in Google or elsewhere. The decoration prop industry in China has grown
					fast over recent years. Today most of prop manufacturers' clients are home stagers, home builders, and retailers.
					Although they still work with furniture stores and manufacturers, the furniture sales environment has changed
					drastically with e-commerce. Nowadays, we buy more of our furniture online, from sites like Wayfair and Amazon.
					That means that furniture stores aren't quite as active on the showroom design front. In a way, that gradual shift
					sort of makes sense. Increasingly, these electronics are less the window dressing and more the medium from which
					we
					view the fakery, whether on television or via a website, the marketing is increasingly happening through a screen.
					And where's that screen located? In your home, of course. Unlike furniture, we usually want to see our houses
					before we move into them, which might just ensure that there's a market for prop electronics well into the future.
				</p>
			</div>
			<!--  -->
			<div v-if="newsDetails.articleContent == '<p>b</p>'">
				<p class="news1">
					Wandering around many websites providing props can be weirdly inspiring, in part because of the wide array of
					products. The pseudo-interfaces on the iPad-mimicking tablets clearly were thought through.
				</p>
				<!-- <div class="yinghao">
					<img src="/img/yinghao.png" alt="">
					<p>This leads me to an offbeat question: Who makes those?</p>
				</div> -->
				<p class="news1">
					A lot of work has done into creating products that look sort of like the real thing, but not exactly. If you
					walked into a showroom and saw them, you might even be briefly fooled.These prop devices, despite not actually
					being functional, are very much not cheap. That's because it still has to look the part, and looking the part
					means that some functionality is required. The laptops need to have realistic-looking keyboards; the TV sets need
					to be able to mount onto walls. </p>
				<div class="newsliimg">
					<img src="/img/Bolg%20-%20What%20goes-%20content1.jpg" alt="">
					<img src="/img/Bolg%20-%20What%20goes-%20content2.jpg" alt="">
					<img src="/img/Bolg%20-%20What%20goes-%20content3.jpg" alt="">
				</div>
				<p class="news1">
					Looking back at designs being created by some companies tells an interesting story of technological innovation.
					Peering at a 2012 version of the Props by IDM site brings up elaborate examples of fakery, including an iPod
					plugged into a speaker and a selection of fake DVDs with knockoff names like Boy Story, Claws, and American Sky.
					Before the screens were flat, you were also likely to find prop sets built around a CRT—something that Proptronics
					sold as late as 2006, along with cassette decks and other home-theater niceties. And sometimes, the props don't
					even need to be electronic to be effective. The 1988 Tribune article also makes mention of Box Props producing a
					set of fake encyclopedias, at a time when encyclopedias were still sold in physical form. <br>
					Nowadays, prop
					manufacturers have diversified their target markets over the years. The products have been used in a variety of
					ways—with fake foods showing up at weddings and corporate events, and its TV screens and laptops sometimes even
					showing up during TV shows and music videos. That you can't think of an obvious example just highlights how
					effective they are.
				</p>
			</div>
			<!--  -->
			<div v-if="newsDetails.articleContent == '<p>c</p>'">
				<p class="news1">
					When it comes to home staging, there are a number of items that must be removed from the home such as personal
					photos, collectibles and of course, excess or bulky furniture. However, there are certain props that really
					enhance the look of the home regardless of the age or decor style, which are TV props, laptop props, AIO props and
					book props.
				</p>
				<!-- <div class="yinghao">
					<img src="/img/yinghao.png" alt="">
					<p>This leads me to an offbeat question: Who makes those?</p>
				</div> -->
				<p class="news1">
					Well-designed props can add memorable details and welcoming feelings to buyers and just help to set the scene and
					really make your photos stand out from the other houses for sale.</p>
				<div class="newsliimg">
					<img src="/img/Blog%20-%20Customize%20props%20-%20content1.jpg" alt="">
					<img src="/img/Blog%20-%20Customize%20props%20-%20content2.jpg" alt="">
					<img src="/img/Blog%20-%20Customize%20props%20-%20content3.jpg" alt="">
				</div>
				<p class="news1">
					A flat-screen TV, mounted to the wall in a size appropriate for the space, can function as a piece of art in a
					living room or other common area. A TV is "the modern-day family hearth", so use it to your advantage. Set a TV
					prop with customized screen. Nature images can be a good idea. Don't include pictures of people, which can be
					distracting to buyers. And keep TVs out of bedrooms. Whats' more? Setting a laptop prop or an AIO prop on the
					desk in the study can help leave an deep impression on homebuyers. The layout of study can be more exquisite
					because of the laptop prop or AIO prop. <br>
					In addition, Too many books in a book case or piles of them in office spaces and bedroom can look junky and
					sloppy. However, sets of hardcover books can really complete the look of shelves or stacked on a coffee table.
					Check out garage sales or used book stores for affordable options and be sure to check the condition of the spine
					to make sure they don't have a musty smell. Stay away from controversial topics and titles. We always look of
					books that are medium to large in scale, hard cover and in good shape. Books with colorful covers can well
					decorate a bookcase or coffee table. <br>
					Bookcases are great for book storage. However, when it comes to staging, you want every space to feel light and
					airy. Full bookcases add a lot of bulk and heaviness to a room, so do a pre-pack of you books and leave your
					nicest ones on display. Stack them creatively, play with color and add some simple accessories.
				</p>
			</div>
			<!--  -->
			<div v-if="newsDetails.articleContent == '<p>d</p>'">
				<p class="news1">
					Electronic props play a vital role in decorating your home and furniture stores. When there is a laptop prop in
					the kid’s room, it adds that “Model Home” feel to the space. Home Builders have used electronic props for years
					because they are proven to have great impact on potential buyers. Homebuyers need to be excited and wowed when
					touring a home. Electronic Props are a powerful real estate staging tool and are proven to be extremely affective.
				</p>
				<div class="yinghao">
					<img src="/img/yinghao.png" alt="">
					<p>Do they work?</p>
				</div>
				<p class="news1">
					Ask major home builders that question and they are sure to say "Yes they do". Electronic props are even used in
					furniture stores like "IKEA" to help sell their home furnishings and accessories. Electronic props finish a space
					and give the potential homeowner a visual of how they would live in a home. Superior customized electronic props
					are available on YIJIA website. You can even get your logo printed at wherever you want.</p>
				<div class="newsliimg">
					<img src="/img/Blog%20-%20The%20importance%20-%20content1.jpg" alt="">
					<img src="/img/Blog%20-%20The%20importance%20-%20content2.jpg" alt="">
					<img src="/img/Blog%20-%20The%20importance%20-%20content3.jpg" alt="">
				</div>
				<p class="news1">
					Besides, props in films can also make a difference. They're a vital part of film, TV, and theatre. Sometimes it
					can be expensive to set up a scene when shooting a film or TV series. However, props like TVs, laptops and books
					can help reduce costs as well as make a scene feel more authentic or help actors play their role more adequately.
					Looking for props in your next theatre production or film? YIJIA can provide you with superior lifelike props.
				</p>
			</div>
			<div class="news-share">
				<div>
					<p>share to:</p>
					<ShareNetwork network="facebook" :url="'http://www.dummylcdtv.com/Details?queryId='+ newsDetails.id +''" href="javascript:void(0);">
						<img src="/img/share2.jpg" width="35" alt="">
					</ShareNetwork>
					<ShareNetwork network="Twitter" :url="'http://www.dummylcdtv.com/Details?queryId='+ newsDetails.id +''" href="javascript:void(0);">
						<img src="/img/share1.jpg" width="35" alt="">
					</ShareNetwork>
					<ShareNetwork network="LinkedIn" :url="'http://www.dummylcdtv.com/Details?queryId='+ newsDetails.id +''" href="javascript:void(0);">
						<img src="/img/share3.png" width="35" alt="">
					</ShareNetwork>
				</div>

			</div>
			<div class="newsxian"></div>
		</div>
		<div class="ts-foot"></div>
		<Right></Right>
	</div>
</template>

<script>
	import Right from "../components/Right.vue"
	export default {
		name: 'NewsDetails',
		components: {
			Right
		},
		data() {
			return {
				url: '',
				smm: {
					id: ''
				},
				newsDetails: []
			}
		},
		created() {
			this.smm.id = this.$route.query.queryId;
			this.getdata()
		},
		methods: {
			getdata() {
				this.$axios.get('/api/newsDetail', {
					params: this.smm
				}).then(res => {
					this.newsDetails = res.data;
					console.log("123", this.newsDetails)
				})
			}
		}
	}
</script>

<style>
	@import url("../assets/css/style.css");
</style>
