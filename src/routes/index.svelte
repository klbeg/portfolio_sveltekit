<script lang="ts">
	import WorkPreview from '../Components/WorkPreview.svelte';
</script>

<div class="flex flex-col items-center">
	<div class="content-container">
		<h2 class="text-3xl mb-10">Hi, I'm Kevin!</h2>
		<p>
			JavaScript full stack developer, musician, and witty team player seeking fulltime employment.
		</p>
	</div>
	<div class="content-container">
		<h1 class="text-orange text-2xl">My Work:</h1>
		<!-- import projects array.  Map projects and pass in project info as prop -->
		<WorkPreview />
	</div>
</div>
