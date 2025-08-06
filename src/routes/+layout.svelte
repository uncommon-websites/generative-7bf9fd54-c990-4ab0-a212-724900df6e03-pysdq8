<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';
	import Navbar from '$lib/components/navigation/navbar.svelte';
	import FooterTwo from '$lib/components/footer/footer-two.svelte';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<Navbar />
<main class="pt-20">
	{@render children?.()}
</main>
<FooterTwo />
