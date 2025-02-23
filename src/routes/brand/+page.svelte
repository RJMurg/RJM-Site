<script lang="ts">
    import * as Table from "$lib/components/ui/table/index.js";
</script>

<div class="w-screen h-screen">
    <div class="flex flex-col justify-end items-start h-full p-5">
        <h1 class="text-8xl">
            <span class="font-black">Primary</span><span class="text-neutral-500 font-medium">Style</span>
        </h1>

        <h2 class="text-lg font-light">
            v2.0
        </h2>
    </div>
</div>

<div class="w-screen h-screen">
    <div class="flex flex-col justify-end items-start bg-red-500 h-full">
        <h1 class="text-10xl font-bold -rotate-90 mb-32 -ml-32 -pl-32">
            Fonts
        </h1>
    </div>
</div>

<div class="w-screen h-screen font-montserrate">
    <div class="flex flex-col justify-end items-start m-5 h-full">
        <h1 class="text-6xl font-bold mb-10">
            Montserrat
        </h1>

        <div class="w-full h-full text-center">
            <Table.Root>
                <Table.Row>
                    <Table.Cell class="text-lg sm:text-2xl lg:text-6xl font-extralight">
                        <div class="flex flex-col">
                            ABCdef
                            <span class="text-sm md:text-lg font-normal">Montserrat Extra Light</span>
                        </div>
                    </Table.Cell>
                    <Table.Cell class="text-lg sm:text-2xl lg:text-6xl font-light">
                        <div class="flex flex-col">
                            ABCdef
                            <span class="text-sm md:text-lg font-normal">Montserrat Light</span>
                        </div>
                    </Table.Cell>
                    <Table.Cell class="text-lg sm:text-2xl lg:text-6xl font-normal">
                        <div class="flex flex-col">
                            ABCdef
                            <span class="text-sm md:text-lg font-normal">Montserrat Regular</span>
                        </div>
                    </Table.Cell>
                </Table.Row>
                <Table.Row>
                    <Table.Cell class="text-lg sm:text-2xl lg:text-6xl italic">
                        <div class="flex flex-col">
                            ABCdef
                            <span class="text-sm md:text-lg font-normal not-italic">Montserrat Regular Italics</span>
                        </div>
                    </Table.Cell>
                    <Table.Cell class="text-lg sm:text-2xl lg:text-6xl font-medium">
                        <div class="flex flex-col">
                            ABCdef
                            <span class="text-sm md:text-lg font-normal">Montserrat Medium</span>
                        </div>
                    </Table.Cell>
                    <Table.Cell class="text-lg sm:text-2xl lg:text-6xl font-semibold">
                        <div class="flex flex-col">
                            ABCdef
                            <span class="text-sm md:text-lg font-normal">Montserrat Semi-Bold</span>
                        </div>
                    </Table.Cell>
                </Table.Row>
                <Table.Row>
                    <Table.Cell class="text-lg sm:text-2xl lg:text-6xl font-bold">
                        <div class="flex flex-col">
                            ABCdef
                            <span class="text-sm md:text-lg font-normal">Montserrat Bold</span>
                        </div>
                    </Table.Cell>
                    <Table.Cell class="text-lg sm:text-2xl lg:text-6xl font-extrabold">
                        <div class="flex flex-col">
                            ABCdef
                            <span class="text-sm md:text-lg font-normal">Montserrat Extra Bold</span>
                        </div>
                    </Table.Cell>
                    <Table.Cell class="text-lg sm:text-2xl lg:text-6xl font-black">
                        <div class="flex flex-col">
                            ABCdef
                            <span class="text-sm md:text-lg font-normal">Montserrat Black</span>
                        </div>
                    </Table.Cell>
                </Table.Row>
            </Table.Root>
        </div>
    </div>
</div>

