<script lang="ts">
    import ShowcaseCard from '$lib/components/ui/showcaseCard/showcaseCard.svelte';
    export let title: string;
    export let items: [showcaseItem];
    export let imageDirectory: string;
</script>

<svelte:head>
    <title>RJM - {title}</title>
</svelte:head>

<section class="h-screen overflow-scroll">
    <h1 class="text-4xl text-center mt-20">{title}</h1>

    <div class="w-full h-max grid grid-cols-1 gap-6 lg:grid-cols-2">
      {#each items as item}
        <ShowcaseCard
          title={item.title}
          image={imageDirectory + '/' + item.image}
          link={item.link}
          subtitle={item.shortDescription}
          description={item.description}
        />
      {/each}
    </div>
</section>