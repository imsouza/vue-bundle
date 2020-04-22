<template>
	<div>
		<span>Page not found!  {{ msg }}</span>
	</div>
</template>

<script>
	export default {
		data () {
			return {
				msg: '404'
			}
		}
	}
</script>

<style>
	span {
		color: crimson;
	}
</style>