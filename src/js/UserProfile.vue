<template>
	<div>
		<span>Profile: {{ msg }}</span>
	</div>
</template>

<script>
	export default {
		data () {
			return {
				msg: 'profile'
			}
		}
	}
</script>

<style>
	span {
		color: green;
	}
</style>