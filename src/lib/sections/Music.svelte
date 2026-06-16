<script lang=ts>

     import Spotify from '$lib/assets/icons/spotify1.svg'
     import ProfilePic from '$lib/assets/icons/dhruv.jpg'
     import { Music } from '$lib/modules/globals.svelte';
     
     let inverse = 0
     let isPlaying = $state(false)

     let _currentlyPlaying = {
          title: "title",
          minTimeStamp: "00:00",
          maxTimeStamp: "00:00",
          links: {
               spotify: "https://open.spotify.com/artist/2cJZ9m2iORNR1T4on8ZKBZ?si=72820b49ebe247f9"
          }
     }

</script>

<h1 id="my-music" class="text-3xl font-bold lowercase my-5">discography <span class="text-neutral-700">————————————————————</span></h1>
<div class="w-[800px] min-h-[500px] border-4 border-black shadow-[10px_10px_0px] shadow-black bg-neutral-900">
     <div class="justify-items-center my-10 w-full">

               
          
          <div class="min-w-[400px] justify-self-center flex bg-neutral-950 shadow-[4px_4px_0px] shadow-neutral-700">
               <img src={ProfilePic} alt="cover" class="justify-self-start size-[150px] border-4 border-black">
               <div class="mx-2 my-3">
                    <p class="text-sm italic text-neutral-600 font-light">my discography</p>
                    <h1 class="text-2xl text-neutral-600 font-light">currently playing..</h1>
                    <h1 class="text-4xl font-black lowercase">{_currentlyPlaying.title}</h1>
                    <div class="flex">
                         <p>{_currentlyPlaying.minTimeStamp} —— {_currentlyPlaying.maxTimeStamp}</p>
                    </div>
               </div>
          </div>
          
          <!-- Music Discography Icons -->
          <div class="justify-self-center">
               <!-- Spotify Link -->
               <a target="_blank" rel="noopener noreferrer" class="flex" href={_currentlyPlaying.links.spotify}>
                    <img alt="spotify" src={Spotify} class="size-[100px]">
               </a>
                              
          </div>
          
               
          <div class="flex flex-col text-left gap-y-2">
               {#each Music as music}
                    <button 
                         class="min-w-[400px] text-left lowercase grid grid-cols-3 bg-neutral-800 p-2 px-5 shadow-[4px_4px_0px] shadow-neutral-700 hover:bg-neutral-700 hover:shadow-neutral-800 hover:cursor-pointer"
                    >
                         {music.title} <span class="text-center">——</span> <span class="text-right">{music.duration}</span>
                    </button>
               {/each}
          </div>

     </div>

</div>