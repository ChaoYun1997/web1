<template>
	<div>
		<div class="pro-banner" style="background-image: url(/img/contactus.png);position: absolute;top: 0; left: 0;">
			<div class="topsa">
				<div class="topsa-l">
					<p>It's time to <br> get your props</p>
				</div>
				<div class="topsa-r">
					<span style="font-family: UbuntuL;">
						<router-link to="/">HOME</router-link>
					</span>
					<span>></span>
					<span style="font-family: UbuntuB;">
						CONTACT
					</span>
				</div>
			</div>
		</div>
		<div class="tema">
			<p class="p6">Our team</p>
			<div class="tema-list">
				<div class="tema-item">
					<img src="/img/team1.png" alt="">
					<p>ceo</p>
					<p>Shinghow</p>
					<div></div>
					<p>shinghow@dummylcdtv.com</p>
				</div>
				<div class="tema-item">
					<img src="/img/team3.png" alt="">
					<p>sales manager</p>
					<p>Anne</p>
					<div></div>
					<p>yijia-anne@dumylcdtv.com</p>
				</div>
				<div class="tema-item">
					<img src="/img/team2.png" alt="">
					<p>marketing manager</p>
					<p>Anny</p>
					<div></div>
					<p>yijia-anny@dummylcdtv.com</p>
				</div>
				<div class="tema-item">
					<img src="/img/team4.png" alt="">
					<p>R&D manager</p>
					<p>Davis</p>
					<div></div>
					<p>yijia-davis@dummylcdtv.com</p>
				</div>
			</div>
		</div>
		<div class="from-boot">
			<div class="from-boot-l">
				<p class="p7">Contact Us</p>
				<p class="p8">Hours：Monday - Friday 9:00 AM to 6:00 PM </p>
				<div class="concat-item">
					<img src="/img/youxiang.png" alt="">
					<div>
						<p>Mailbox:</p>
						<p>yijia@dummylcdtv.com</p>
					</div>
				</div>
				<div class="concat-item">
					<img src="/img/dianhua.png" alt="">
					<div>
						<p>Phone:</p>
						<p>+86-138 2449 3276</p>
					</div>
				</div>
				<div class="concat-item">
					<img src="/img/quanqiu.png" alt="">
					<div>
						<p>Addres:</p>
						<p>101 II HuangCun North RD ShiBi street PanYu GuangZhou, China</p>
					</div>
				</div>
			</div>
			
			<div class="from-boot-r">
				<p class="p9">INQUIRY</p>
				<form>
					<p>Name</p>
					<input type="text" v-model="formData.name">
					<p>Email</p>
					<input type="text" v-model="formData.email">
					<p>Message</p>
					<textarea rows="3" v-model="formData.message">
					</textarea>
					<div class="tijiao" @click="onSubmit()">send</div>
					<!-- <div onclick="return gtag_report_conversion('http://www.dummylcdtv.com/');"></div> -->
				</form>
			</div>
		</div>
		<div class="ts-foot" style="height: auto;padding-bottom: 280px;">
			<img src="/img/map.png" width="100%" alt="">
		</div>
	</div>
</template>

<script>
	export default{
		name:'Contact',
		data(){
			return{
				formData: {
					"name": "",
					"jobTitle": "",
					"companyName": "",
					"email": "",
					"phoneNumber": "",
					"message": ""
				}
			}
		},
		methods:{
			onSubmit() {
					let formData = JSON.stringify(this.formData);
					this.$axios({
						method: "post",
						url: "/api/pushContact",
						headers: {
							// "Content-Type": "multipart/form-data",
							"Content-Type": "application/json"
						},
						withCredentials: true,
						data: formData
					}).then((res) => {
						console.log(res);
						var a=res.data.code;
						if (a == 200) {
							this.$message.success(
							'Your inquire message has been successfully sent. We will contact you as soon as possible!',
							2,)
						} else {
							this.$message.error(
							'Error, Please Try again!',
							2,)
						}
					});
				}
		}
	}
</script>

<style>
	@import url("../assets/css/style.css");
</style>
