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
		transition: all 0.2s ease-in-out;
	}
	button:hover {
		cursor: pointer;
		box-shadow: 0px 0px 6px 5px rgba(136, 110, 58, 0.842);
	}
</style>
