<script lang="ts">
	import ShowcaseCard from '$lib/components/ui/showcaseCard/showcaseCard.svelte';
	export let title: string;
	export let categories: categories;
	export let imageDirectory: string;
</script>

<svelte:head>
	<title>RJM - {title}</title>
</svelte:head>

<section class="h-screen overflow-scroll">
	<h1 class="mt-20 text-center text-4xl">{title}</h1>

	<div class="mb-10">
		{#each categories as category}
			<h2 class="mt-20 text-center text-2xl">{category.title}</h2>
			<div class="grid grid-cols-1 gap-6 lg:grid-cols-2 xl:grid-cols-3">
				{#each category.items as item}
					<ShowcaseCard
						title={item.title}
						image={imageDirectory + '/' + item.image}
						link={item.link}
						subtitle={item.shortDescription}
						description={item.description}
					/>
				{/each}
			</div>
		{/each}
	</div>
</section>
