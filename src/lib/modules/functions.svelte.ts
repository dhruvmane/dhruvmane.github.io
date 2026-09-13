export async function getAllBlogs() {
    
    // Get Blogs 
    const blogs = import.meta.glob('/src/lib/blogs/*.md', { query: '?raw', import: 'default', eager: true });
    let paths = Object.entries(blogs).map(([path, file]) => {
        const metadata = (file as any).metadata;
        const slug = path.split('/').pop()?.replace('.md', '')

        return { slug, metadata, path}
    }).filter(blog => blog.slug?.split("")[0] !== '_')

    return paths
}