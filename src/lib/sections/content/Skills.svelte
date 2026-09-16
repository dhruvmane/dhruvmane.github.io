<script>
    import Icon from '@iconify/svelte'
    import { Talents } from "$lib/modules/globals.svelte";
    
</script>

<div class="flex flex-col group gap-1 md:w-200 px-10">
     <div class="p-4">

         <div class="font-title md:-translate-x-7.5 md:group-hover:translate-x-0 duration-500 transition  flex items-center gap-2.5 font-bold text-3xl lowercase my-1">
             <span class="md20pacity-0 animate-spin group-hover:opacity-100  opacity-0 transition-all duration-500 text-2xl items-center flex">
                 <Icon icon="akar-icons:gear"/>
             </span>
             <span class="-translate-y-1">
                 skills
             </span>
         </div>
         
          <div class="flex flex-wrap gap-2 pt-4">
              <!-- LANGUAGES -->
              <div class="flex flex-col w-full my-2.5">
                  <h1 class="text-[17px] absolute -translate-y-4 translate-x-2 px-2 border-white/10 border bg-main">languages</h1>
                  <div class="flex flex-wrap gap-1 border-t border-white/10 w-full py-5.5 px-2.5">
                      {#each [...Talents.languages].sort((a, b) => a.name.length - b.name.length).reverse() as talent}
                           <a href={talent.href} target="_blank" rel="noopener noreferrer" class="text-[25px] flex items-center border px-2 py-1 border-white/10 hover:border-white/50 duration-300 gap-2 hover:cursor-pointer">
                               <span class="saturate-0 text-[20px]">
                                   <Icon icon={talent.icon?.name}/>
                               </span>
                               <p class="text-[20px]">{talent.name}</p>
                           </a>
                      {/each}
                  </div>
               </div>

               <!-- FRAMEWORKS -->
               <div class="flex flex-col w-full my-2.5">
                   <h1 class="text-[17px] absolute -translate-y-4 translate-x-2 px-2 border-white/10 border bg-main">frameworks</h1>
                   <div class="flex flex-wrap gap-1 border-t border-white/10 w-full py-5.5 px-2.5">
                       {#each [...Talents.frameworks].sort((a, b) => a.name.length - b.name.length).reverse() as talent}
                            <a href={talent.href} target="_blank" rel="noopener noreferrer" class="text-[25px] flex items-center border px-2 py-1 border-white/10 hover:border-white/50 duration-300 gap-2 hover:cursor-pointer">
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
                            <a href={talent.href} target="_blank" rel="noopener noreferrer" class="text-[25px] flex items-center border px-2 py-1 border-white/10 hover:border-white/50 duration-300 gap-2 hover:cursor-pointer">
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
                           <a href={talent.href} target="_blank" rel="noopener noreferrer" class="text-[25px] border px-2 py-1 flex items-center border-white/10 hover:border-white/50 duration-300 gap-2 hover:cursor-pointer">
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