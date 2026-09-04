<script lang="ts">

     import Spotify from '$lib/assets/icons/spotify1.svg'
     import ProfilePic from '$lib/assets/icons/dhruv.jpg'
     import { Music, CurrentlyPlaying, musicState } from '$lib/modules/globals.svelte';
     import Icon from '@iconify/svelte';

     let _currentlyPlaying: any = $state({
          title: "title",
          currentTimeString: "00:00",
          durationString: "00:00"
     })
     let exportedCurPlayingData = CurrentlyPlaying

     let musicCurrentTime = $state(0)
     let newAudio: HTMLAudioElement;
     let oldAudio: HTMLAudioElement;

     export async function toggleMusic(id: number, oldAudio: HTMLAudioElement, newAudio: HTMLAudioElement) {
          let music = Music.find(music => music.id === id)
          oldAudio = document.getElementById(`music-${_currentlyPlaying.id}`) as HTMLAudioElement
          newAudio = document.getElementById(`music-${id}`) as HTMLAudioElement

          if (music) {

               if (newAudio) {
                    newAudio.ontimeupdate = () => {
                         musicCurrentTime = newAudio?.currentTime ?? 0;
                         exportedCurPlayingData.time = musicCurrentTime
                    };
                    newAudio.onended = () => {
                         musicState.isPlaying = false
                    }
               }

               // Toggle Playing.
               if (!musicState.isPlaying) {
                    musicState.isPlaying = true

               } else {

                    // If clicked on another music, play that.
                    if (music.id !== _currentlyPlaying.id && oldAudio) {
                         oldAudio.pause()
                         oldAudio.currentTime = 0
                    } else {
                         newAudio.pause()
                         console.log("Paused music.")

                         musicState.isPlaying = false
                         return
                    }
               }

               let _CurrentlyPlaying = CurrentlyPlaying
               _currentlyPlaying = newAudio


               CurrentlyPlaying.title = music.title
               CurrentlyPlaying.music = newAudio
               CurrentlyPlaying.duration = newAudio.duration

               _currentlyPlaying = music
               _currentlyPlaying.music = newAudio
               _currentlyPlaying.duration = newAudio.duration


               // Calculate minutes and seconds
               const dur_minutes = Math.floor(_currentlyPlaying.duration / 60);
               const dur_seconds = Math.floor(_currentlyPlaying.duration % 60);
               _currentlyPlaying.durationString = `${dur_minutes < 10 ? '0': ''}${dur_minutes}:${dur_seconds < 10 ? '0' : ''}${dur_seconds}`
               exportedCurPlayingData.durationString = _currentlyPlaying.currentTimeString

               if (newAudio) {
                    newAudio.volume = volume / 100
                    newAudio.play().catch(err => {console.log(`Error: ${err}`)})
                    console.log("Playing music.")
               }
          }
     }
     let volume = $state(50);


     $effect(() => {
          if (musicState.isPlaying && newAudio) {
              newAudio.volume = volume / 100
          }
     })

     $effect(() => {
         if (musicCurrentTime) {
               // Calculate minutes and seconds
               const cur_minutes = Math.floor(musicCurrentTime / 60);
               const cur_seconds = Math.floor(musicCurrentTime % 60);
               _currentlyPlaying.currentTimeString = `${cur_minutes < 10 ? '0': ''}${cur_minutes}:${cur_seconds < 10 ? '0' : ''}${cur_seconds}`
               exportedCurPlayingData.currentTimeString = _currentlyPlaying.currentTimeString
          }
     })

</script>

<div id="discography" class="group p-10 w-120 md:w-200 duration-300 select-none">

    <div class="font-title -translate-x-10 group-hover:translate-x-0 duration-500 transition  flex items-center gap-2.5 font-bold text-3xl lowercase my-5">
        <span class="opacity-0 group-hover:opacity-100 transition-all duration-500 text-3xl items-center flex">
            <Icon icon="ant-design:spotify-filled"/>
        </span>
        <span class="">
            discography
        </span>
    </div>

    <!-- <h2 id="discography" class="text-3xl font-bold lowercase my-5">discography <span class="text-neutral-700">————————————————————</span></h2> -->
    <div class="">
         <div class="w-full">

              <div class="flex p-3">
                   <img src={ProfilePic} alt="cover" class="justify-self-start size-37.5">
                   <div class="mx-2 my-3">
                        <p class="text-sm italic text-neutral-600 font-light">my discography</p>
                        <h1 class="text-2xl text-neutral-600 font-light">currently playing..</h1>
                        <h1 class="text-4xl font-black lowercase">{_currentlyPlaying.title}</h1>
                        <div class="flex">
                             <p>{_currentlyPlaying.currentTimeString} — {_currentlyPlaying.durationString}</p>
                        </div>
                   </div>
              </div>

              <!-- Music Discography Icons -->
              <div class="flex gap-x-10">
                   <!-- Spotify Link -->
                   <a target="_blank" rel="noopener noreferrer" class="flex" href="https://open.spotify.com/artist/2cJZ9m2iORNR1T4on8ZKBZ?si=72820b49ebe247f9">
                        <img alt="spotify" src={Spotify} class="size-[100px]">
                   </a>

                   <input bind:value={volume} type="range" min="0" max="100" class="accent-neutral-200 cursor-pointer [&::webkit-slider-thumb]: ">
              </div>


              <div class="flex flex-col text-left gap-y-2">
                   {#each Music as music}
                        <button
                             onclick={() => {toggleMusic(music.id, oldAudio, newAudio)}}
                             class="max-w-75 md:max-w-100 font-ui text-left lowercase border-white/10 border grid grid-cols-3 p-2 px-5 hover:bg-white/10 duration-500 hover:cursor-pointer"
                        >
                            <span class="text-ellipsis">{music.title}</span>
                            <span class="text-center">—</span>
                            <span class="text-right">{music.duration}</span>
                        </button>
                        <audio id={"music-"+ music.id} src={music.src}></audio>
                   {/each}
              </div>
         </div>

    </div>
</div>
