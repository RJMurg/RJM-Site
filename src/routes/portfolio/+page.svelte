<script lang="ts">
    import Navbar from '$lib/components/ui/navbar/navbar.svelte';
    import Showcase from '$lib/components/ui/showcase/showcase.svelte';
    import portfolioItems from '$lib/contents/portfolio.json';
</script>

<svelte:head>
    <title>RJM - Portfolio</title>
</svelte:head>

<Navbar/>

<section class="h-screen overflow-scroll">
    <h1 class="text-4xl text-center mt-20">Portfolio</h1>

    <div class="w-full h-max grid grid-cols-1 gap-6 lg:grid-cols-2">
      {#each portfolioItems.projects as item}
        <Showcase
          title={item.title}
          image={"portfolio/" + item.image}
          link={item.link}
          subtitle={item.shortDescription}
          description={item.description}
        />
      {/each}
    </div>
</section>