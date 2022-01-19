<script lang="ts">
	import Button from './Button.svelte';
</script>

<div class="content-container">
	<img
		class="my-5 w-52 rounded-2xl"
		src="https://klbeg.github.io/portfolio-website/img/MovieCraze-preview.jpg"
		alt="Movie Craze logo. Orange text on a dark blue background."
	/>
	<h1 class="text-orange text-2xl py-6 uppercase">movie craze</h1>
	<p class="pb-6">
		A full-stack React app that uses Axios, Redux, Parcel, Node.js, Bootstrap, and React Router on
		the client side. The backend for the site was built using Express, MongoDB, Node.js, Mongoose,
		Morgan, Passport, and Json Web Token.
	</p>
	<div class="pt-4">
		<Button buttonText="View More" href="movieCraze" target="" />
	</div>
</div>

<style>
	img {
		box-shadow: 0 3px 3px rgba(255, 255, 255, 0.295);
	}
</style>
