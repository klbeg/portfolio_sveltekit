<script lang="ts">
	export let showNav;
</script>

<nav class={!showNav ? 'hide' : ''}>
	<ul>
		<a href="/">
			<li>Home</li>
		</a>
		<a href="/about">
			<li>About</li>
		</a>
		<a href="/contact">
			<li>Contact</li>
		</a>
	</ul>
</nav>

<style>
	nav {
		height: 150px;
		overflow: hidden;
		transition: all 0.75s ease-in-out;
	}
	.hide {
		height: 0;
	}
	ul {
		list-style: none;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding-bottom: 30px;
	}
	ul li {
		display: flex;
		justify-content: center;
		padding: 8px 0;
		margin: 2px 0;
		width: 100px;
		font-size: 20px;
		border: 1px solid transparent;
		border-radius: 5px;
		transition: all 0.5s ease-in-out;
	}
	a {
		text-decoration: none;
		color: #fff;
	}
	ul li:hover {
		cursor: pointer;
		border: 1px solid #fff;
		font-weight: 500;
	}
</style>
