<script lang="ts">
    import Navbar from '$lib/components/ui/navbar/navbar.svelte';
    import { Linkedin, Github, Instagram, Twitter, Mail } from 'lucide-svelte';
	import * as Card from '$lib/components/ui/card';
	import Button from '$lib/components/ui/button/button.svelte';
</script>

<Navbar/>

<svelte:head>
    <title>RJM - Contact</title>
</svelte:head>

<section class="h-screen w-screen overflow-scroll flex align-center items-center flex-col">
    <h1 class="text-4xl text-center mt-20 font-bold">Contact Me!</h1>
    <h2 class="text-2xl text-center mt-5">Want to learn more, or have an exciting opportunity?</h2>

    <div class="w-full h-max flex align-center items-center flex-col">
        <Card.Root class="m-5 min-w-[16rem] max-w-[30rem] h-full">
            <Card.Header class="flex align-center items-center">
                    <Card.Title class="text-bold text-4xl text-center">Social Media</Card.Title>
                <Card.Description>Where I hang out</Card.Description>
            </Card.Header>
            <Card.Content>
                <ul class="grid grid-cols-2">
                    <Button href="https://linkedin.com/in/ruan-murgatroyd" variant="secondary" class="m-5">
                        <Linkedin class="w-6 h-6 mr-5"/>
                        LinkedIn
                    </Button>
                    <Button href="https://github.com/rjmurg" variant="secondary" class="m-5">
                        <Github class="w-6 h-6 mr-5"/>
                        GitHub
                    </Button>
                    <Button href="https://instagram.com/rjmurg" variant="secondary" class="m-5">
                        <Instagram class="w-6 h-6 mr-5"/>
                        Instagram
                    </Button>
                    <Button href="https://twitter.com/rjmurg" variant="secondary" class="m-5">
                        <Twitter class="w-6 h-6 mr-5"/>
                        Twitter
                    </Button>
                </ul>
            </Card.Content>
        </Card.Root>
    </div>
</section>