<script>
	import '../global.css';
</script>

<!-- <nav>
	<a href="/about">About</a>
	<a href="/blog">Blog</a>
</nav> -->

<nav class="nav-bar">
	<a class="blog-route" href="/">Home</a>
	<a class="blog-route" href="/about">About</a>
	<a class="blog-route" href="/blog">Blog</a>
</nav>

<style>
	.nav-bar {
		padding-top: 20px;
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
	}

	.blog-route {
		color: grey;
		margin: 0 1.5em 0 0;
		font-size: 1.1rem;
	}

	a {
		font-family: 'IBM Plex Sans';
		font-size: 1em;
		text-underline-offset: 0.25em;
	}

	a:hover {
		font-weight: bold;
		color: black;
	}
</style>
