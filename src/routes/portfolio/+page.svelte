<script lang="ts">
	import Navbar from '$lib/components/ui/navbar/navbar.svelte';
	import portfolioItems from '$lib/contents/portfolio.json';
	import Showcase from '$lib/components/ui/showcase/showcase.svelte';
</script>

<Navbar />

<Showcase title="Portfolio" categories={portfolioItems.categories} imageDirectory="portfolio" />
