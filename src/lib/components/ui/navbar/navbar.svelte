<script lang="ts">
    import Routes from '$lib/contents/routes.json';
    import { Menu } from 'lucide-svelte';
	import Button from '../button/button.svelte';

    let open = false;
    const toggleMenu = () => {
        open = !open;
    };
</script>

<nav class="navbar w-screen p-4 fixed top-0 left-0 z-50 bg-black/80 shadow-lg ring-1 ring-black/5">
    <div class="grid grid-cols-3 w-full text-gray-400 text-xl sm:max-sm:hidden">
        <button class="w-8 h-8 text-white cursor-pointer hover:text-grey-400 sm:hidden basis-1/3" on:click={toggleMenu}>
            <Menu class="w-8 h-8 text-white cursor-pointer hover:text-grey-400 sm:hidden basis-1/3" />
        </button>
        <div class="flex w-full justify-center basis-1/3">
            <img src="favicon.png" alt="Home icon" class="w-10 h-10 sm:hidden" />
        </div>
        <div class="basis-1/3"/>
    </div>
    <ul class="flex justify-around items-center w-full text-gray-400 text-xl flex-wrap xs:max-sm:hidden">
        {#each Routes.routes as route}
            <li>
                <a href={route.path} class="hover:underline hover:text-white transition-all duration-200 ease-linear">{route.name}</a>
            </li>
        {/each}
    </ul>

    {#if open}
        <ul class="flex flex-col items-center w-full text-gray-400 text-xl flex-wrap w-full h-full">
            {#each Routes.routes as route}
                <li>
                    <a href={route.path} class="hover:underline hover:text-white transition-all duration-200 ease-linear text-4xl">{route.name}</a>
                </li>
            {/each}
        </ul>
    {/if}
</nav>
