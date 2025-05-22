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
			A front-end-focused Software Engineer with 3 years of professional experience. A skilled React
			developer with expertise in both JavaScript and TypeScript. Specializes in solving complex
			problems with well-tested, bug-free code. Utilizes over a decade of customer-oriented
			experience to collaborate effectively across both technical and non-technical teams.
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
