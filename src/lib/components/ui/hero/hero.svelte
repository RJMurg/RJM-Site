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
	<div class="flex items-center justify-center xs:max-lg:pb-20">
		<div class="items-left flex flex-col">
			<h1 class="pl-10 text-6xl font-bold xs:max-md:text-4xl">Ruán Murgatroyd</h1>
			<div class="subtitle-container pl-10" style="height: 4rem">
				<h2 class="text-4xl font-medium xs:max-md:text-2xl">{subtitle}</h2>
				<span class="flex flex-row">
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
		<img
			src="headshot.webp"
			alt="Ruán Murgatroyd"
			class="h-3/12 w-3/12 rounded-full p-10 xs:max-lg:mx-5 xs:max-lg:p-0"
		/>
	</div>

	<h2 class="pt-10 text-6xl xs:text-4xl">Find out more about</h2>
	<div
		class="flex w-screen flex-row items-center justify-center p-2 text-center text-4xl text-gray-400 xs:max-sm:flex-col"
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
