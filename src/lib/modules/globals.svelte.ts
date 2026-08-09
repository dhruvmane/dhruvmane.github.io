let Talents = [
     { name: "Typescript", href: "https://www.typescriptlang.org/"},
     { name: "Javascript", href: "/"},
     { name: "HTML", href: "/"},
     { name: "CSS", href: "/"},
     { name: "Node.js", href: "https://nodejs.org/en"},
     { name: "expressjs", href: "https://expressjs.com/"},
     { name: "fastify", href: "https://fastify.dev/"},
     { name: "Postgres", href: "https://www.postgresql.org/"},
     { name: "drizzle-orm", href: "https://orm.drizzle.team/"},
     { name: "prisma-orm", href: "https://www.prisma.io/docs/orm"},
     { name: "React/PReact/NextJS", href: "https://react.dev/"},
     { name: "Svelte/Sveltekit", href: "https://svelte.dev/"},
     { name: "Electron", href: "https://www.electronjs.org/"},
     { name: "Tauri", href: "https://v2.tauri.app/"},
     { name: "FL Studio", href: "https://www.image-line.com/"},
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
          name: "Mangase",
          link: "https://github.com/the-mangase-group/website",
          description: "Revolutionizing Digital Mangas.",
          stack: [
               "Typescript", "fastify",
               "POSTGRES-SQL", "DRIZZLE-ORM",
               "HTML", "CSS",
               "Sveltekit"
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