<script lang="ts">
	import Routes from '$lib/contents/routes.json';
	import { Menu } from 'lucide-svelte';

	let open = false;
	const toggleMenu = () => {
		open = !open;
	};
</script>

<nav class="navbar fixed left-0 top-0 z-50 w-screen bg-black/80 p-4 shadow-lg ring-1 ring-black/5">
	<div class="grid w-full grid-cols-3 text-xl text-gray-400 sm:max-sm:hidden">
		<button
			class="hover:text-grey-400 h-8 w-8 basis-1/3 cursor-pointer text-white sm:hidden"
			on:click={toggleMenu}
		>
			<Menu class="hover:text-grey-400 h-8 w-8 basis-1/3 cursor-pointer text-white sm:hidden" />
		</button>
		<div class="flex w-full basis-1/3 justify-center">
			<img src="favicon.png" alt="Home icon" class="h-10 w-10 sm:hidden" />
		</div>
		<div class="basis-1/3" />
	</div>
	<ul
		class="flex w-full flex-wrap items-center justify-around text-xl text-gray-400 xs:max-sm:hidden"
	>
		{#each Routes.routes as route}
			<li>
				<a
					href={route.path}
					class="transition-all duration-200 ease-linear hover:text-white hover:underline"
					>{route.name}</a
				>
			</li>
		{/each}
	</ul>

	{#if open}
		<ul class="flex h-full w-full w-full flex-col flex-wrap items-center text-xl text-gray-400">
			{#each Routes.routes as route}
				<li>
					<a
						href={route.path}
						class="text-4xl transition-all duration-200 ease-linear hover:text-white hover:underline"
						>{route.name}</a
					>
				</li>
			{/each}
		</ul>
	{/if}
</nav>
