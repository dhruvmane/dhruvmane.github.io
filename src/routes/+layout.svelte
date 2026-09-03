<script lang="ts">
	import favicon from '$lib/assets/icons/favicon.png';
	import { onMount } from 'svelte';
	import lenis from 'lenis';

	import Footer from '$lib/sections/Footer.svelte';
	
	onMount(() => {
	    const ref = new lenis({
			autoRaf: true
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