<script>
	import Button from '../Components/Button.svelte';
</script>

<div class="flex flex-col items-center">
	<div class="content-container">
		<h1 class="text-2xl">Interested in <br /> Working Together?</h1>
	</div>
	<form action="" class="pt-9">
		<div class="content-container">
			<label class="my-9 text-2xl font-bold" for="email">Email:</label>
			<input class="mt-9 mb-14 p-1.5 rounded-lg my-4 block" type="text" id="email" />
			<label class="my-9 text-2xl font-bold" for="phone">Phone #</label>
			<input class="mt-9 mb-14 p-1.5 rounded-lg my-4 block" type="text" id="phone" />
			<label class="my-9 text-2xl font-bold" for="phone">Tell me about your project?</label>
			<textarea
				class="mt-9 mb-14 rounded-lg block p-1.5"
				name="message"
				id="message"
				cols="30"
				rows="10"
			/>
			<Button buttonText="Submit" />
		</div>
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
