<script lang="ts">
	export let href;
	export let buttonText;
	export let target: string = "__blank";
</script>

<a {href} {target}>
	<button class="bg-orange text-purple h-10 font-bold text-2xl rounded-md">
		{buttonText}
	</button>
</a>

<style>
	button {
		width: 281px;
		transition: all 0.2s ease-in-out;
		border: 1px solid transparent;
	}

	button:hover {
		cursor: pointer;
		box-shadow: 0px 0px 6px 5px rgba(136, 110, 58, 0.562);
	}
</style>
