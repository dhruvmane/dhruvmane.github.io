<script lang="ts">
    import { onMount, onDestroy } from 'svelte'
    import { Day, Month } from '$lib/modules/globals.svelte';
    import Icon from '@iconify/svelte';

    let countdown: number;
    let time = $state(new Date());
    let formattedTime = $derived(getTime(time));

    function getTime(time: Date) {
        // CONVERT from 13,14,15hrs to 1,2,3hrs
        let hours = time.getHours() > 12 ? (`0` + (time.getHours() - 12).toString()) : (`0` + time.getHours().toString())
        let minutes = time.getMinutes() < 10 ? (`0` + time.getMinutes()) : time.getMinutes()
        let am_pm = time.getHours() < 12 ? "AM" : "PM"

        let date = time.getDate();
        let day = Day[time.getDay()];    // SUNDAY, MONDAY, ETC..
        let month = Month[time.getMonth()]
        let year = time.getFullYear()

        let cel = ""

        if (time.getHours() >= 7 && time.getHours() <= 8) cel = "sunrise"
        if (time.getHours() >= 9 && time.getHours() <= 18) cel = "day"
        if (time.getHours() >= 19 && time.getHours() <= 20) cel = "sunset"
        if (time.getHours() >= 21 || time.getHours() <= 6) cel = "night"
        
        function getSuffix(day: number) {
            if (day > 3 && day < 21) return 'th'; 
            
            switch (day % 10) {
              case 1:  return 'st';
              case 2:  return 'nd';
              case 3:  return 'rd';
              default: return 'th';
            }
        }
        
        let suffix: "th" | "st" | "nd" | "rd" = getSuffix(time.getDay());
        
        return {
            hours, minutes, am_pm, cel,
            date, suffix, day, month, year
        }
    }
    
    onMount(() => {
        countdown = setInterval(() => {
            time = new Date();
        }, 1000)
    })

    onDestroy(() => {
        clearInterval(countdown)
    })

    
</script>

<main class="flex flex-col font-mono pt-2.5 relative text-[16px]">
    <div class="flex items-center gap-2">
        <h3 class="">{formattedTime.hours}<span class="animate-blink">:</span>{formattedTime.minutes} {formattedTime.am_pm}</h3>
        {#if formattedTime.cel === "day"}
            <Icon icon="akar-icons:sun"/>
        {:else if formattedTime.cel === "sunset"}
            <Icon icon="bi:sunset" />
        {:else if formattedTime.cel === "sunrise"}
            <Icon icon="bi:sunrise" />
        {:else if formattedTime.cel === "night"}
            <Icon icon="akar-icons:moon-fill" />
        {/if}
    </div>
    <h3 class="uppercase flex items-center">{formattedTime.date}{formattedTime.suffix} {formattedTime.month}, {formattedTime.year}</h3>
    <h3>{formattedTime.day}</h3>
</main>