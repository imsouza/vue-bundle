<template>
	<div>
		<span>Home: {{ msg }}</span>
		<ul>
			<li>
				<router-link to="/user/1">User 1</router-link> -
				<router-link to="/user/1/profile">Profile</router-link> -
				<router-link to="/user/1/posts">Posts</router-link>
			</li>
			<li>
				<router-link to="/user/2">User 2</router-link>
				<router-link to="/user/2/profile">Profile</router-link> -
				<router-link to="/user/2/posts">Posts</router-link>
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		data () {
			return {
				msg: 'home'
			}
		}
	}
</script>

<style>
	span {
		color: green;
	}
</style>