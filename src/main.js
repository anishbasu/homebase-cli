import Vue from 'vue'
import Router from 'vue-router'
import App from './components/App.vue'
import LoginView from './components/LoginView.vue'
import DashboardView from './components/DashboardView.vue'
import SignupView from './components/SignupView.vue'

require("./css/skeleton.css")
Vue.use(require('vue-resource'))
Vue.use(Router)
Vue.use(require('vue-drag-and-drop'))
Vue.http.options.emulateJSON = true;
var router = new Router()

router.map({
	'/login': {
		component: LoginView
	},
	'/dashboard/:name': {
		component: DashboardView
	},
	'/signup': {
		component: SignupView
	}
})

router.beforeEach(function(){
	window.scrollTo(0, 0)
})

router.redirect({
	'*': '/login'
})

router.start(App, 'app')

