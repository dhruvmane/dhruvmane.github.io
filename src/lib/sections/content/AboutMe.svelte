<script lang="ts">
     import { Talents, Links, details } from "$lib/modules/globals.svelte";
     import ProfilePic from '$lib/assets/images/dhruv.jpg'
     import imdhruv from '$lib/assets/icons/imdhruv.svg'
     import Icon from '@iconify/svelte'
     import { marked } from "marked";
     import DOMPurify from 'dompurify';
     import aboutMeMarkdown from "$lib/texts/about-me.md?raw";
     import { onMount } from "svelte";
     import Skills from "./Skills.svelte";

     
     let knowMeBetter = $state(false);
     let extraneousInformation = $state("");

     
     onMount(async () => {
         const raw = await marked.parse(aboutMeMarkdown);
         const purified = DOMPurify.sanitize(raw);
         extraneousInformation = purified;
     })

     const email = "dhruvmaneofficial@gmail.com"
     
     async function copyText() {
         try {
             await navigator.clipboard.writeText(email)
             alert('Copied email to clipboard!')
         } catch (err) {
             console.log(err)
         }
     }
     
</script>

<!-- Personal Information -->
<!-- <h2 id="about-me" class="text-3xl font-bold lowercase my-5">about me <span class="text-neutral-700">—————————————————————</span></h2> -->
<main id="about-me" class="group p-6 md:px-10 md:pt-10 md:w-200 w-full duration-300 ">
    
    <!-- INTRODUCTION -->
     <div class="flex flex-col md:flex-row mb-5 gap-x-10 gap-y-4">
          <a target="_blank" rel="noopener noreferrer" href="https://github.com/dhruvmane" class="flex items-center">
               <img src={ProfilePic} alt="Profile" class="md:m-3 shrink-0 w-25 md:w-50 saturate-0 border border-white/7 duration-300 transition-transform -skew-y-3 -skew-x-ui hover:-skew-y-ui hover:-skew-x-6"/>
          </a>
          <div class="md:mt-6 flex flex-col gap-2 md:gap-0">
               <div class="w-full flex flex-col p-2">
                   <img src={imdhruv} alt="intro" class="-skew-y-2 -translate-y-1 w-full max-w-90">
                   <p class="flex-1 text-sm font-medium my-5 md:my-0 max-w-100">{details.desc}</p>
               </div>

               <!-- EXTRANEOUS INFORMATION -->
               {#if knowMeBetter}
                <div class="my-5">
                    {@html extraneousInformation}
                </div>
               {/if}
               <div class="flex flex-wrap gap-2.5 md:p-2 text-xl px-2">
                    {#each Links as link}
                        <a target="_blank" rel="noopener noreferrer" href={link.href} class="flex gap-x-0.5 hover:underline hover:scale-105 duration-200">
                            <Icon icon={link.icon.name}/>
                        </a>
                    {/each}
                    <button onclick={() => {copyText()}} class="text-[25px] hover:scale-105 hover:cursor-pointer -translate-y-1 relative group">
                        <Icon icon="bxl:gmail" />
                    </button>
                </div>
          </div>
     </div>

     <!-- EXTRA LINKS -->
     <!-- <div class="w-full">
         <ul class="flex gap-5 justify-center">
             <li class="">
                 <button onclick={() => {toggleKMB()}} class="flex gap-1 items-center opacity-50 px-2 py-1 hover:underline hover:cursor-pointer font-ui">Know me Better<Icon icon="akar-icons:arrow-right"/></button>
             </li>
             <li class="">
                 <a href="/blogs" class="flex gap-1 items-center opacity-50 px-2 py-1 hover:underline hover:cursor-pointer font-ui">My Blogs<Icon icon="akar-icons:arrow-right"/></a>
             </li>
         </ul>
     </div> -->
     
     
</main>
