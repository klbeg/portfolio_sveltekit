<script lang="ts">
	import WorkPreview from "../Components/WorkPreview.svelte"
	import Introduction from "../Components/Introduction.svelte"
	import { portfolio } from "../lib/case-studies/index"

	const projects = [portfolio]
</script>

<Introduction />
<div class="content-container">
	<h1 class="text-white text-2xl">My Work:</h1>

	{#each projects as project}
		<WorkPreview {project} />
	{/each}
</div>
