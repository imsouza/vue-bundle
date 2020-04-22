<template>
	<div>
		<span>Posts: {{ msg }}</span>
	</div>
</template>

<script>
	export default {
		data () {
			return {
				msg: 'posts'
			}
		}
	}
</script>

<style>
	span {
		color: green;
	}
</style>