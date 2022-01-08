<script lang="ts">
	import Header from '../Components/Header.svelte';
	import { colors } from '../globalColors';

	const purple: string = colors.purple;
	const white: string = colors.white;
</script>

<div class="app-container" style="--theme-purple: {purple}; --theme-white: {white};">
	<Header />
	<slot />
</div>

<style>
	.app-container {
		background-color: var(--theme-purple);
		color: var(--theme-white);
		box-sizing: border-box;
		font-family: 'Montserrat', sans-serif;
		width: 100vw;
		min-height: 100vh;
	}
	:global(p) {
		line-height: 200%;
		font-size: 20px;
	}

	:global(.content-container) {
		padding: 25px 0;
		flex-direction: column;
		justify-content: center;
		align-items: flex-start;
		width: 295px;
	}
	:global(.flex-center) {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
	}
</style>
