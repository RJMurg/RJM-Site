<script lang="ts">
	import { ArrowLeft } from 'lucide-svelte';
	import { Button } from '$lib/components/ui/button';

	const funnyPhrases = [
		'Please try the soup',
		'Stay awesome!',
		"You're doing great!",
		'Send me a message!',
		"You've got this!"
	];

	const randomPhrase = funnyPhrases[Math.floor(Math.random() * funnyPhrases.length)];
</script>

<svelte:head>
	<title>Whoops!</title>
</svelte:head>

<div class="flex h-screen flex-col items-center justify-center">
	<h1 class="p-5 text-6xl font-bold">An error has occured</h1>

	<p class="mt-5 text-center text-2xl font-medium">While you're here:</p>
	<p class="mt-2 text-center text-2xl font-light">{randomPhrase}</p>

	<Button href="/" class="mt-5" variant="outline">
		<ArrowLeft class="mr-2 h-4 w-4" />
		Go back home
	</Button>
</div>
