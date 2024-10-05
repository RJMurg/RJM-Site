<script lang="ts">
    import { Button } from '$lib/components/ui/button';
    import { Linkedin, Github } from 'lucide-svelte';
    import Routes from '$lib/contents/routes.json';
    export let subtitle: string;
</script>

<svelte:head>
    <title>Ruán Murgatroyd</title>
</svelte:head>

<section id="hero" class="flex flex-col w-screen h-screen overflow-hidden justify-center items-center">
    <div class="flex justify-center items-center xs:max-lg:pb-20">
        <div class="flex items-left flex-col">
            <h1 class="text-6xl xs:max-md:text-4xl font-bold pl-10">Ruán Murgatroyd</h1>
            <div class="subtitle-container pl-10" style="height: 4rem">
                <h2 class="text-4xl xs:max-md:text-2xl font-medium">{subtitle}</h2>
                <span class="flex flex-row">
                    <Button href="https://github.com/rjmurg"  target="_blank" class="mt-5 mr-5">
                        <Github class="mr-2 h-4 w-4" />
                        GitHub
                    </Button>
                    <Button href="https://www.linkedin.com/in/ruan-murgatroyd/"  target="_blank" variant="outline" class="mt-5">
                        <Linkedin class="mr-2 h-4 w-4" />
                        LinkedIn
                    </Button>
                </span>
            </div>
        </div>
        <img src="headshot.webp" alt="Ruán Murgatroyd" class="rounded-full w-3/12 h-3/12 p-10 xs:max-lg:p-0 xs:max-lg:mx-5" />
    </div>

    <div class="flex flex-row xs:max-sm:flex-col justify-around items-center w-screen text-4xl pt-10 text-gray-400 xs:max-md:grid xs:max-md:grid-cols-2 xs:max-md:text-center">
        {#each Routes.routes as route}
            {#if route.name !== "Home"}
                <a href={route.path} class="hover:underline hover:text-white transition-all duration-200 ease-linear xs:m-2">{route.name}</a>
            {/if}
        {/each}
    </div>
</section>