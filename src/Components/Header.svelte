<script lang="ts">
	import NavBar from './NavBar.svelte';
	import NavToggle from './NavToggle.svelte';

	let showNav: boolean = false;
	function toggleNav(): void {
		const btn = document.getElementsByClassName('menu-btn');
		!showNav ? (showNav = true) : (showNav = false);
	}
</script>

<header>
	<div class="logo-container">
		<h1>KEVIN BEGIN</h1>
		<div class="break" />
		<p>Full Stack Web Developer</p>
	</div>
	<NavToggle {showNav} {toggleNav} />
	<NavBar {showNav} {toggleNav} />
	<div class="break" />
</header>

<style>
	header {
		padding: 50px 0;
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.logo-container {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	h1 {
		font-size: 40px;
		font-family: 'Montserrat', sans-serif;
		font-weight: 600;
	}
	header p {
		font-family: 'Catamaran', sans-serif;
		font-size: 25px;
		font-weight: 200;
	}
	.break {
		border-bottom: 2px solid var(--theme-orange);
		width: 295px;
		height: 0;
		padding: 3px 0;
	}
</style>
