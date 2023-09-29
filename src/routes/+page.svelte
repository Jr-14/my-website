<script>
	import '../global.css';
	import Heading from './Heading.svelte';
	import Navigation from '../components/Navigation.svelte';
	import Socials from './Socials.svelte';
	import DarkModeToggle from '../components/DarkModeToggle.svelte';
</script>

<svelte:head>
	<title>John Requizo</title>
</svelte:head>

<body>
	<DarkModeToggle />
	<Navigation />

	<Heading />

	<h2>Welcome to my blog</h2>

	<Socials />
</body>

<style>
	@media (prefers-color-scheme: dark) {
		body {
			background-color: #282828;
		}
	}

	body {
		background-color: white;
	}
</style>
