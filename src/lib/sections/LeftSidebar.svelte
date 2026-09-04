<script>
    import Clock from '$lib/components/Clock.svelte'
	import SidebarPlayer from '$lib/components/SidebarPlayer.svelte';
	import Icon from '@iconify/svelte';
	import { page } from '$lib/modules/globals.svelte';
</script>

<div class="hidden lg:w-1/3 md:flex flex-col lg:block h-full text-white p-10 text-2xl sticky top-0 self-start">

    
    <ul class="hidden pt-16 pb-10 px-28 lg:grid grid-cols-1 gap-5 font-ui">
        <li class=""><a href="#top"     style="opacity: {page.scroll.percent * 1000};" class="absolute opacity-100 duration-300 top-20 px-2 py-1 text-[12px] flex items-center gap-2 hover:underline">Go to Top <Icon icon="akar-icons:arrow-up"/></a></li>
        <li class=""><a href="#about-me"    class="p-2 border border-white/5 hover:border-white/30 hover:bg-white/10 duration-400">about me</a></li>
        <li class=""><a href="#projects"    class="p-2 border border-white/5 hover:border-white/30 hover:bg-white/10 duration-400">projects</a></li>
        <li class=""><a href="#discography" class="p-2 border border-white/5 hover:border-white/30 hover:bg-white/10 duration-400">discography</a></li>
    </ul>

    <!-- TIME & WEATHER -->
    <div class="py-10 px-30">
        <Clock />
    </div>

    <div class="py-10 px-30">
        <div class="py-2 flex flex-col gap-1">
            <a rel="noopener noreferrer" target="_blank" href="https://github.com/dhruvmane/dhruvmane.github.io" class="w-fit flex gap-2.5 items-center">
                <Icon icon="bxl:github"/>
                <h4 class="text-[13px]"> source code</h4>
            </a>
            <a rel="noopener noreferrer" target="_blank" href="https://github.com/officialbarden" class="w-fit flex gap-2.5 items-center">
                <Icon icon="bxl:github"/>
                <h4 class="text-[13px]"> my alt</h4>
            </a>
            <div class="w-fit flex gap-2.5 items-center">
                <Icon icon="bi:discord"/>
                <h4 class="text-[13px]">@dhruvmane</h4>
            </div>
        </div>
    </div>

    <div class="px-28 py-10">
        <SidebarPlayer />
    </div>

    <h2 class="text-[12px] font-mono mx-30">
        Powered by 
        <a class="hover:underline" href="https://iconify.design/" rel="noopener noreferrer" target="_blank">Iconify</a> 
        &
        <a class="hover:underline" href="https://svelte.dev/" rel="noopener noreferrer" target="_blank">Sveltekit</a>. 
    </h2>
    
    <details class="absolute mx-30 w-40 text-[12px] font-mono hover:cursor-pointer duration-500">
        <summary class="flex items-center gap-2">
            <h2 class="translate-y-0.5 font-mono">No AI</h2>
            <Icon icon="fluent-mdl2:navigate-external-inline"/>
        </summary>
        No AI-Generation/AI-Generated code is incorporated in this website.
    </details>
    
</div>
