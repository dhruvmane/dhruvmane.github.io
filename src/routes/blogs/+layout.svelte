<script lang="ts">
    import '../../app.css'
	import favicon from '$lib/assets/images/dhruv.jpg';
	import { onMount } from 'svelte';
	import lenis from 'lenis';

	onMount(() => {
	    const ref = new lenis({
			autoRaf: true,
		});
	})


	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<div class="">
    {@render children()}
</div>
