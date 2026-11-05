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
        <h2 class="font-blog-title text-6xl md:text-8xl tracking-tighter text-center opacity-50 md:mb-25">My Blogs</h2>
    
        <p class="group/blogs tracking-tighter text-center m-auto leading-tight min-h-100 w-100">
            <BlogWidget blog="My Journey in Systems Programming"/>
            <BlogWidget blog="My Journey in Systems Programming"/>
            <BlogWidget blog="Systems Programming"/>
            <BlogWidget blog="Linux"/>
            <BlogWidget blog="My Journey in Systems Programming"/>
            <BlogWidget blog="Linux"/>
            <BlogWidget blog="Linux"/>
            
        </p>
    </div>
</main>
