<script>
    import { CurrentlyPlaying, musicState } from "$lib/modules/globals.svelte";
    import Icon from '@iconify/svelte';

    let isSpinning = $derived(musicState.isPlaying)
</script>

<h2 class="p-2 text-[12px] uppercase font-mono font-extralight">Playing from Discography</h2>
<!-- DISCOGRAPHY PLAYER -->
<button 
    onclick={() => { if (musicState.isPlaying) {musicState.isPlaying = false; CurrentlyPlaying.music?.pause()} else {musicState.isPlaying = true; CurrentlyPlaying.music?.play()}}}
    class="flex hover:cursor-pointer p-2 items-center border-white/10 border bg-black/25 hover:bg-black/50 hover:border-white/30 duration-300 rounded-2xl w-50 text-ellipsis overflow-hidden">

    <!-- ICON -->
    <div class="animate-spin {!isSpinning ? '[animation-play-state:paused]' : ''}">
        <Icon icon="bi:disc" />
    </div>

    <!-- INFO -->
    <div class="px-2 flex-1 items-center">
        <!-- left-to-right scrolling, like analog music player -->
        <h2 class="w-full font-mono text-xl overflow-hidden text-ellipsis">{CurrentlyPlaying.title}</h2>
    </div>
</button>