<script lang="ts">
	import Button from './Button.svelte';

	function handleClick() {
		//  replace with link to whatever project
		console.log('button working');
	}
</script>

<div class="content-container">
	<img
		src="https://klbeg.github.io/portfolio-website/img/MovieCraze-preview.jpg"
		alt="Movie Craze logo. Orange text on a dark blue background."
	/>
	<h1 class="text-orange text-2xl py-6 uppercase">movie craze</h1>
	<p class="pb-6 text">
		A full-stack React app that uses Axios, Redux, Parcel, Node.js, Bootstrap, and React Router on
		the client side. The backend for the site was built using Express, MongoDB, Node.js, Mongoose,
		Morgan, Passport, and Json Web Token.
	</p>
	<div class="py-4">
		<Button buttonText="View More" onClick={handleClick} />
	</div>
</div>

<style>
	img {
		width: 200px;
		margin: 25px 0;
		border-radius: 20px;
		box-shadow: 0 3px 3px rgba(255, 255, 255, 0.295);
	}
</style>
