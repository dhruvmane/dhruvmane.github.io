<script lang=ts>
     import { CurrentlyPlaying, musicState } from "$lib/modules/globals.svelte";
	import { onMount } from "svelte";
     
     import gsap from "gsap";
     import { Draggable, InertiaPlugin } from "gsap/all";

     gsap.registerPlugin(Draggable)
     gsap.registerPlugin(InertiaPlugin);
     
     import MusicBanner from '$lib/assets/icons/dhruv.jpg'

     let player: HTMLElement;

     $effect(() => {
          if (musicState.isPlaying) {
               gsap.from(player, {
                    y: 0
               })
          }
     })


</script>


<main bind:this={player} class="fixed bottom-0 right-0">
     <button 
          onclick={() => { if (musicState.isPlaying) {musicState.isPlaying = false; CurrentlyPlaying.music?.pause()} else {musicState.isPlaying = true; CurrentlyPlaying.music?.play()}}}
          class="m-10 p-1 bg-black justify-items-center text-left hover:brightness-50 hover:pointer-cursor duration-300 transition select-none">

          <img alt="" src={MusicBanner} class="size-[225px] brightness-10">
          <div class="absolute bottom-1/2 translate-y-1/2 text-center m-1 w-1/2">
               <div class="relative">
                    <h1 class="text-neutral-300 text-sm italic">from discography</h1>
                    <h1 class="text-white italic">Now Playing</h1>
                    <h1 class="text-white text-2xl">{CurrentlyPlaying.title}</h1>
                    {#if !musicState.isPlaying}
                         <h1 class="text-neutral-300 font-light text-2xl">[Paused]</h1>
                    {/if}
               </div>
          </div>
     </button>
</main>
