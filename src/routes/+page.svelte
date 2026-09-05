
<script lang="ts">
     import '../app.css'

     import LeftSidebar from '$lib/sections/LeftSidebar.svelte';
     import AboutMe from '$lib/sections/content/AboutMe.svelte';
     import Projects from '$lib/sections/content/Projects.svelte';
     import Discography from '$lib/sections/content/Discography.svelte';
     import RightSidebar from '$lib/sections/RightSidebar.svelte';
     import AudioPlayer from '$lib/components/AudioPlayer.svelte';
     import Notice from '$lib/sections/Notice.svelte';
     import Clock from '$lib/components/Clock.svelte'
	import Blogs from '$lib/sections/content/Blogs.svelte';

</script>

<svelte:head>
     <title>dhruv - my portfolio</title>
</svelte:head>

<div class="flex" id="page">

     <LeftSidebar />
     <main class="text-white justify-self-center">
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
     </main>
     <RightSidebar />
     <!-- <AudioPlayer /> -->
</div>
