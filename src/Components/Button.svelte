<script lang="ts">
	export let onClick;
	export let buttonText;
</script>

<button class="bg-orange text-purple h-10 font-bold text-2xl rounded-md" on:click={onClick}
	>{buttonText}</button
>

<style>
	button {
		width: 281px;
		transition: all 0.5s ease-in-out;
	}
	button:hover {
		cursor: pointer;
		letter-spacing: 2px;
	}
</style>
