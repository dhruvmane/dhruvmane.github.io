<script lang="ts">
    let { blog } = $props()

    const MAX = 32
    const MIN = 16
    const K = 730

    const fontSize = $derived(Math.min(MAX, Math.max(MIN, K / blog.metadata.title.length)))
</script>

<a href={`/blogs/${blog.slug}`} style:font-size="{fontSize}px" class="w-fit inline-block -translate-y-2 transition-all duration-150 opacity-50 hover:opacity-100! cursor-pointer">
    <h2 class="font-blog-title">{blog.metadata.title}</h2>
</a>
