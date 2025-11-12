<script lang="ts">
	import * as Card from '$lib/components/ui/card';
	import { ExternalLink } from 'lucide-svelte';

	export let title: string;
	export let image: string;
	export let link: string;
	export let subtitle: string;
	export let description: [string];
</script>

<Card.Root class="m-5 h-full min-w-[16rem] max-w-[30rem]">
	<Card.Header class="align-center flex items-center">
		{#if image !== 'portfolio/'}
			<img src={image} alt={title} class="h-20 w-20 rounded-full object-cover" />
		{:else}
			<img src="white.svg" alt="Placeholder" class="h-20 w-20 object-cover" />
		{/if}

		{#if link !== ''}
			<a href={link} target="_blank" class="flex flex-row items-center hover:text-gray-400">
				<Card.Title class="text-bold text-center text-4xl">{title}</Card.Title>
				<ExternalLink class="m-0 ml-2 h-6 w-6 p-0" />
			</a>
		{:else}
			<Card.Title class="text-bold text-center text-4xl">{title}</Card.Title>
		{/if}

		<Card.Description>{subtitle}</Card.Description>
	</Card.Header>
	<Card.Content>
		<ul class="list-disc">
			{#each description as line}
				<li class="m-2">{line}</li>
			{/each}
		</ul>
	</Card.Content>
</Card.Root>
