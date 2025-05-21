<script context="module">
	import Button from "../Components/Button.svelte"
	import Resume from "$lib/pdfs/resume.pdf"

	const skills = [
		"Angular",
		"API Integration",
		"AWS",
		"Axios",
		"Bootstrap",
		"CSS",
		"GitHub",
		"Google Cloud Platform",
		"HTML",
		"JavaScript",
		"TypeScript",
		"Node.js",
		"MongoDb",
		"Mongoose",
		"Material UI",
		"Python",
		"React",
		"Redux",
		"Svelte",
		"Tailwind"
	]
</script>

<div class="pb-4 pt-2 mt-2">
	<h1 class="text-orange text-2xl">About:</h1>
	<div class="content-container">
		<p>
			A front end focused Software Engineer with 3 years of professional experience. An expert React
			developer using both JavaScript and TypeScript who specializes solving complex problems with
			well tested bug free code. Leverages communication skills refined over more than a decade in
			customer oriented roles to collaborate across teams in both technical and non-technical
			capacities.
		</p>
	</div>
</div>
<div class="content-container">
	<h2 class="text-orange text-2xl">Skills</h2>
	<div class="content-container">
		<ul class="ml-6 my-4 list-disc columns-2">
			{#each skills as skill}
				<li class="text-l">{skill}</li>
			{/each}
		</ul>
	</div>

	<a download="resume.pdf" target="_blank" href={Resume}>
		<Button buttonText={"Download Resume"} />
	</a>
</div>

<style>
	ul {
		margin-left: 20px;
	}
	li {
		font-family: "Catamaran", sans-serif;
	}
</style>
