
// Import Music
import angeldust from "$lib/assets/music/angeldust.mp3"
import aria_math from "$lib/assets/music/aria math.mp3"
import findme from "$lib/assets/music/findme.mp3"
import twomusicians from '$lib/assets/music/twomusicianspart2.1.mp3'
import gutsexplosion from '$lib/assets/music/gutspotifyready.mp3'
import blackbird from '$lib/assets/music/blackbirdmysteryfullnobeats.mp3'

let Music = [
     {
          id: 1,
          title: "angel dust.",
          duration: "02:53",
          src: angeldust
     },
     {
          id: 4,
          title: "aria math",
          duration: "02:41",
          src: aria_math
     },
     {
          id: 5,
          title: "find me",
          duration: "02:33",
          src: findme
     },
     {
          id: 6,
          title: "two musicians - piano",
          duration: "02:25",
          src: twomusicians
     },
     {
          id: 7,
          title: "gutsexplosionpowermillion",
          duration: "05:19",
          src: gutsexplosion
     },
     {
          id: 8,
          title: "blackbird mystery",
          duration: "02:10",
          src: blackbird
     }
]

let musicState = $state({ isPlaying: false })
const previousId = parseInt(localStorage.getItem("music-id")!)
export let CurrentlyPlaying: any = $state({
    id: previousId,
    title: Music.find(music => music.id === previousId)?.title,
    currentTimeString: "00:00",
    durationString: "00:00",
    duration: Music.find(map => map.id === previousId)?.duration,
    time: 0,
    music: null as HTMLAudioElement | null,
})

export async function toggleMusic(id: number, oldAudio: HTMLAudioElement, newAudio: HTMLAudioElement) {
    let music = Music.find(music => music.id === id)
     oldAudio = document.getElementById(`music-${CurrentlyPlaying.id}`) as HTMLAudioElement
     newAudio = document.getElementById(`music-${id}`) as HTMLAudioElement
     
     if (music) {

          if (newAudio) {
               newAudio.ontimeupdate = () => {
                   CurrentlyPlaying.time = newAudio.currentTime ?? 0;
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
               if (music.id !== CurrentlyPlaying.id && oldAudio) {
                    oldAudio.pause()
                    oldAudio.currentTime = 0
               } else {
                    newAudio.pause()
                    console.log("Paused music.")

                    musicState.isPlaying = false
                    return
               }
          }

          CurrentlyPlaying.title = music.title
          CurrentlyPlaying.music = newAudio
          CurrentlyPlaying.duration = newAudio.duration

          CurrentlyPlaying.music = newAudio
          CurrentlyPlaying.duration = newAudio.duration


          // Calculate minutes and seconds
          const dur_minutes = Math.floor(CurrentlyPlaying.duration / 60);
          const dur_seconds = Math.floor(CurrentlyPlaying.duration % 60);
          CurrentlyPlaying.durationString = `${dur_minutes < 10 ? '0': ''}${dur_minutes}:${dur_seconds < 10 ? '0' : ''}${dur_seconds}`
          CurrentlyPlaying.durationString = CurrentlyPlaying.currentTimeString

          if (newAudio) {
               newAudio.play().catch(err => {console.log(`Error: ${err}`)})
               console.log("Playing music.")
          }
     }
}

export { Music, musicState }
