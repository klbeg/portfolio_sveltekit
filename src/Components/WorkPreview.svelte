<script lang="ts">
	import type CaseStudy from "../types/CaseStudy"
	import Link from "./Link.svelte"
	export let project: CaseStudy
</script>

<div class="content-container">
	<!-- <img
		class="my-5 w-52 rounded-2xl"
		src="https://klbeg.github.io/portfolio-website/img/MovieCraze-preview.jpg"
		alt="Movie Craze logo. Orange text on a dark blue background."
	/> -->
	<h1 class="text-orange text-2xl py-6 uppercase">{project.title}</h1>
	<p class="pb-6">{project.preview}</p>
	<div class="pt-4">
		<Link buttonText="View More" href="/caseStudy/{project.url}" />
	</div>
</div>

<!-- <style>
	img {
		box-shadow: 0 3px 3px rgba(255, 255, 255, 0.295);
	}
</style> -->
