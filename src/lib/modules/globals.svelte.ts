let Talents = [
     "Typescript",
     "Javascript",
     "HTML",
     "CSS",
     "Rust",
     "Node.js",
     "express.js",
     "React",
     "Svelte/Sveltekit",
     "Electron",
     "Tauri",
     "FL Studio"
]

let Projects = [
     {
          HackathonWinner: true,
          name: "TradeBull",
          link: "https://tradebull-three.vercel.app/",
          description: "a Virtual Trading Simulator, Same Feeling & Zero Risk.",
          stack: [
               "React", "Vite", "express.js"
          ]
     },
     {
          WorkInProgress: true,
          name: "Mahal",
          link: "https://github.com/dhruvmane/mahal",
          description: "opensource spotify-esque client for locally installed music.",
          stack: [
               "Typescript", "Rust",
               "HTML", "CSS",
               "Sveltekit", "Tauri"
          ]
     },
     {
          WorkInProgress: true,
          name: "Yomu",
          link: "https://github.com/dhruvmane/yomu",
          description: "opensource content cafe for anime & comics.",
          stack: [
               "Typescript",
               "HTML", "CSS",
               "Sveltekit", "Electron"
          ]
     },
     {
          WorkInProgress: true,
          name: "Stella",
          link: "https://github.com/dhruvmane/stella",
          description: "a bookreading app.",
          stack: [
               "Typescript",
               "HTML", "CSS",
               "Sveltekit", "Electron"
          ]
     },
     {
          WorkInProgress: true,
          name: "Ink",
          link: "https://github.com/dhruvmane/ink",
          description: "Free & OpenSource Screenwriting App.",
          stack: [
               "Typescript",
               "HTML", "CSS",
               "Sveltekit", "Electron"
          ]
     },
     {
          WorkInProgress: true,
          name: "Grapify",
          link: "https://github.com/dhruvmane/grapify",
          description: "Free Budgeting App.",
          stack: [
               "Typescript",
               "HTML", "CSS",
               "Sveltekit", "Electron"
          ]
     },
     
     
]

// Import Music
import angeldust from "$lib/assets/music/angeldust.mp3"
import redfog from "$lib/assets/music/angeldust.mp3"
import wherecanigo from "$lib/assets/music/angeldust.mp3"
import aria_math from "$lib/assets/music/aria math.mp3"
import findme from "$lib/assets/music/findme.mp3"

let musicState = $state({isPlaying: false})
let CurrentlyPlaying = $state({
    id: null,
    title: "title",
    currentTimeString: "00:00",
    durationString: "00:00",
    duration: 0,
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
     }
]


export { Talents, Projects, }
export { Music, CurrentlyPlaying, musicState }