
<script lang=ts>
     import '../app.css'
     
     import AboutMe from '$lib/sections/AboutMe.svelte';
     import Projects from '$lib/sections/Projects.svelte';
     import LeftSidebar from '$lib/sections/LeftSidebar.svelte';
     import Music from '$lib/sections/Music.svelte';
	import RightSidebar from '$lib/sections/RightSidebar.svelte';
	import AudioPlayer from '$lib/components/AudioPlayer.svelte';

</script>

<div class="flex" id="page">
     <LeftSidebar />
     <main class="text-white justify-self-center select-none">
          <div class="my-10">
               <AboutMe />
          </div>
          <div class="my-10">
               <Projects />
          </div>
          <div class="my-10">
               <Music />
          </div>
     </main>
     <RightSidebar />
     <AudioPlayer />
</div>