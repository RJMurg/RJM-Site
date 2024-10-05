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
    <h1 class="text-4xl text-center mt-20">{title}</h1>

    <div class="w-full h-max">
      {#each categories as category}
        <h2 class="text-2xl text-center mt-20">{category.title}</h2>
        <div class="grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-2 gap-6">
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