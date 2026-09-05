<script>
    import Icon from '@iconify/svelte'
    import { marked } from 'marked'
    import dompurify from 'dompurify'

        
    // GET ALL BLOGS:
    let blogs = [];
    const allBlogs = import.meta.glob(`/src/lib/blogs/**/*.md`, {query: "?raw", import: "default"})
    
</script>

<main id="blogs" class="group p-6 md:p-10 w-full md:w-200 duration-300">
    <div class="font-title md:-translate-x-7.5 md:group-hover:translate-x-0 duration-500 transition  flex items-center gap-2.5 font-bold text-3xl lowercase my-5">
        <span class="md:opacity-0 group-hover:opacity-100 transition-all duration-500 text-xl items-center flex">
            <Icon icon="at-icons:pen-nib"/>
        </span>
        <span class="-translate-y-1">
            blogs
        </span>
    </div>


    <!-- Blog Content -->
    <div>
        
    </div>
</main>