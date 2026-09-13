<script lang="ts">
    import { getAllBlogs } from '$lib/modules/functions.svelte'
	import { onMount } from 'svelte';

	let blogs: any[] = $state( getAllBlogs())

    onMount(async () => {
    })
</script>

<main class="text-white min-h-screen w-full page wallpaper p-5">
    <h2 class="font-blog-title text-8xl">My Blogs</h2>
</main>
