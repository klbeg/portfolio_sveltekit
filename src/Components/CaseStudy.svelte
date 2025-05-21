<script lang="ts">
	import Link from "./Link.svelte"
	const href: string = "https://github.com/klbeg/myFlix-Angular-client"
	export let project
</script>

<div class="content-container">
	<!-- <img
		class="my-5 w-52 rounded-2xl"
		src="https://klbeg.github.io/portfolio-website/img/MovieCraze-preview.jpg"
		alt="Movie Craze logo. Orange text on a dark blue background."
	/> -->

	<h1 class="text-orange text-2xl py-6 uppercase">
		{project.title}
	</h1>
	<p class="pb-6 font-light">
		{project.summary}
	</p>

	<h2 class="text-orange text-2xl py-6">Purpose and Context</h2>
	<p class="pb-6 font-light">
		{project.purpose}
	</p>

	<h2 class="text-orange text-2xl py-6">Objective</h2>
	<p class="pb-6 font-light">
		{project.objective}
	</p>

	<h2 class="text-orange text-2xl py-6">The Process</h2>

	{#each project.process as fullStep, i}
		<div class="flex justify-left items-center">
			<span class="text-orange text-5xl py-4 pr-6 catamaran">{i + 1}.</span>
			<h2 class="text-xl py-6">{fullStep.step}</h2>
		</div>
		{#each fullStep.text as text}
			<p class="pb-6 font-light">{text}</p>
		{/each}
	{/each}

	<div class="pt-4">
		<Link buttonText="View Repository" target="__blank" {href} />
	</div>
</div>

<style>
	img {
		box-shadow: 0 3px 3px rgba(255, 255, 255, 0.295);
	}
</style>
