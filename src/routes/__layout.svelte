<script lang="ts">
	import "../app.css"
	import Header from "../Components/Header.svelte"
	import Footer from "../Components/Footer.svelte"
	import { colors } from "../globalColors"

	const purple: string = colors.purple
	const darkPurple: string = colors.darkPurple
	const orange: string = colors.orange
	const white: string = colors.white
</script>

<div
	class="bg-purple text-white min-h-screen"
	style="--theme-orange: {orange}; --theme-purple: {purple}; --theme-dark-purple: {darkPurple}; --theme-white: {white};"
>
	<Header />
	<div class="flex flex-col items-center">
		<slot />
	</div>
	<Footer />
</div>

<style>
	* {
		font-family: "Montserrat", sans-serif;
	}
	:global(p) {
		line-height: 200%;
		font-size: 18px;
	}
	:global(.catamaran) {
		font-family: "Catamaran", sans-serif;
	}
	:global(.montserrat) {
		font-family: "Montserrat", sans-serif;
	}
	:global(.break) {
		border-bottom: 2px solid var(--theme-orange);
		width: 18rem;
		padding: 3px 0;
	}
	:global(.content-container) {
		padding: 25px 0;
		flex-direction: column;
		align-items: flex-start;
		width: 18rem;
	}
	/* Responsive Design */
	@media (min-width: 516px) {
		:global(.content-container),
		:global(.break) {
			width: 70vw;
		}
	}

	@media (min-width: 686px) {
		:global(.content-container),
		:global(.break) {
			width: 42rem;
		}
	}
</style>
