<script lang="ts">
	import WorkPreview from '../Components/WorkPreview.svelte';
	import Introduction from '../Components/Introduction.svelte';
</script>

<div class="flex flex-col items-center">
	<Introduction />
	<div class="content-container">
		<h1 class="text-orange text-2xl md:text-white">My Work:</h1>
		<!-- import projects array.  Map projects and pass in project info as prop -->
		<WorkPreview />
		<WorkPreview />
	</div>
</div>
