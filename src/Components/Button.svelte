<script lang="ts">
	export let buttonText: string
	export let clickHandler: () => any = () => {}
	export let buttonType: string = ""
</script>

<button
	on:click={clickHandler || console.log("Button has no handler")}
	class="bg-orange text-purple h-10 font-bold text-2xl rounded-md"
	type={buttonType}
>
	{buttonText}
</button>

<style>
	button {
		width: 216px;
		transition: all 0.2s ease-in-out;
		border: 1px solid transparent;
	}

	button:hover {
		cursor: pointer;
		box-shadow: 0px 0px 6px 5px rgba(136, 110, 58, 0.562);
	}
</style>
