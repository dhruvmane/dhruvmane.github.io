
<script lang="ts">
     import '../app.css'

     import LeftSidebar from '$lib/sections/LeftSidebar.svelte';
     import AboutMe from '$lib/sections/content/AboutMe.svelte';
     import Projects from '$lib/sections/content/Projects.svelte';
     import Discography from '$lib/sections/content/Discography.svelte';
     import RightSidebar from '$lib/sections/RightSidebar.svelte';
     import MobilePlayer from '$lib/components/MobilePlayerController.svelte'
     
</script>

<svelte:head>
     <title>dhruv - my portfolio</title>
</svelte:head>

<div class="flex" id="page">

     <LeftSidebar />
     <main class="text-white md:ml-33.5 justify-self-center w-full max-w-full overflow-x-clip">
        <div id="#top"></div>
        <div class="my-10">
            <AboutMe />
        </div>
        <div class="my-10">
            <Projects />
        </div>
        <div class="my-10">
            <Discography />
        </div>
        <!-- <div class="my-10"> -->
            <!-- <Blogs /> -->
        <!-- </div> -->

        <div class="mx-5 sticky bottom-4">
            <MobilePlayer />
        </div>
     </main>
     <RightSidebar />
     <!-- <AudioPlayer /> -->
</div>
