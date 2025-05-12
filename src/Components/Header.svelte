<script lang="ts">
	import NavBar from "./NavBar.svelte"
	import NavToggle from "./NavToggle.svelte"

	let showNav: boolean = false
	function toggleNav(): void {
		const btn = document.getElementsByClassName("menu-btn")
		!showNav ? (showNav = true) : (showNav = false)
	}
</script>

<header class="py-8 flex flex-col items-center ">
	<div class="flex flex-col items-center">
		<h1>KEVIN BEGIN</h1>
		<div class="break" />
		<p class="font-extralight">Full Stack Web Developer</p>
	</div>
	<NavToggle {showNav} {toggleNav} />
	<NavBar {showNav} {toggleNav} />
	<div class="break" />
</header>

<style>
	h1 {
		font-size: 40px;
		font-family: "Montserrat", sans-serif;
	}
	header p {
		font-family: "Catamaran", sans-serif;
		font-size: 25px;
	}
</style>
