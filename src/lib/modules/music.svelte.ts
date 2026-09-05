
// Import Music
import angeldust from "$lib/assets/music/angeldust.mp3"
import aria_math from "$lib/assets/music/aria math.mp3"
import findme from "$lib/assets/music/findme.mp3"
import twomusicians from '$lib/assets/music/twomusicianspart2.1.mp3'
import gutsexplosion from '$lib/assets/music/gutspotifyready.mp3'
import blackbird from '$lib/assets/music/blackbirdmysteryfullnobeats.mp3'

let musicState = $state({isPlaying: false})
let CurrentlyPlaying = $state({
    id: null,
    title: "title",
    currentTimeString: "00:00",
    durationString: "00:00",
    duration: 0,
    time: 0,
    music: null as HTMLAudioElement | null,
})
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

export { Music, CurrentlyPlaying, musicState }
