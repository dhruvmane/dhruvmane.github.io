<script>
     import Tags from '$lib/components/Tags.svelte'
     import { Projects } from "$lib/modules/globals.svelte";
     import LinkSvg from '$lib/assets/icons/link.svg'
     import Icon from '@iconify/svelte';

     let ProjectsMinVisible = $state(3)
     let ProjectsVisibleCount = $derived(ProjectsMinVisible)
     let ProjectsVisible = $derived(Projects.slice(0, ProjectsVisibleCount));
     let showAll = $state(false)

     function toggleShowAll() {
         showAll = !showAll
         if (showAll) {
             ProjectsVisibleCount = 999;
         } else {
             ProjectsVisibleCount = ProjectsMinVisible
         }
     }
</script>

<div id="projects" class="group py-5 w-full md:w-200 p-6 md:p-10">

    <div class="font-title md:-translate-x-7.5 md:group-hover:translate-x-0 duration-500 transition  flex items-center gap-2.5 font-bold text-3xl lowercase my-5">
        <span class="md:opacity-0 group-hover:opacity-100 transition-all duration-500 text-xl items-center flex">
            <Icon icon="grommet-icons:projects"/>
        </span>
        <span class="-translate-y-1">
            projects
        </span>
    </div>

    <main class="grid grid-cols-1 md:grid-cols-3 md:w-200 gap-2">
         {#each ProjectsVisible as project}
              <a target="_blank" rel="noopener noreferrer" href={project.link} class="flex backdrop-blur-[1px] flex-col hover:cursor-pointer w-full md:w-65 h-full p-4 bg-white/3 border border-white/10 hover:border-white/30 hover:bg-white/5 duration-500">
                   <div class="">
                       <div class="text-3xl flex gap-x-1">
                           {project.name}
                           <img src={LinkSvg} alt="" class="invert size-5 translate-y-0.5">
                       </div>
                       {#if project.tagline}
                            <p class="text-[9px] font-ui text-white/60">{project.tagline}</p>
                       {/if}
                   </div>
                   <p class="my-2.5 min-h-25">{project.description}</p>
                   <div class="flex flex-wrap-reverse mt-auto">
                        {#each [...project.stack].reverse().sort((a, b) => a.length - b.length) as stack}
                            <Tags label={stack}/>
                        {/each}
                   </div>
              </a>
         {/each}
    </main>

    {#if Projects.length > ProjectsMinVisible}
    <button onclick={() => {toggleShowAll()}} class="text-center min-w-24.5 mt-2 px-2 py-1 border border-white/10 bg-white/5 hover:bg-white/10 duration-300 hover:cursor-pointer">
        {#if !showAll}
            Show More
        {:else}
            Hide
        {/if}
    </button>
    {/if}

</div>
