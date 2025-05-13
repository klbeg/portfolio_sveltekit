<script lang="ts">
	import Link from "../Components/Link.svelte"
	import Button from "../Components/Button.svelte"
</script>

<div class="content-container">
	<h1 class="text-2xl mb-10">Interested in <br /> Working Together?</h1>
	<form action="https://formspree.io/f/xdoyjkro" method="POST" class="pt-2">
		<label class="my-9 text-2xl" for="email">
			Your email:
			<input class="mt-9 mb-14 p-1.5 rounded-lg my-4 block" type="email" name="email" />
		</label>
		<label class="my-9 text-2xl">
			Tell me about your project:
			<textarea class="mt-9 mb-14 rounded-lg block p-1.5" name="message" />
		</label>
		<Button buttonType="submit" buttonText="Send" />
	</form>
</div>

<style>
	textarea,
	input {
		border: 3px solid transparent;
		width: 281px;
		color: var(--theme-purple);
	}
	textarea:focus,
	input:focus {
		outline: none;
		border: 3px solid var(--theme-orange);
	}
</style>
