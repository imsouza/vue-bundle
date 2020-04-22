import App from './App.vue';
import Home from './Home.vue';
import About from './About.vue';
import User from './User.vue';
import NotFound from './NotFound.vue';
import UserProfile from './UserProfile.vue';
import UserPosts from './UserPosts.vue';

const router = new VueRouter({
	routes: [
		{ path: '/', component:Home },
		{ path: '/about', component:About },
		{ path: '/user/:id', component:User, children: [
			{ path:'profile', component:UserProfile },	// /user/1/profile
			{ path:'posts', component:UserPosts },			// /user/2/posts
		]},
		{ path: '*', component:NotFound },
	]
});

new Vue ({
	el: '#app',
	router: router,
	render: h => h(App)
});