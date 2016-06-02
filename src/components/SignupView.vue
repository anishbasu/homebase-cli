<template>
<div class="signup-view">
	<div class="row">
		<div class="one-third column"></div>
		<div class="one-third column">
			<div id="signup">
				<div class="row">
					<h3>Create Account</h3>
				</div>
				<div class="row">
					<input type="text" v-model="name" placeholder="username">
				</div>
				<div class="row">
					<input type="text" v-model="email" placeholder="email">
				</div>
				<div class="row">
					<input type="password" v-model="password" placeholder="password (Use atleast 1 uppercase, 1 lowercase letter and 1 number)">
				</div>
				<div class="row">
					<input type="password" v-model="confirm_password" placeholder="confirm password">
				</div>
				<div class="row">
					<input type="text" v-model="pic_url" placeholder="picture url(optional)">
				</div>
				<div class="row">
					<button v-on:click="sign_up">Submit</button>
					<span class="space"></span><a href="#/login">Already Registered? Sign In</a>
				</div>
			</div>
		</div>
		<div class="one-third column"></div>
	</div>
</div>
</template>

<script type="text/javascript">
	export default{
		name: 'SignupView',
		data(){
			return{ 
				name: '',
				email: '',
				password: '',
				confirm_password: '',
				pic_url: '',
				emailRegex: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
				passwordRegex: /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/
			}
		},
		methods: {
			sign_up(event){
				if(this.password !== this.confirm_password){
					alert('Passwords do not match.');
				}
				if(this.pic_url === ''){
					this.pic_url.$set = 'http://placehold.it/150x150'
				}
				if(this.emailRegex.test(this.email) && this.passwordRegex.test(this.password)){
					this.$http.post('http://162.243.73.139:80/homebase/register/', {name: this.name, email :this.email, password: this.password, pic_url: this.pic_url})
					.then(
						function(response){
							this.$router.go('/login');
						},
						function(response){
							alert('I fucked up');
						})
				} else {
					alert('You fucked up!');
				}
			}
		}
	}
</script>

<style type="text/css">
#signup h3{
	text-align: center;
}
#signup input{
	margin: auto;
	width: 100%;
	border: 10%;
}

.space{
	min-width: 10px;
	display: inline-block;
}
</style>