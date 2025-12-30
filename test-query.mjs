import { getCollection } from 'astro:content';

const blogs = await getCollection('blog');
for (const blog of blogs) {
  console.log('Blog:', blog.data.title);
  console.log('  capabilities:', JSON.stringify(blog.data.capabilities));
  console.log('  typeof:', typeof blog.data.capabilities);
}
