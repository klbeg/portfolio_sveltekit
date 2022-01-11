<script lang="ts">
	export let onClick;
	export let buttonText;
	import { colors } from '../globalColors';

	const orange: string = colors.orange;
	const purple: string = colors.purple;
</script>

<button on:click={onClick} style="--theme-orange: {orange}; --theme-purple: {purple} "
	>{buttonText}</button
>

<style>
	button {
		background-color: var(--theme-orange);
		color: var(--theme-purple);
		width: 295px;
		height: 40px;
		font-size: 25px;
		font-weight: bold;
		border: none;
		border-radius: 10px;
		transition: all 0.5s ease-in-out;
	}
	button:hover {
		cursor: pointer;
		letter-spacing: 2px;
	}
</style>
