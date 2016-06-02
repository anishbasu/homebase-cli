<template>
<div class="login-view">
	<div class="row">
		<div class="one-third column"></div>
		<div class="one-third column">
			<div id="login">
				<div class="row">
					<h3>Login</h3>
				</div>
				<div class="row">
					<input type="text" v-model="email" placeholder="email">
				</div>
				<div class="row">
					<input type="password" v-model="password" placeholder="password">
				</div>
				<div class="row">
					<button v-on:click="sign_in">Submit</button>
					<span class="space"></span><a href="#/signup">Create Account</a>
				</div>
			</div>
		</div>
		<div class="one-third column"></div>
	</div>
</div>
</template>

<script type="text/javascript">
	export default{
		name: 'LoginView',
		data(){
			return {
				email: '',
				password: ''
			}
		},
		route: {
			data() {
				document.title = 'HomeBase | Login'
			}
		},
		methods: {
			sign_in (event) {
				this.$http.post('http://162.243.73.139:80/homebase/signin/', {email :this.email, password: this.password})
				.then(//Success
					function(response){
					this.$router.go('/dashboard/' + this.email);
				},
				function (response){
					alert('Cannot Log In!');
				});
			}
		}
	}
</script>

<style type="text/css">
#login h3{
	text-align: center;
}
#login input{
	margin: auto;
	width: 100%;
	border: 10%;
}

.space{
	min-width: 10px;
	display: inline-block;
}
</style>