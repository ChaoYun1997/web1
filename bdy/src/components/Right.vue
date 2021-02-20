<template>
	<div class="right">
		<div class="right-top" @click="fn" style="box-shadow: 0px 0px 3px #969696; width: 60px; height: 60px; border-radius: 50%;">
			<img :src="anniu" width="100%" alt="" style="border-radius: 12px;">
		</div>
		<div class="right-boot" :class="dianji">
			<img src="../../public/img/logo.png" alt="">
			<p class="right-miaoshu">Hi, We are here to answer your questions.
				You can ask us anything so feel free
				to contact us anytime.</p>
			<div>
				<form>
					<p>Name<span style="color: #AB0409;">*</span></p>
					<input type="text" v-model="rightformData.name">
					<p>Email<span style="color: #AB0409;">*</span></p>
					<input type="text" v-model="rightformData.email">
					<a class="smdx" href="javascript:void(0)" @click="tjiao">Send</a>
				</form>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'Right',
		data() {
			return {
				rightformData: {
					"name": "",
					"jobTitle": "",
					"companyName": "",
					"email": "",
					"phoneNumber": "",
					"message": ""
				},
				anniu: './img/niuniu1.png',
				dianji: ''
			}
		},
		methods: {
			tjiao(){
				// 	/* json格式提交： */
					let rightformData = JSON.stringify(this.rightformData);
				
				// 	/* formData格式提交： */
				// 	// let formData = new FormData();
				// 	// for (var key in this.formMess) {
				// 	// 	formData.append(key, this.formMess[key]);
				// 	// }
				
					this.$axios({
						method: "post",
						url: "/api/pushContact",
						headers: {
							// "Content-Type": "multipart/form-data",
							"Content-Type": "application/json"
						},
						withCredentials: true,
						data: rightformData
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
				
			},
			fn() {
				if (this.dianji == '') {
					this.dianji = 'active'
					this.anniu = './img/niuniu2.png'
				} else {
					this.dianji = ''
					this.anniu = './img/niuniu1.png'
				}

			}
		}
	}
</script>

<style lang="less" scoped>
	@import url("../assets/css/style.css");
	.smdx:hover{
		background: linear-gradient(to right, #426cf5 0%, #38bcf9 100%);
	}
</style>
