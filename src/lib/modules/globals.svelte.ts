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
import angeldust from "$lib/assets/music/light@thetunnel.mp3"
let Music = [
     {    
          title: "angel dust.",
          duration: "02:53",
          src: angeldust
     },
     {    
          title: "redfogghhvgsx=\\",
          duration: "02:23",
          src: angeldust
     },
     {    
          title: "WHERE CAN I GO?",
          duration: "04:53",
          src: angeldust
     },
     {    
          title: "SCANDAL",
          duration: "01:51",
          src: angeldust
     },
     {    
          title: "find me",
          duration: "02:33",
          src: angeldust
     }
]

export { Talents, Projects, Music }