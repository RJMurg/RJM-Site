<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { Linkedin, Github } from 'lucide-svelte';
	import Routes from '$lib/contents/routes.json';
	export let subtitle: string;
</script>

<svelte:head>
	<title>Ruán Murgatroyd</title>
</svelte:head>

<section
	id="hero"
	class="flex h-screen w-screen flex-col items-center justify-center overflow-hidden"
>
	<div class="flex flex-col items-center justify-center md:flex-row lg:pb-10">
		<img
			src="headshot.webp"
			alt="Ruán Murgatroyd"
			class="aspect-square rounded-full p-10 xs:w-2/3 sm:w-1/2 md:w-3/12"
		/>
		<div class="items-left flex flex-col">
			<h1 class="pl-0 text-center text-4xl font-bold md:pl-10 md:text-left md:text-6xl">
				Ruán Murgatroyd
			</h1>
			<div class="subtitle-container pl-0 md:pl-10" style="height: 4rem">
				<h2 class="text-center text-2xl font-medium md:text-left md:text-4xl">{subtitle}</h2>
				<span class="flex flex-row items-center justify-center md:justify-start">
					<Button href="https://github.com/rjmurg" target="_blank" class="mr-5 mt-5">
						<Github class="mr-2 h-4 w-4" />
						GitHub
					</Button>
					<Button
						href="https://www.linkedin.com/in/ruan-murgatroyd/"
						target="_blank"
						variant="outline"
						class="mt-5"
					>
						<Linkedin class="mr-2 h-4 w-4" />
						LinkedIn
					</Button>
				</span>
			</div>
		</div>
	</div>

	<h2 class="pt-10 text-center text-6xl xs:text-3xl">Find out more about</h2>
	<div
		class="flex w-screen flex-row flex-col items-center justify-center p-2 text-center text-4xl text-gray-400 md:flex-row"
	>
		{#each Routes.routes as route}
			{#if route.name !== 'Home'}
				<a
					href={route.path}
					class="basis-1/3 text-center transition-all duration-200 ease-linear hover:text-white hover:underline xs:m-2"
					>My {route.name}</a
				>
			{/if}
		{/each}
	</div>
</section>