<div class="w-screen h-screen font-mono">
    <div class="flex flex-col justify-end items-start m-5 h-full">
        <h1 class="text-6xl font-bold mb-10">
            JetBrains Mono
        </h1>

        <div class="w-full h-full text-center">
            <Table.Root>
                <Table.Row>
                    <Table.Cell class="text-lg sm:text-2xl lg:text-6xl font-thin">
                        <div class="flex flex-col">
                            ABCdef
                            <span class="text-sm md:text-lg font-normal">JBM Thin</span>
                        </div>
                    </Table.Cell>
                    <Table.Cell class="text-lg sm:text-2xl lg:text-6xl font-extralight">
                        <div class="flex flex-col">
                            ABCdef
                            <span class="text-sm md:text-lg font-normal">JBM Extra Light</span>
                        </div>
                    </Table.Cell>
                    <Table.Cell class="text-lg sm:text-2xl lg:text-6xl font-light">
                        <div class="flex flex-col">
                            ABCdef
                            <span class="text-sm md:text-lg font-normal">JBM Light</span>
                        </div>
                    </Table.Cell>
                </Table.Row>
                <Table.Row>
                    <Table.Cell class="text-lg sm:text-2xl lg:text-6xl font-normal">
                        <div class="flex flex-col">
                            ABCdef
                            <span class="text-sm md:text-lg font-normal">JBM Regular</span>
                        </div>
                    </Table.Cell>
                    <Table.Cell class="text-lg sm:text-2xl lg:text-6xl italic">
                        <div class="flex flex-col">
                            ABCdef
                            <span class="text-sm md:text-lg font-normal not-italic">JBM Regular Italics</span>
                        </div>
                    </Table.Cell>
                    <Table.Cell class="text-lg sm:text-2xl lg:text-6xl font-medium">
                        <div class="flex flex-col">
                            ABCdef
                            <span class="text-sm md:text-lg font-normal">JBM Medium</span>
                        </div>
                    </Table.Cell>
                </Table.Row>
                <Table.Row>
                    <Table.Cell class="text-lg sm:text-2xl lg:text-6xl font-semibold">
                        <div class="flex flex-col">
                            ABCdef
                            <span class="text-sm md:text-lg font-normal">JBM Semi-Bold</span>
                        </div>
                    </Table.Cell>
                    <Table.Cell class="text-lg sm:text-2xl lg:text-6xl font-bold">
                        <div class="flex flex-col">
                            ABCdef
                            <span class="text-sm md:text-lg font-normal">JBM Bold</span>
                        </div>
                    </Table.Cell>
                    <Table.Cell class="text-lg sm:text-2xl lg:text-6xl font-extrabold">
                        <div class="flex flex-col">
                            ABCdef
                            <span class="text-sm md:text-lg font-normal">JBM Extra Bold</span>
                        </div>
                    </Table.Cell>
                </Table.Row>
            </Table.Root>
        </div>
    </div>
</div>

<div class="w-screen h-screen font-philosopher">
    <div class="flex flex-col justify-end items-start m-5 h-full">
        <h1 class="text-6xl font-bold mb-10">
            Philosopher
        </h1>

        <div class="w-full h-full text-center">
            <Table.Root>
                <Table.Row>
                    <Table.Cell class="text-lg sm:text-2xl lg:text-6xl font-noram">
                        <div class="flex flex-col">
                            ABCdef
                            <span class="text-sm md:text-lg font-normal">Philosopher Regular</span>
                        </div>
                    </Table.Cell>
                    <Table.Cell class="text-lg sm:text-2xl lg:text-6xl font-bold">
                        <div class="flex flex-col">
                            ABCdef
                            <span class="text-sm md:text-lg font-normal">Philosopher Bold</span>
                        </div>
                    </Table.Cell>
                </Table.Row>
                <Table.Row>
                    <Table.Cell class="text-lg sm:text-2xl lg:text-6xl font-normal italic">
                        <div class="flex flex-col">
                            ABCdef
                            <span class="text-sm md:text-lg font-normal not-italic">Philosopher Regular Italics</span>
                        </div>
                    </Table.Cell>
                    <Table.Cell class="text-lg sm:text-2xl lg:text-6xl font-bold italic">
                        <div class="flex flex-col">
                            ABCdef
                            <span class="text-sm md:text-lg font-normal not-italic">Philosopher Bold Italics</span>
                        </div>
                    </Table.Cell>
                </Table.Row>
            </Table.Root>
        </div>
    </div>
</div>

<div class="w-screen h-screen">
    <div class="flex flex-col justify-end items-start bg-red-500 h-full">
        <h1 class="text-10xl font-bold -rotate-90 mb-52 -ml-52 -pl-32">
            Colours
        </h1>
    </div>
</div>