<script lang="ts">
    import { getAllBlogs } from '$lib/modules/functions.svelte'
    import BlogWidget from '$lib/components/Widgets/Blogs/BlogWidget.svelte'
    import { onMount } from 'svelte';

	let blogs: {slug: string | undefined; metadata: any; path: string;}[] = $state(getAllBlogs())
	
    onMount(async () => {
      $inspect(blogs)
    })
</script>

<main class="text-white min-h-screen w-full page wallpaper p-5">
    <div class="md:mx-75 md:my-20">
        <h2 class="font-blog-title text-6xl md:text-8xl tracking-tighter text-center opacity-50 mb-25 md:mb-25">My Blogs</h2>
        <p class="group/blogs tracking-tighter text-center m-auto leading-tight min-h-100 md:w-100">
            {#each blogs as blog}
                <BlogWidget blog={blog}/>
            {/each}
        </p>
    </div>
</main>
