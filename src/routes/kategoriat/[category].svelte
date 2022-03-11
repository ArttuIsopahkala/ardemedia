<script lang="ts">
  import { page } from '$app/stores';
  import Blog from '$lib/blog/Blog.svelte';
  import Post, { PostItem } from '$lib/blog/Post.svelte';
  import Container from '$lib/common/Container.svelte';
  import { posts } from '../../store';
  import ROUTES from '$lib/static/routes';

  let category: string;
  let filteredPosts: PostItem[];
  $: {
    category = $page.params.category;
    filteredPosts = $posts.filter((post) => post.categories.includes(category));
  }
</script>

<svelte:head>
  <title>Blogi | Kategoria: {category}</title>
  <link rel="canonical" href="https://ardemedia.fi/blogi/" />
</svelte:head>

<Blog>
  <Container>
    <h3 class="portfolio-title">Kategoria: {category}</h3>
    <div class="grid gap-5">
      {#each filteredPosts as post}
        <Post {post} />
      {/each}
    </div>
    <div class="flex justify-end mt-5 xl:hidden">
      <a href={ROUTES.blog} class="link text-textDark">Kaikki postaukset →</a>
    </div>
  </Container>
</Blog>
