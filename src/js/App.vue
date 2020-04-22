<script>
	//import Test from './Test.vue';

	export default {
		data () {
			return {
				msg: 'Hello, world!'
			}
		},
		components: {
			//Test
		}
	}
</script>

<template>
	<div id="app">
		<h1>{{ msg }}</h1>
		<!--<test/>-->
		<hr>
			<router-link to="/">Home</router-link>
			<router-link to="/about">About</router-link>
			<router-link to="/contact">Contact</router-link>
		<hr>
		
		<router-view></router-view>
	</div>
</template>

<style>
	h1 {
		background-color: #1c1c1c;
		color: crimson;
	}
</style>