<script>
	export let onClick;
	export let buttonText;
	import { colors } from '../globalColors';

	const orange = colors.orange;
	const purple = colors.purple;
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
	}
	button:hover {
		cursor: pointer;
	}
</style>
