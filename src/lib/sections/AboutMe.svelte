<script>
     import { Talents } from "$lib/modules/globals.svelte";
     import Tags from "$lib/sections/Tags.svelte";
     import ProfilePic from '$lib/assets/icons/dhruv.jpg'
     import LinkSvg from '$lib/assets/icons/link.svg'

</script>

<!-- Personal Information -->
<h1 id="about-me" class="text-3xl font-bold lowercase my-5">about me <span class="text-neutral-700">—————————————————————</span></h1>
<main class="p-10 bg-neutral-900 w-[800px] duration-300 shadow-[10px_10px_0px] shadow-black border-4 border-black select-none">

     <div class="flex mb-10 gap-x-10 border-4 border-black shadow-[5px_5px_0px] shadow-black">
          <a target="_blank" rel="noopener noreferrer" href="https://github.com/dhruvmane" class="hover:scale-102">
               <img src={ProfilePic} alt="Profile" class="m-3 size-[150px] border-4 border-black"/>
          </a>
          <div class="mt-6">
               <h1 class="m-2 font-bold text-5xl">Hi, I'm <a href="https://github.com/dhruvmane" class="hover:underline">dhruv</a>.</h1>
               <p class="m-2 text-sm font-light">I am a Computer Science Student & a Music Producer.</p>
          </div>
     </div>
     
     <div class="flex gap-x-4">
          <div class="p-2 border-4 shadow-[5px_5px_0px] w-1/2 shadow-black border-black">
               <h1 class="underline m-2 text-2xl font-bold">skills.</h1>
               <div class="flex flex-wrap gap-2 p-2">
                    {#each Talents as talent}
                         <p class="hover:underline hover:cursor-pointer">{talent}</p>
                    {/each}
               </div>
          </div>
          <div class="p-2 border-4 shadow-[5px_5px_0px] w-1/2 shadow-black border-black">
               <h1 class="underline m-2 text-2xl font-bold flex gap-x-1">contact <img src={LinkSvg} alt="" class="invert size-5 translate-y-2"></h1>
               <div class="flex flex-wrap gap-2 p-2">
                    <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/dhruv-mane-1b4b4935b/" class="flex gap-x-0.5 hover:underline">LinkedIn</a>
                    <a target="_blank" rel="noopener noreferrer" href="https://github.com/dhruvmane" class="hover:underline">Github</a>
                    <a target="_blank" rel="noopener noreferrer" href="http://instagram.com/dhruvvmh" class="hover:underline">Instagram</a>
               </div>
          </div>
          
     </div>
</main>