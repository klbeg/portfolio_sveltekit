<script lang="ts">
	import Button from './Button.svelte';
	import { colors } from '../globalColors.js';
	const orange: string = colors.orange;
	function handleClick() {
		//  replace with link to whatever project
		console.log('button working');
	}
</script>

<div class="content-container" style="--theme-orange: {orange}">
	<img
		src="https://klbeg.github.io/portfolio-website/img/MovieCraze-preview.jpg"
		alt="Movie Craze logo. Orange text on a dark blue background."
	/>
	<h1>MOVIE CRAZE</h1>
	<p>
		A full-stack React app that uses Axios, Redux, Parcel, Node.js, Bootstrap, and React Router on
		the client side. The backend for the site was built using Express, MongoDB, Node.js, Mongoose,
		Morgan, Passport, and Json Web Token.
	</p>
	<div class="button-container">
		<Button buttonText="View More" onClick={handleClick} />
	</div>
</div>

<style>
	h1 {
		color: var(--theme-orange);
		padding: 25px 0;
	}
	p {
		padding-bottom: 25px;
	}
	img {
		width: 200px;
		margin: 25px 0;
		border-radius: 20px;
		box-shadow: 0 3px 3px rgba(255, 255, 255, 0.295);
	}
	.button-container {
		padding-top: 25px;
	}
</style>
