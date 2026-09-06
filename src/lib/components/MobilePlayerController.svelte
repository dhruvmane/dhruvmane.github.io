<!-- Similar to Spotify's Controller but only on mobile -->
<script lang="ts">
    import { toggleMusic, CurrentlyPlaying, musicState } from "$lib/modules/music.svelte";
    import Icon from '@iconify/svelte';
    
    
    let isSpinning = $derived(musicState.isPlaying);

    let curPlaying = CurrentlyPlaying
    let currAudio: HTMLAudioElement = curPlaying.music!;
    let currAudioTime = $derived(Math.floor(curPlaying.time * 10) / 10)
    let currAudioLength = $derived(Math.floor(curPlaying.duration * 10) / 10)
    let progress = $derived(Math.floor((currAudioTime/currAudioLength) * 1000) / 10)


    $effect(() => {
        const audio = currAudio;
        if (!audio) return;

        currAudioLength = curPlaying.duration
        currAudioTime = curPlaying.time
    })

</script>

<!-- DISCOGRAPHY PLAYER -->
<button
    onclick={() => { if (musicState.isPlaying) {musicState.isPlaying = false; CurrentlyPlaying.music?.pause()} else {musicState.isPlaying = true; CurrentlyPlaying.music?.play()}}}
    class="md:hidden m-auto flex flex-col hover:cursor-pointer border-white/10 border bg-green-900/25 hover:bg-green-900/50 backdrop-blur-[8px] hover:border-white/30 duration-300 rounded-xl w-full text-ellipsis overflow-hidden">
        <div class="flex items-center flex-1 py-3">
            <!-- ICON -->
            <!-- INFO -->
            <div class="flex items-center w-full px-5">
                <!-- left-to-right scrolling, like analog music player -->
                <div class="text flex items-center mr-auto gap-2">
                    <div class="text-xl animate-spin {!isSpinning ? '[animation-play-state:paused]' : ''}">
                        <Icon icon="bi:disc" />
                    </div>
                    <h2 class="w-40 flex-1 text-[15px] font-mono overflow-hidden text-ellipsis uppercase text-left">{curPlaying.title}</h2>
                </div>
                <h2 class="font-mono ml-auto text-[15px] overflow-hidden text-ellipsis uppercase text-right">{curPlaying.currentTimeString}</h2>
            </div>
        </div>

        <!-- PROGRESS BAR -->
        <div class="w-full h-0.5 bg-white/20">
            <div class="h-full bg-[#9DFA9F]/50" style="width: {progress}%"></div>
        </div>
</button>
