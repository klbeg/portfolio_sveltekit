<script context="module">
	import { colors } from "../globalColors";
	import Button from "../Components/Button.svelte";

	const orange = colors.orange;
	const skills = [
		"Angular",
		"AWS",
		"Axios",
		"Bootstrap",
		"CSS",
		"Enzyme",
		"GitHub",
		"HTML",
		"JavaScript",
		"Jest",
		"TypeScript",
		"Node.js",
		"MongoDb",
		"Mongoose",
		"Parcel",
		"React",
		"Redux",
		"Svelte",
		"Tailwind"
	];

	function handleDownload() {
		console.log("Resume Downloaded");
	}
</script>

<div class="flex flex-col items-center mt-4">
	<div class="pb-4 pt-2">
		<h1 class="text-orange text-2xl">About Me:</h1>
		<div class="content-container">
			<p>
				I’m a full stack developer with experience in the MERN stack, among other tools, and over a
				decade in customer service. As a San Diego Music Awards nominated artist, I know the
				dedication and tenacity it takes to excel and I”m bringing that same intensity to my
				development career. I’m passionate about coding and pride myself in writing clean, reusable,
				error free code to create unique client focused web applications.
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
		<Button buttonText="Hello Resume" clickHandler={handleDownload} />
	</div>
</div>

<style>
	ul {
		margin-left: 20px;
	}
	li {
		font-family: "Catamaran", sans-serif;
	}
</style>
