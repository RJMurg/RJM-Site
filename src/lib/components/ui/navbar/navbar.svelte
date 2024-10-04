<script lang="ts">
    import Routes from '$lib/contents/routes.json';
</script>

<nav class="navbar w-screen p-4 fixed top-0 left-0 z-50 bg-black/80 shadow-lg ring-1 ring-black/5">
    <ul class="flex justify-around items-center w-full text-gray-400 text-xl flex-wrap">
        {#each Routes.routes as route}
            <li>
                <a href={route.path} class="hover:underline hover:text-white transition-all duration-200 ease-linear">{route.name}</a>
            </li>
        {/each}
    </ul>
</nav>
