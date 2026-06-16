<script>
     import Tags from '$lib/sections/Tags.svelte'
     import { Projects } from "$lib/modules/globals.svelte";
     import LinkSvg from '$lib/assets/icons/link.svg'


</script>

<h1 id="projects" class="text-3xl font-bold lowercase my-5">Projects <span class="text-neutral-700">——————————————————————</span></h1>
<main class="grid grid-cols-3 w-[800px] gap-4 ">
     {#each Projects as project}
          <div class="relative w-[260px] bg-neutral-900 p-2 border-4 border-black shadow-[4px_4px_0px] shadow-black">
               {#if project.HackathonWinner === true}
                    <p class="absolute right-2 bottom-2 text-3xl">🏆</p>
               {/if}

               {#if project.WorkInProgress === true}
                    <p class="absolute right-2 bottom-2 text-3xl">🛠</p>
               {/if}
               
               <h1 class="m-2 flex gap-x-1">{project.name} <img src={LinkSvg} alt="" class="invert size-5 translate-y-0.5"></h1>
               <p class="m-2 min-h-[100px]">{project.description}</p>
               {#each project.stack as stack}
                    <Tags label={stack}/>
               {/each}
          </div>
     {/each}
</main>