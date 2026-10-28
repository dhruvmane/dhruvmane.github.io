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
    <div class="mx-25">
        <h2 class="font-blog-title text-8xl tracking-tighter">My Blogs</h2>
    </div>

    <div class="w-fit">
        {#each blogs as blog}
            <BlogWidget blog={blog} />
        {/each}
    </div>
</main>
