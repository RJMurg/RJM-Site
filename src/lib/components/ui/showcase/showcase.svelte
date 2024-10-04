<script lang="ts">
    import * as Card from '$lib/components/ui/card';
    import { ExternalLink } from 'lucide-svelte';

    export let title: string;
    export let image: string;
    export let link: string;
    export let subtitle: string;
    export let description: string[];
</script>

<Card.Root class="m-5 min-w-[16rem] max-w-[30rem] h-full">
    <Card.Header class="flex align-center items-center">
        {#if image !== ""}
            <img src={image} alt={title} class="w-20 h-20 object-cover"/>
        {:else}
            <img src="favicon.png" alt="Placeholder" class="w-20 h-20 object-cover"/>
        {/if}

        {#if link !== ""}
            <a href={link} class="flex flex-row items-center hover:text-gray-400">
                <Card.Title class="text-bold text-4xl">{title}</Card.Title>
                <ExternalLink class="w-6 h-6 m-0 ml-2 p-0"/>
            </a>
        {:else}
            <Card.Title>{title}</Card.Title>
        {/if}

        <Card.Description>{subtitle}</Card.Description>
    </Card.Header>
    <Card.Content>
        {#each description as line}
            <p class="m-2">{line}</p>
        {/each}
    </Card.Content>
</Card.Root>