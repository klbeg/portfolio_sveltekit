<script lang="ts">
	import '../app.css';
	import Header from '../Components/Header.svelte';
	import { colors } from '../globalColors';

	const purple: string = colors.purple;
	const orange: string = colors.orange;
	const white: string = colors.white;
</script>

<div class="bg-purple text-white min-h-screen" style="--theme-orange: {orange};">
	<Header />
	<slot />
</div>

<style>
	* {
		font-family: 'Montserrat', sans-serif;
	}
	:global(p) {
		line-height: 200%;
		font-size: 18px;
	}
	:global(.break) {
		border-bottom: 2px solid var(--theme-orange);
		width: 295px;
		padding: 3px 0;
	}
	:global(.content-container) {
		padding: 25px 0;
		flex-direction: column;
		align-items: flex-start;
		width: 295px;
	}
</style>
