<script>
    import Clock from '$lib/components/Clock.svelte'
	import SidebarPlayer from '$lib/components/SidebarPlayer.svelte';
	import Icon from '@iconify/svelte';
</script>

<div class="hidden lg:w-1/3 md:flex flex-col lg:block h-full text-white p-10 text-2xl sticky top-0 self-start">
     <ul class="hidden p-28 lg:grid grid-cols-1 gap-5 font-ui">
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

</div>
