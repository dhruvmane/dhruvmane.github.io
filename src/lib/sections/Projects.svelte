<script>
     import Tags from '$lib/components/Tags.svelte'
     import { Projects } from "$lib/modules/globals.svelte";
     import LinkSvg from '$lib/assets/icons/link.svg'
     import Icon from '@iconify/svelte';

</script>

<div id="projects" class="py-5">
    
    <div class="font-title -translate-x-7.5 hover:translate-x-0 duration-500 transition group flex items-center gap-2.5 font-bold text-3xl lowercase my-5">
        <span class="opacity-0 group-hover:opacity-100 transition-all duration-500 text-xl items-center flex">
            <Icon icon="grommet-icons:projects"/>
        </span>
        <span class="-translate-y-1">
            projects
        </span>
    </div>
    
    <!-- <h2 id="projects" class="text-3xl font-bold lowercase my-5">Projects <span class="text-neutral-700">——————————————————————</span></h2> -->
    <main class="grid grid-cols-3 w-200 gap-4 ">
         {#each Projects as project}
              <div class="relative flex flex-col w-65 h-full p-4 bg-white/3 border border-white/10 hover:border-white/30 hover:bg-white/5 duration-500">
                   <a class="text-3xl flex gap-x-1 hover:underline hover:cursor-pointer" target="_blank" rel="noopener noreferrer" href={project.link}>
                       {project.name} 
                       <img src={LinkSvg} alt="" class="invert size-5 translate-y-0.5">
                   </a>
                   {#if project.HackathonWinner === true && project.HackathonInfo}
                        <p class="text-[9px] font-ui"> Won <span class="text-[#EBF2E1]">{project.HackathonInfo.name}</span> @ <a class="hover:underline" href={project.HackathonInfo.host.href}>{project.HackathonInfo.host.name}</a></p>
                   {/if}
                   <p class="my-2.5 min-h-25">{project.description}</p>
                   <div class="flex flex-wrap-reverse">
                        {#each [...project.stack].reverse() as stack}
                             <Tags label={stack}/>
                        {/each}
                   </div>
              </div>
         {/each}
    </main>

</div>