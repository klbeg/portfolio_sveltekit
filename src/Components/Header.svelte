<script lang="ts">
	import NavBar from './NavBar.svelte';

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
	<button class={!showNav ? 'menu-btn' : 'menu-btn open'} on:click={toggleNav}>
		<div class="menu-btn__burger" />
	</button>
	<div>
		<NavBar {showNav} {toggleNav} />
	</div>
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
		border-bottom: 2px solid #ff9e00;
		width: 281px;
		height: 0;
		padding: 3px 0;
	}
	.menu-btn {
		position: relative;
		display: flex;
		justify-content: center;
		align-items: center;
		height: 50px;
		width: 50px;
		margin: 30px 0;
		background-color: transparent;
		border: none;
	}
	.menu-btn:hover {
		cursor: pointer;
	}
	.menu-btn__burger {
		width: 50px;
		height: 4px;
		background: #fff;
		border-radius: 5px;
		transition: all 0.5s ease-in-out;
	}
	.menu-btn__burger::before,
	.menu-btn__burger::after {
		content: '';
		position: absolute;
		width: 50px;
		height: 4px;
		background: #fff;
		border-radius: 5px;
		transition: all 0.5s ease-in-out;
	}
	.menu-btn__burger::before {
		transform: translateY(-16px) translateX(-25px);
	}
	.menu-btn__burger::after {
		transform: translateY(16px) translateX(-25px);
	}
	/* ANIMATION */
	.menu-btn.open .menu-btn__burger {
		transform: translateX(-50px);
		background: transparent;
	}
	.menu-btn.open .menu-btn__burger::before {
		transform: rotate(45deg) translate(16px, -16px);
		background-color: #ff9e00;
	}
	.menu-btn.open .menu-btn__burger::after {
		transform: rotate(-45deg) translate(16px, 16px);
		background-color: #ff9e00;
	}
	.hide-nav {
		display: none;
	}
</style>
