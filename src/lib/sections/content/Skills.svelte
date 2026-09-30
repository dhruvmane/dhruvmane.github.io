<script lang="ts">
    import Icon from '@iconify/svelte'
    import { Talents } from "$lib/modules/globals.svelte";

    let showIcons = $state(false)
    let showText = $state(false)
    
</script>

<div class="flex flex-col group gap-1 md:w-200 mx-10 md:px-10 py-2 border border-white/10 bg-white/5 duration-300 rounded-xl">
     <div class="active:group-first:border-white/10 active:group-bg-white/5 px-2.5">

         <summary class="font-title hover:cursor-pointer md:-translate-x-7.5 md:group-hover:translate-x-0 duration-500 transition flex items-center gap-2.5 font-bold text-3xl lowercase my-2.5">
             <span class="opacity-100 animate-spin group-hover:opacity-100 md:opacity-0 transition-all duration-500 text-2xl items-center flex">
                 <Icon icon="akar-icons:gear"/>
             </span>
             <span class="">
                 skills
             </span>

         </summary>

         <form class="ml-auto text-[12px] font-light flex gap-1">
             <label class="flex items-center rounded-xl border-white/20">
                 <input type="checkbox" bind:checked={showIcons} class="accent-neutral-800  border-white/5">
                 <p class="capitalize px-2 py-1">Icons</p>
             </label>
             
             <label class="flex items-center rounded-xl border-white/20">
                 <input type="checkbox" bind:checked={showText} class="accent-neutral-800  border-white/5">
                 <p class="capitalize px-2 py-1">Text</p>
             </label>
             
         </form>
         
          <div class="flex flex-wrap gap-2 pt-4">
              <!-- LANGUAGES -->
              <div class="flex flex-col w-full my-2.5">
                  <h1 class="text-[17px] absolute -translate-y-4 translate-x-2 px-2 border-white/10 border bg-main">languages</h1>
                  <div class="flex flex-wrap gap-1 border-t border-white/10 w-full py-5.5 px-2.5">
                      {#each [...Talents.languages].sort((a, b) => a.name.length - b.name.length).reverse() as talent}
                           <a href={talent.href} target="_blank" rel="noopener noreferrer" class="text-[25px] px-2 py-1 flex items-center border border-white/10 hover:border-white/50 duration-300 gap-2 hover:cursor-pointer">
                               {#if showIcons}
                                    <span class="saturate-0 text-[20px]">
                                        <Icon icon={talent.icon?.name}/>
                                    </span>
                               {:else if showText}
                                    <p class="text-[20px]">{talent.name}</p>
                               {:else if !showText && !showIcons}
                                    <span class="saturate-0 text-[20px]">
                                        <Icon icon={talent.icon?.name}/>
                                    </span>
                                    <p class="text-[20px]">{talent.name}</p>
                               {/if}
                           </a>
                      {/each}
                  </div>
               </div>

               <!-- FRAMEWORKS -->
               <div class="flex flex-col w-full my-2.5">
                   <h1 class="text-[17px] absolute -translate-y-4 translate-x-2 px-2 border-white/10 border bg-main">frameworks</h1>
                   <div class="flex flex-wrap gap-1 border-t border-white/10 w-full py-5.5 px-2.5">
                       {#each [...Talents.frameworks].sort((a, b) => a.name.length - b.name.length).reverse() as talent}
                            <a href={talent.href} target="_blank" rel="noopener noreferrer" class="text-[25px] px-2 py-1 flex items-center border border-white/10 hover:border-white/50 duration-300 gap-2 hover:cursor-pointer">
                                <span class="saturate-0 text-[20px]">
                                    <Icon icon={talent.icon?.name}/>
                                </span>
                                <p class="text-[20px]">{talent.name}</p>
                            </a>
                       {/each}
                   </div>
               </div>

               <!-- PACKAGES -->
               <div class="flex flex-col w-full my-2.5">
                   <h1 class="text-[17px] absolute -translate-y-4 translate-x-2 px-2 border-white/10 border bg-main">tech</h1>
                   <div class="flex flex-wrap gap-1 border-t border-white/10 w-full py-5.5 px-2.5">
                       {#each [...Talents.packages].sort((a, b) => a.name.length - b.name.length).reverse() as talent}
                            <a href={talent.href} target="_blank" rel="noopener noreferrer" class="text-[25px] px-2 py-1 flex items-center border border-white/10 hover:border-white/50 duration-300 gap-2 hover:cursor-pointer">
                                <span class="saturate-0 text-[20px]">
                                    <Icon icon={talent.icon?.name}/>
                                </span>
                                <p class="text-[20px]">{talent.name}</p>
                            </a>
                       {/each}
                   </div>
                </div>
                
               <!-- MISC -->
               <div class="flex flex-col w-full my-2.5">
                   <h1 class="text-[17px] absolute -translate-y-4 translate-x-2 px-2 border-white/10 border bg-main">miscellaneous</h1>
                   <div class="flex flex-wrap gap-1 border-t border-white/10 w-full py-5.5 px-2.5">
                       {#each [...Talents.misc].sort((a, b) => a.name.length - b.name.length).reverse() as talent}
                           <a href={talent.href} target="_blank" rel="noopener noreferrer" class="text-[25px] px-2 py-1 border flex items-center border-white/10 hover:border-white/50 duration-300 gap-2 hover:cursor-pointer">
                               <span class="saturate-0 text-[20px]">
                                   <Icon icon={talent.icon?.name}/>
                               </span>
                               <p class="text-[20px]">{talent.name}</p>
                           </a>
                       {/each}
                   </div>
               </div>
          </div>
     </div>
</div>