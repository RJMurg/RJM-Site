<script lang="ts">
	import type { PageData } from './$types';
	import {Button} from "$lib/components/ui/button"
	export let data: PageData;
</script>

<svelte:head>
	<title>SvelteKit Template</title>
</svelte:head>

<div>
	<Button>Hai chat</Button>
</div>
