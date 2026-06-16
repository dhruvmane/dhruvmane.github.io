
<script lang=ts>
     import '../app.css'
     
     import AboutMe from '$lib/sections/AboutMe.svelte';
     import Projects from '$lib/sections/Projects.svelte';
     import LeftSidebar from '$lib/sections/LeftSidebar.svelte';

</script>

<div class="flex">
     <LeftSidebar />
     <main class="text-white justify-self-center select-none">
          <div class="my-10">
               <AboutMe />
          </div>
          <div class="my-10">
               <Projects />
          </div>
     </main>
     <div class="w-1/3 h-full"></div>
</div>