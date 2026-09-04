<script lang="ts">
    import { CurrentlyPlaying, musicState } from "$lib/modules/globals.svelte";
    import Icon from '@iconify/svelte';
    
    let isSpinning = $derived(musicState.isPlaying);

    let curPlaying = CurrentlyPlaying
    let currAudio: HTMLAudioElement = curPlaying.music!;
    let currAudioTime = $derived(Math.floor(curPlaying.time * 10) / 10)
    let currAudioLength = $derived(Math.floor(curPlaying.duration * 10) / 10)
    let progress = $derived(Math.floor((currAudioTime/currAudioLength) * 1000) / 10)

    
    $effect(() => {
        $inspect(progress)
        const audio = currAudio;
        if (!audio) return;

        currAudioLength = curPlaying.duration
        currAudioTime = curPlaying.time
    })

</script>

<h2 class="p-2 text-[12px] uppercase font-mono font-extralight">Playing from Discography</h2>
<!-- DISCOGRAPHY PLAYER -->
<button 
    onclick={() => { if (musicState.isPlaying) {musicState.isPlaying = false; CurrentlyPlaying.music?.pause()} else {musicState.isPlaying = true; CurrentlyPlaying.music?.play()}}}
    class="flex flex-col hover:cursor-pointer items-center border-white/10 border bg-green-900/25 hover:bg-green-900/50 hover:border-white/30 duration-300 rounded-xl w-50 text-ellipsis overflow-hidden">
        <div class="flex p-2">
            <!-- ICON -->
            <div class="animate-spin {!isSpinning ? '[animation-play-state:paused]' : ''}">
                <Icon icon="bi:disc" />
            </div>
        
            <!-- INFO -->
            <div class="px-2 flex items-center gap-7">
                <!-- left-to-right scrolling, like analog music player -->
                <h2 class="w-20 flex-1 font-mono text-[12px] overflow-hidden text-ellipsis uppercase text-left">{curPlaying.title}</h2>
                <h2 class="font-mono text-[12px] overflow-hidden text-ellipsis uppercase text-right">{curPlaying.currentTimeString}</h2>
            </div>
        </div>

        <!-- PROGRESS BAR -->
        <div class="w-full h-0.5 bg-white/20">
            <div class="h-full bg-[#9DFA9F]/50" style="width: {progress}%"></div>
        </div>
</button>