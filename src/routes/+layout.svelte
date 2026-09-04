<script lang="ts">
	import favicon from '$lib/assets/icons/favicon.png';
	import { onMount } from 'svelte';
	import lenis from 'lenis';
	import { page } from '$lib/modules/globals.svelte';

	import Footer from '$lib/sections/Footer.svelte';

	onMount(() => {
	    const ref = new lenis({
			autoRaf: true,
		});

		window.addEventListener('scroll', () => {
		    page.scroll.top = window.scrollY || document.documentElement.scrollTop;
		    page.scroll.total = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            page.scroll.percent = (page.scroll.top / page.scroll.total);
		})
	})


	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<div class="page wallpaper">
    {@render children()}
    <Footer />
</div>
