let Talents = { 
    languages: [
        { name: "Rust", href: "https://rust-lang.org/", icon: { name: "fa7-brands:rust" }},
        { name: "HTML", href: "/", icon: { name: "flowbite:html-solid" }},
        { name: "CSS", href: "/", icon: { name: "flowbite:css-solid" }},
        { name: "Go", href: "https://go.dev/", icon: { name: "fa6-brands:golang" }},
        { name: "Typescript", href: "https://www.typescriptlang.org/", icon: { name: "bxl:typescript" } },
        { name: "Javascript", href: "/", icon: { name: "bxl:javascript" }},
    ],
    frameworks: [
        { name: "React/PReact/NextJS", href: "https://react.dev/", icon: { name: "bxl:react" }},
        { name: "Svelte/Sveltekit", href: "https://svelte.dev/", icon: { name: "bxl:svelte" }},
        { name: "SolidJS", href: "https://www.solidjs.com/", icon: { name: "devicon:solidjs" }},
        { name: "Electron", href: "https://www.electronjs.org/", icon: { name: "cib:electron" }},
        { name: "Tauri", href: "https://v2.tauri.app/", icon: { name: "devicon-plain:tauri" }},
    ],
    packages: [
        { name: "git", href: "https://git-scm.com/", icon: { name: "bi:git" }},
        { name: "expressjs", href: "https://expressjs.com/", icon: { name: "lineicons:expressjs" }},
        { name: "fastify", href: "https://fastify.dev/", icon: { name: "devicon-plain:fastify" }},
        { name: "Node.js", href: "https://nodejs.org/en", icon: { name: "bxl:nodejs" }},
        { name: "PostgreSQL", href: "https://www.postgresql.org/", icon: { name: "cib:postgresql" }},
        { name: "drizzle-orm", href: "https://orm.drizzle.team/", icon: { name: "bxl:drizzle-orm" }},
    ],
    misc: [
        { name: "FL Studio", href: "https://www.image-line.com/", icon: { name: "arcticons:fl-studio-mobile" }},
    ],
}

let Projects = [
     {
        HackathonWinner: true,
        HackathonInfo: {
            name: "Hacktoon 2026",
            host: {
                name: "AIKTC",
                href: "https://aiktc.ac.in/"
            }
        }, 
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
               "PostgresSQL", "drizzle",
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