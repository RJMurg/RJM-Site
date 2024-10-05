<script lang="ts">
	import Navbar from '$lib/components/ui/navbar/navbar.svelte';
	import Showcase from '$lib/components/ui/showcase/showcase.svelte';
	import experienceItems from '$lib/contents/experience.json';
</script>

<Navbar />

<Showcase title="Experience" categories={experienceItems.categories} imageDirectory="experience" />
