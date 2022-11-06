<script lang="ts">
	import WorkPreview from "../Components/WorkPreview.svelte";
	import Introduction from "../Components/Introduction.svelte";
	import { meetApp, movieCraze, movieCrazeAngular, pokedex } from "../data/case-studies/index";

	const projects = [meetApp, movieCraze, movieCrazeAngular, pokedex];
</script>

<div class="flex flex-col items-center">
	<Introduction />
	<div class="content-container">
		<h1 class="text-orange text-2xl md:text-white">My Work:</h1>

		{#each projects as project}
			<WorkPreview {project} />
		{/each}
	</div>
</div>
