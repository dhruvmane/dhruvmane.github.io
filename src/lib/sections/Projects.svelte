<script>
     import Tags from '$lib/components/Tags.svelte'
     import { Projects } from "$lib/modules/globals.svelte";
     import LinkSvg from '$lib/assets/icons/link.svg'
     import Icon from '@iconify/svelte';

</script>

<div id="projects" class="group py-5 w-120 md:w-200 p-10">
    
    <div class="font-title md:-translate-x-7.5 md:group-hover:translate-x-0 duration-500 transition  flex items-center gap-2.5 font-bold text-3xl lowercase my-5">
        <span class="md:opacity-0 group-hover:opacity-100 transition-all duration-500 text-xl items-center flex">
            <Icon icon="grommet-icons:projects"/>
        </span>
        <span class="-translate-y-1">
            projects
        </span>
    </div>
    
    <!-- <h2 id="projects" class="text-3xl font-bold lowercase my-5">Projects <span class="text-neutral-700">——————————————————————</span></h2> -->
    <main class="grid grid-cols-1 md:grid-cols-3 md:w-200 gap-4">
         {#each Projects as project}
              <a  target="_blank" rel="noopener noreferrer" href={project.link} class="flex flex-col hover:cursor-pointer w-65 h-full p-4 bg-white/3 border border-white/10 hover:border-white/30 hover:bg-white/5 duration-500">
                   <div class="text-3xl flex gap-x-1">
                       {project.name} 
                       <img src={LinkSvg} alt="" class="invert size-5 translate-y-0.5">
                   </div>
                   {#if project.HackathonWinner === true && project.HackathonInfo}
                        <p class="text-[9px] font-ui"> Won <span class="text-[#EBF2E1]">{project.HackathonInfo.name}</span> @ <a class="hover:underline" href={project.HackathonInfo.host.href}>{project.HackathonInfo.host.name}</a></p>
                   {/if}
                   <p class="my-2.5 min-h-25">{project.description}</p>
                   <div class="flex flex-wrap-reverse">
                        {#each [...project.stack].reverse() as stack}
                             <Tags label={stack}/>
                        {/each}
                   </div>
              </a>
         {/each}
    </main>

</div>