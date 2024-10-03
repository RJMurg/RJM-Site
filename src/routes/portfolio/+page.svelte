<script lang="ts">
    import Navbar from '$lib/components/ui/navbar/navbar.svelte';
    import Showcase from '$lib/components/ui/showcase/showcase.svelte';
    import portfolioItems from '$lib/contents/portfolio.json';
</script>

<svelte:head>
    <title>RJM - Portfolio</title>
</svelte:head>

<Navbar/>

<section>
    <h1 class="text-4xl text-center mt-20">Portfolio</h1>

    <div class="flex w-full h-full overflow-x-scroll gap-x-10 xs:gap-y-10 xs:flex-col xs:overflow-x-hidden">
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