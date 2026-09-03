<script>
     import { Talents } from "$lib/modules/globals.svelte";
     import ProfilePic from '$lib/assets/icons/dhruv.jpg'
     import LinkSvg from '$lib/assets/icons/link.svg'
     import Icon from '@iconify/svelte'
     
</script>

<!-- Personal Information -->
<!-- <h2 id="about-me" class="text-3xl font-bold lowercase my-5">about me <span class="text-neutral-700">—————————————————————</span></h2> -->
<main class="p-10 w-200 duration-300 select-none">

    <!-- INTRODUCTION -->
     <div class="flex mb-5 gap-x-10">
          <a target="_blank" rel="noopener noreferrer" href="https://github.com/dhruvmane" class="">
               <img src={ProfilePic} alt="Profile" class="m-3 size-37.5 border-4 border-black"/>
          </a>
          <div class="mt-6 items-center">
               <h1 class="m-2 font-bold text-5xl">Hi, I'm <a href="https://github.com/dhruvmane" class="hover:underline">dhruv</a>.</h1>
               <p class="m-2 text-sm font-medium">I am a Computer Science Student & a Music Producer.</p>
               <div class="flex flex-wrap gap-2.5 p-2 text-2xl">
                    <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/dhruv-mane-1b4b4935b/" class="flex gap-x-0.5 hover:underline hover:scale-105 duration-200">
                        <Icon icon="akar-icons:linkedin-box-fill"/>
                    </a>
                    <a target="_blank" rel="noopener noreferrer" href="https://github.com/dhruvmane" class="hover:scale-105 duration-200 hover:underline">
                        <Icon icon="akar-icons:github-fill"/>
                    </a>
                    <a target="_blank" rel="noopener noreferrer" href="https://instagram.com/dhruvvmh" class="hover:scale-105 duration-200 hover:underline">
                        <Icon icon="akar-icons:instagram-fill"/>
                    </a>
                    <a target="_blank" rel="noopener noreferrer" href="https://x.com/dhruvvmh" class="hover:scale-105 duration-200 hover:underline">
                        <Icon icon="bi:twitter-x"/>
                    </a>
               </div>
          </div>
     </div>

     <div class="flex flex-col gap-4">
          <div class="p-4">
               <h1 class="text-2xl font-bold">skills</h1>
               <div class="flex flex-wrap gap-2 pt-4">
                   <!-- LANGUAGES -->
                   <div class="flex flex-col w-full my-2.5">
                       <h1 class="text-[20px] absolute -translate-y-4 translate-x-2 px-2 border-black bg-main">languages</h1>
                       <div class="flex flex-wrap gap-1.5 border-t border-white/10 w-full py-5">
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
                        <h1 class="text-[20px] absolute -translate-y-4 translate-x-2 px-2 border-black bg-main">frameworks</h1>
                        <div class="flex flex-wrap gap-1.5 border-t border-white/10 w-full py-5 px-2.5">
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
                        <h1 class="text-[20px] absolute -translate-y-4 translate-x-2 px-2 border-black bg-main">tech</h1>
                        <div class="flex flex-wrap gap-1.5 border-t border-white/10 w-full py-5 px-2.5">
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
                        <h1 class="text-[20px] absolute -translate-y-4 translate-x-2 px-2 border-black bg-main">miscellaneous</h1>
                        <div class="flex flex-wrap gap-1.5 border-t border-white/10 w-full py-5 px-2.5">
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
