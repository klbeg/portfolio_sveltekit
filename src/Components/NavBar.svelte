<script lang="ts">
	export let showNav;
	export let toggleNav;

	const links: string[][] = [
		['home', '/'],
		['about', '/about'],
		['contact', '/contact']
	];
</script>

<nav class={!showNav && 'hide'}>
	<ul class="flex flex-col">
		{#each links as link}
			<a class="uppercase text-xl" href={link[1]} on:click={toggleNav}>
				<li class="py-2 flex justify-center my-0.5 w-36 text-xl">{link[0]}</li>
			</a>
		{/each}
	</ul>
</nav>

<style>
	nav {
		height: 139px;
		overflow: hidden;
		transition: all 0.5s ease-in-out;
	}
	.hide {
		height: 0;
	}
	ul li {
		border: 1px solid transparent;
		border-radius: 5px;
		transition: all 0.5s ease-in-out;
	}
	ul li:hover {
		cursor: pointer;
		border: 1px solid #fff;
		background-color: #1d0036;
	}
</style>
