<script>
	export let showNav;
	export let toggleNav;
</script>

<button class={!showNav ? 'menu-btn' : 'menu-btn open'} on:click={toggleNav}>
	<div class="menu-btn__burger" />
</button>

<style>
	.menu-btn {
		position: relative;
		display: flex;
		justify-content: center;
		align-items: center;
		height: 50px;
		width: 50px;
		margin: 25px 0;
		background-color: transparent;
		border: none;
	}
	.menu-btn:hover {
		cursor: pointer;
	}
	.menu-btn__burger {
		width: 50px;
		height: 4px;
		background: #fff;
		border-radius: 5px;
		transition: all 0.5s ease-in-out;
	}
	.menu-btn__burger::before,
	.menu-btn__burger::after {
		content: '';
		position: absolute;
		width: 50px;
		height: 4px;
		background: #fff;
		border-radius: 5px;
		transition: all 0.5s ease-in-out;
	}
	.menu-btn__burger::before {
		transform: translateY(-16px) translateX(-25px);
	}
	.menu-btn__burger::after {
		transform: translateY(16px) translateX(-25px);
	}
	/* ANIMATION */
	.menu-btn.open .menu-btn__burger {
		transform: translateX(-50px);
		background: transparent;
	}
	.menu-btn.open .menu-btn__burger::before {
		transform: rotate(45deg) translate(16px, -16px);
		background-color: var(--theme-orange);
	}
	.menu-btn.open .menu-btn__burger::after {
		transform: rotate(-45deg) translate(16px, 16px);
		background-color: var(--theme-orange);
	}
</style>
