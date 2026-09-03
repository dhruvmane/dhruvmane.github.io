export const details = {
    desc: "I am a Computer Science Student (excalidraw lover) & a Music Producer."
}

export const Links = [
    { name: "Spotify", href: "https://open.spotify.com/artist/2cJZ9m2iORNR1T4on8ZKBZ", icon: {name: "ant-design:spotify-filled"}},
    { name: "LinkedIn", href: "https://www.linkedin.com/in/dhruv-mane-1b4b4935b/", icon: {name: "akar-icons:linkedin-box-fill"}},
    { name: "Github", href: "https://github.com/dhruvmane", icon: {name: "akar-icons:github-fill"}},
    { name: "Instagram", href: "https://instagram.com/dhruvvmh", icon: {name: "akar-icons:instagram-fill"}},
    { name: "X", href: "https://x.com/dhruvvmh", icon: {name: "bi:twitter-x"}},
    { name: "Bluesky", href: "https://bsky.app/profile/dhruvmane.bsky.social", icon: {name: "bi:bluesky"}},
]

let Talents = { 
    languages: [
        { name: "Rust", href: "https://rust-lang.org/", icon: { name: "fa7-brands:rust" }},
        { name: "HTML", href: "#", icon: { name: "flowbite:html-solid" }},
        { name: "CSS", href: "#", icon: { name: "flowbite:css-solid" }},
        { name: "Go", href: "https://go.dev/", icon: { name: "fa6-brands:golang" }},
        { name: "Python", href: "https://www.python.org/", icon: { name: "akar-icons:python-fill" }},
        { name: "C", href: "#", icon: { name: "devicon:c" }},
        { name: "C#", href: "#", icon: { name: "devicon-plain:csharp" }},
        { name: "Java", href: "https://java.com/", icon: { name: "bxl:java" }},
        { name: "Typescript", href: "https://www.typescriptlang.org/", icon: { name: "bxl:typescript" } },
        { name: "Javascript", href: "#", icon: { name: "bxl:javascript" }},
    ],
    frameworks: [
        { name: "React/NextJS", href: "https://react.dev/", icon: { name: "bxl:react" }},
        { name: "Preact", href: "https://preactjs.com/", icon: { name: "vscode-icons:file-type-preact" }},
        { name: "Svelte/Sveltekit", href: "https://svelte.dev/", icon: { name: "bxl:svelte" }},
        { name: "Qwik", href: "https://qwik.dev/", icon: { name: "devicon-plain:qwik" }},
        { name: "Astro", href: "https://astro.build/", icon: { name: "devicon-plain:astro" }},
        { name: "SolidJS", href: "https://www.solidjs.com/", icon: { name: "devicon:solidjs" }},
        { name: "Electron", href: "https://www.electronjs.org/", icon: { name: "cib:electron" }},
        { name: "Electrobun", href: "https://blackboard.sh/electrobun/", icon: { name: "devicon:bun" }},
        { name: "Deno Desktop", href: "https://docs.deno.com/runtime/desktop/", icon: { name: "bxl:deno" }},
        { name: "Tauri", href: "https://v2.tauri.app/", icon: { name: "devicon-plain:tauri" }},
        { name: "Capacitor", href: "https://capacitorjs.com/", icon: { name: "devicon:capacitor" }},
        { name: "React Native", href: "https://reactnative.dev/", icon: { name: "bxl:react" }},
    ],
    packages: [
        { name: "git", href: "https://git-scm.com/", icon: { name: "bi:git" }},
        { name: "Github Actions", href: "#", icon: { name: "thesvg:github-actions" }},
        { name: "Docker", href: "#", icon: { name: "bxl:docker" }},
        { name: "express", href: "https://expressjs.com/", icon: { name: "lineicons:expressjs" }},
        { name: "fastify", href: "https://fastify.dev/", icon: { name: "devicon-plain:fastify" }},
        { name: "Node.js", href: "https://nodejs.org/en", icon: { name: "bxl:nodejs" }},
        { name: "Bun", href: "https://bun.sh/", icon: { name: "devicon:bun" }},
        { name: "Deno", href: "https://deno.com/", icon: { name: "bxl:deno" }},
        { name: "drizzle-orm", href: "https://orm.drizzle.team/", icon: { name: "bxl:drizzle-orm" }},
        { name: "PostgreSQL", href: "https://www.postgresql.org/", icon: { name: "cib:postgresql" }},
        { name: "MongoDB", href: "https://www.mongodb.com/", icon: { name: "bxl:mongodb" }},
        { name: "Redis", href: "https://redis.io/", icon: { name: "devicon-plain:redis" }},
    ],
    misc: [
        { name: "FL Studio", href: "https://www.image-line.com/", icon: { name: "arcticons:fl-studio-mobile" }},
        { name: "Premiere Pro", href: "#", icon: { name: "streamline-logos:adobe-premiere-pro-logo-block" }},
        { name: "Figma", href: "#", icon: { name: "bxl:figma" }},
        { name: "Blockbench", href: "#", icon: { name: "simple-icons:blockbench" }},
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


// CLOCK RELATED

export enum Day {
    "SUNDAY" = 0,
    "MONDAY" = 1,
    "TUESDAY" = 2,
    "WEDNESDAY" = 3,
    "THURSDAY" = 4,
    "FRIDAY" = 5,
    "SATURDAY" = 6,
}

export enum Month {
    "JANUARY" = 0,
    "FEBRUARY" = 1,
    "MARCH" = 2,
    "APRIL" = 3,
    "MAY" = 4,
    "JUNE" = 5,
    "JULY" = 6,
    "AUGUST" = 7,
    "SEPTEMBER" = 8,
    "OCTOBER" = 9,
    "NOVEMBER" = 10,
    "DECEMBER" = 11,
}
