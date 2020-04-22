<template>
	<div>
		<span>User: {{ msg }}</span>
		<span>ID: {{ $route.params.id }}</span>
		<hr>
		<router-view></router-view>
	</div>
</template>

<script>
	export default {
		data () {
			return {
				msg: 'user'
			}
		}
	}
</script>

<style>
	span {
		color: green;
	}
</style>