<script>
	import Header from '../Components/Header.svelte';
</script>

<div class="app-container">
	<Header />
	<slot />
</div>

<style>
	.app-container {
		background-color: #240046;
		color: #fff;
		box-sizing: border-box;
		font-family: 'Montserrat', sans-serif;
		width: 100vw;
		height: 100vh;
	}
</style>
