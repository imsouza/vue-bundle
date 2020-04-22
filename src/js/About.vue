<template>
	<div>
		<span>About: {{ msg }}</span>
	</div>
</template>

<script>
	export default {
		data () {
			return {
				msg: 'about'
			}
		}
	}
</script>

<style>
	span {
		color: green;
	}
</style>