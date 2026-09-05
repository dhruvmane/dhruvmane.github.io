<script lang="ts">

    import disco from '$lib/assets/icons/discography.svg'
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

<div id="discography" class="group p-10 w-120 md:w-200 duration-300">

    <div class="font-title -translate-x-10 group-hover:translate-x-0 duration-500 transition  flex items-center gap-2.5 font-bold text-3xl lowercase my-5">
        <span class="opacity-0 group-hover:opacity-100 transition-all duration-500 text-3xl items-center flex">
            <Icon icon="ant-design:spotify-filled"/>
        </span>
        <span class="">
            discography
        </span>
    </div>

    <!-- <h2 id="discography" class="text-3xl font-bold lowercase my-5">discography <span class="text-neutral-700">————————————————————</span></h2> -->
    <div class="p-2 min-w-201 flex duration-300">
         <div class="items-center m-auto">
              <!-- <div class="flex w-full flex-1 flex-col items-center p-3">
                  <img src={ProfilePic} alt="cover" class="justify-self-start size-37.5">
                  <h2>My Discography</h2>
              </div> -->

              <img src={disco} class="mb-10 w-180 justify-self-center" alt="disco"/>
              
              <!-- Music Discography Icons -->
              <div class="gap-x-10 hidden">
                   <!-- Spotify Link -->
                   <input bind:value={volume} type="range" min="0" max="100" class="accent-neutral-200 cursor-pointer [&::webkit-slider-thumb]: ">
              </div>

              <div class="flex flex-col text-left gap-1 px-10 w-full">
                   {#each Music as music}
                        <button
                             onclick={() => {toggleMusic(music.id, oldAudio, newAudio)}}
                             class=" font-ui text-left lowercase border-white/10 border grid grid-cols-2 p-2 px-5 hover:bg-white/10 duration-500 hover:cursor-pointer"
                        >
                            <span class="text-ellipsis min-w-100">{music.title}</span>
                            <span class="text-right">{music.duration}</span>
                        </button>
                        <audio id={"music-"+ music.id} src={music.src}></audio>
                   {/each}
              </div>
         </div>

    </div>
</div>
