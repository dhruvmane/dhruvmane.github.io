
<script lang="ts">
     import '../app.css'

     import AboutMe from '$lib/sections/content/AboutMe.svelte';
     import Projects from '$lib/sections/content/Projects.svelte';
     import Discography from '$lib/sections/content/Discography.svelte';
     import MobilePlayer from '$lib/components/MobilePlayerController.svelte'
     import LeftSidebar from '$lib/sections/LeftSidebar.svelte';
     import Skills from '$lib/sections/content/Skills.svelte';
     import Alert from '$lib/components/Alert.svelte';

     import { gsap } from "gsap";
     import { onMount } from 'svelte';

     let aboutMe: HTMLElement;
     let projects: HTMLElement;
     let discography: HTMLElement;
     let sidebar: HTMLElement;
     
     onMount(() => {
       let timeline = gsap.timeline();
       
       timeline.fromTo(aboutMe, {
         opacity: 0,
         y: 90,
         autoAlpha: 0,
       },
       {
         opacity: 1,
         y: 0,
         autoAlpha: 1,
         ease: "power2.out",
         duration: 1,
       })
       .fromTo(sidebar, {
         opacity: 0,
         x: -90,
         y: 50,
         autoAlpha: 0,
       },
       {
         opacity: 1,
         x: 0,
         y: 0,
         autoAlpha: 1,
         ease: "power5.out",
         duration: 0.8,
       }, "-=0.95").fromTo(projects, {opacity: 0, y: 90, autoAlpha: 0}, {opacity: 1, y: 0, autoAlpha: 1, ease:"power2.out", duration: 1}, "-=0.75")
     })
     
</script>

<svelte:head>
     <title>dhruv | my portfolio</title>
</svelte:head>

<div class="flex wallpaper page" id="page">
    <div class="absolute w-full">
        <Alert />
    </div>
    <LeftSidebar />
    <main  class="text-white justify-self-center w-full max-w-full overflow-x-clip">
        <div id="#top"></div>
        <div bind:this={aboutMe} class="my-10">
            <AboutMe />
            <!-- <Skills /> -->
        </div>
        <div bind:this={projects} class="my-10">
            <Projects />
        </div>

        <div bind:this={discography} class="my-10">
            <Discography />
        </div>
        <!-- <div class="my-10"> -->
            <!-- <Blogs /> -->
        <!-- </div> -->

        <div class="mx-5 sticky bottom-4">
            <MobilePlayer />
        </div>
     </main>
     <!-- <RightSidebar /> -->
     <!-- <AudioPlayer /> -->
</div>
