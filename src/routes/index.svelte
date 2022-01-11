<script lang="ts">
	import WorkPreview from '../Components/WorkPreview.svelte';
	import { colors } from '../globalColors';

	const orange = colors.orange;
</script>

<div class="flex-center" style="--theme-orange: {orange}">
	<div class="content-container">
		<h2>Hi, I'm Kevin!</h2>
		<p>
			JavaScript full stack developer, musician, and witty team player seeking fulltime employment.
		</p>
	</div>
	<div class="content-container">
		<h1>My Work:</h1>
		<!-- import projects array.  Map projects and pass in project info as prop -->
		<WorkPreview />
	</div>
</div>

<style>
	h1 {
		font-family: 'Montserrat', sans-serif;
		color: var(--theme-orange);
	}
	h2 {
		padding-bottom: 50px;
		font-size: 25px;
	}
</style>
