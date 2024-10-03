<script lang="ts">
    import { Button } from '$lib/components/ui/button';
    import { Linkedin, Github } from 'lucide-svelte';
</script>

<svelte:head>
    <title>Ruán Murgatroyd</title>
</svelte:head>

<div class="flex justify-center items-center" id="hero">
    <div class="flex items-left flex-col">
        <h1 class="text-6xl font-bold pl-10">Ruán Murgatroyd</h1>
        <div class="subtitle-container pl-10" style="height: 4rem">
            <h2 class="text-4xl font-light">Computer Science Student</h2>
            <span>
                <Button href="https://github.com/rjmurg" class="mt-5 mr-5">
                    <Github class="mr-2 h-4 w-4" />
                    GitHub
                </Button>
                <Button href="https://www.linkedin.com/in/ruan-murgatroyd/" variant="outline" class="mt-5">
                    <Linkedin class="mr-2 h-4 w-4" />
                    LinkedIn
                </Button>
            </span>
        </div>
    </div>
    <img src="headshot.webp" alt="Ruán Murgatroyd" class="rounded-full w-3/12 h-3/12 p-10" />
</div>

<div class="flex flex-row justify-around items-center w-screen text-4xl pt-10 text-gray-400">
    <a href="/about" class="hover:underline hover:text-white transition-all duration-200 ease-linear">About</a>
    <a href="blog.rjm.ie" class="hover:underline hover:text-white transition-all duration-200 ease-linear">Blog</a>
    <a href="/portfolio" class="hover:underline hover:text-white transition-all duration-200 ease-linear">Portfolio</a>
    <a href="/achievements" class="hover:underline hover:text-white transition-all duration-200 ease-linear">Achievements</a>
</div>