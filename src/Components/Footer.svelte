<script>
	import gitIcon from "$lib/images/github.png"
	import linkedinIcon from "$lib/images/linkedin.png"
</script>

<footer class="py-12 flex flex-col items-center">
	<div class="flex items-center my-2">
		<a href="https://github.com/klbeg" target="_blank" class="rounded-xl mx-2">
			<img class="m-2" src={gitIcon} alt="white github logo" />
		</a>
		<a
			href="https://www.linkedin.com/in/kevin-begin-9062811b9/"
			target="_blank"
			class="rounded-xl mx-2"
		>
			<img class="m-2" src={linkedinIcon} alt="white linkedin logo" />
		</a>
	</div>
</footer>

<style>
	a {
		border: 1px solid transparent;
	}
	a:hover {
		cursor: pointer;
		background-color: #1d0036;
		border: 1px solid white;
	}
</style>
