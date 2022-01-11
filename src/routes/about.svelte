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

<div class="flex-center" style="--theme-orange: {orange}">
	<div class="content-container">
		<h1 class="heaeder-med-orng">About Me:</h1>
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
		<h2>Skills</h2>
		<div class="content-container">
			<ul>
				{#each skills as skill, i}
					<li>{skill}</li>
				{/each}
			</ul>
		</div>
		<Button buttonText="Download Resume" onClick={downloadResume} />
	</div>
</div>

<style>
	h1,
	h2 {
		font-size: 25px;
		font-family: 'Montserrat', sans-serif;
		color: var(--theme-orange);
	}
	ul {
		column-count: 2;
		margin: 0 -25px 0 25px;
		padding: 25px 0;
	}
	li {
		margin: 5px 0;
		font-size: 20px;
		font-family: 'Catamaran', sans-serif;
	}
</style>
