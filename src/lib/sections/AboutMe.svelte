<script>
     import { Talents, Links, details } from "$lib/modules/globals.svelte";
     import ProfilePic from '$lib/assets/icons/dhruv.jpg'
     import Icon from '@iconify/svelte'
     
</script>

<!-- Personal Information -->
<!-- <h2 id="about-me" class="text-3xl font-bold lowercase my-5">about me <span class="text-neutral-700">—————————————————————</span></h2> -->
<main id="about-me" class="group p-10 md:w-200 duration-300 ">
    
    <!-- INTRODUCTION -->
     <div class="flex md:flex mb-10 gap-x-10">
          <a target="_blank" rel="noopener noreferrer" href="https://github.com/dhruvmane" class="flex items-center">
               <img src={ProfilePic} alt="Profile" class="md:m-3 shrink-0 size-40 md:size-40 border-4 border-black"/>
          </a>
          <div class="md:mt-6 flex flex-col gap-2 md:gap-0">
               <div class="w-50 md:w-full flex flex-col p-2">
                   <h1 class="font-bold text-4xl md:text-6xl">Hi, I'm <a href="https://github.com/dhruvmane">dhruv</a>.</h1>
                   <p  class="flex-1 text-sm font-medium my-5 md:my-0 max-w-100">{details.desc}</p>
               </div>
               <div class="flex flex-wrap gap-2.5 md:p-2 text-xl px-2">
                    {#each Links as link}
                        <a target="_blank" rel="noopener noreferrer" href={link.href} class="flex gap-x-0.5 hover:underline hover:scale-105 duration-200">
                            <Icon icon={link.icon.name}/>
                        </a>
                    {/each}
               </div>
          </div>
     </div>

     <div class="flex flex-col gap-4">
          <div class="p-4">

              <div class="font-title md:-translate-x-7.5 md:group-hover:translate-x-0 duration-500 transition  flex items-center gap-2.5 font-bold text-3xl lowercase my-1">
                  <span class="md:opacity-0 animate-spin group-hover:opacity-100 transition-all duration-500 text-2xl items-center flex">
                      <Icon icon="akar-icons:gear"/>
                  </span>
                  <span class="-translate-y-1">
                      skills
                  </span>
              </div>
              
               <div class="flex flex-wrap gap-2 pt-4">
                   <!-- LANGUAGES -->
                   <div class="flex flex-col w-full my-2.5">
                       <h1 class="text-[20px] absolute -translate-y-4 translate-x-2 px-2 border-white/10 border bg-main">languages</h1>
                       <div class="flex flex-wrap gap-1.5 border-t border-white/10 w-full py-5.5 px-2.5">
                           {#each Talents.languages as talent}
                                <a href={talent.href} target="_blank" rel="noopener noreferrer" class="text-[20px] flex items-center p-2 border border-white/10 hover:border-white/50 duration-300 gap-2 hover:cursor-pointer">
                                    <Icon icon={talent.icon?.name}/>
                                    {talent.name}
                                </a>
                           {/each}
                       </div>
                    </div>

                    <!-- FRAMEWORKS -->
                    <div class="flex flex-col w-full my-2.5">
                        <h1 class="text-[20px] absolute -translate-y-4 translate-x-2 px-2 border-white/10 border bg-main">frameworks</h1>
                        <div class="flex flex-wrap gap-1.5 border-t border-white/10 w-full py-5.5 px-2.5">
                            {#each Talents.frameworks as talent}
                                 <a href={talent.href} target="_blank" rel="noopener noreferrer" class="text-[20px] flex items-center p-2 border border-white/10 hover:border-white/50 duration-300 gap-2 hover:cursor-pointer">
                                     <Icon icon={talent.icon?.name}/>
                                     {talent.name}
                                 </a>
                            {/each}
                        </div>
                    </div>

                    <!-- PACKAGES -->
                    <div class="flex flex-col w-full my-2.5">
                        <h1 class="text-[20px] absolute -translate-y-4 translate-x-2 px-2 border-white/10 border bg-main">tech</h1>
                        <div class="flex flex-wrap gap-1.5 border-t border-white/10 w-full py-5.5 px-2.5">
                            {#each Talents.packages as talent}
                                 <a href={talent.href} target="_blank" rel="noopener noreferrer" class="text-[20px] flex items-center p-2 border border-white/10 hover:border-white/50 duration-300 gap-2 hover:cursor-pointer">
                                     <Icon icon={talent.icon?.name}/>
                                     {talent.name}
                                 </a>
                            {/each}
                        </div>
                     </div>
                     
                    <!-- MISC -->
                    <div class="flex flex-col w-full my-2.5">
                        <h1 class="text-[20px] absolute -translate-y-4 translate-x-2 px-2 border-white/10 border bg-main">miscellaneous</h1>
                        <div class="flex flex-wrap gap-1.5 border-t border-white/10 w-full py-5.5 px-2.5">
                            {#each Talents.misc as talent}
                                <a href={talent.href} target="_blank" rel="noopener noreferrer" class="text-[20px] flex items-center p-2 border border-white/10 hover:border-white/50 duration-300 gap-2 hover:cursor-pointer">
                                    <Icon icon={talent.icon?.name}/>
                                    {talent.name}
                                </a>
                            {/each}
                        </div>
                    </div>
               </div>
          </div>
     </div>
</main>
