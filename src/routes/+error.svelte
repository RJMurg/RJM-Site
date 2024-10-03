<script lang="ts">
    import { ArrowLeft } from "lucide-svelte";
    import { Button } from "$lib/components/ui/button";

    const funnyPhrases = [
        "Please try the soup",
        "Stay awesome!",
        "You're doing great!",
        "Send me a message!",
        "You've got this!"
    ];

    const randomPhrase = funnyPhrases[Math.floor(Math.random() * funnyPhrases.length)];
</script>

<svelte:head>
    <title>Whoops! - Page not found</title>
</svelte:head>

<div class="flex flex-col items-center justify-center h-screen">
    <h1 class="text-6xl font-bold p-5">404</h1>
    <h2 class="text-4xl font-light">Page not found</h2>

    <p class="text-2xl font-medium mt-5 text-center">While you're here:</p>
    <p class="text-2xl font-light mt-2 text-center">{randomPhrase}</p>

    <Button href="/" class="mt-5" variant="outline">
        <ArrowLeft class="mr-2 h-4 w-4" />
        Go back home
    </Button>
</div>