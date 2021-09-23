<script>
	import Navbar from '../components/Nav/Navbar.svelte';
	import Footer from '../components/Nav/Footer.svelte';
	import '../normalize.css';
	import '../base.css';
	import '../layout.css';
</script>

<Navbar />

<main>
	<slot />
</main>

<footer>
	<Footer />
</footer>

<style>
	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 0;
		width: 100%;
		margin: 0 auto;
		box-sizing: border-box;
	}

	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	footer a {
		font-weight: bold;
	}

</style>
