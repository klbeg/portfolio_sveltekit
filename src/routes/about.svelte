<script lang="ts">
	import { colors } from '../globalColors';
	import Button from '../Components/Button.svelte';

	const orange: string = colors.orange;
	const skills: string[] = [
		'JavaScript',
		'TypeScript',
		'CSS',
		'AWS',
		'HTML',
		'Node.js',
		'Svelte',
		'Angular',
		'React',
		'Redux',
		'Axios',
		'Bootstrap',
		'Puppeteer',
		'Enzyme',
		'Test Driven Development',
		'Parcel',
		'Mongoose',
		'MongoDb',
		'GitHub'
	];

	function downloadResume() {
		console.log('Resume Downloaded');
	}
</script>

<div class="flex flex-col items-center" style="--theme-orange: {orange}">
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
			<ul class="list-inside list-disc py-4 columns-2">
				{#each skills as skill}
					<li class="my-1 text-l">{skill}</li>
				{/each}
			</ul>
		</div>
		<Button buttonText="Download Resume" onClick={downloadResume} />
	</div>
</div>

<style>
	li {
		font-family: 'Catamaran', sans-serif;
	}
</style>
