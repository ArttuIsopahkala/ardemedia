<script lang="ts">
  import Category from '$lib/blog/Category.svelte';
  import ROUTES from '$lib/static/routes';
  import { onMount } from 'svelte';
  import { fade } from 'svelte/transition';
  import { posts } from '../../store';
  import { PostItem } from './Post.svelte';

  let isLoaded = false;
  onMount(() => (isLoaded = true));

  let categories: string[] = [];
  let recentPosts: PostItem[] = [];
  $: {
    categories = [...new Set([].concat(...$posts.map((post) => post.categories)))];
    categories.sort((a, b) => a.localeCompare(b));
    recentPosts = $posts.slice(0, 3);
  }
</script>

{#if isLoaded}
  <div
    in:fade={{ duration: 300 }}
    class="max-w-xs justify-self-end self-start sticky m-10 hidden xl:block"
  >
    <h3 class="portfolio-title">Viimeisimmät postaukset</h3>
    <div class="flex flex-col gap-4">
      {#each recentPosts as post}
        <a href={ROUTES.blog + '/' + post.url} class="link text-textDark">{post.title}</a>
      {/each}
    </div>
    <h3 class="portfolio-title mt-5">Kategoriat</h3>
    <div class="flex flex-wrap">
      {#each categories as category}
        <Category {category} />
      {/each}
    </div>
    <h3 class="portfolio-title mt-5">Linkit</h3>
    <div class="flex flex-col gap-4">
      <a href={ROUTES.blog} class="link text-textDark">Kaikki postaukset</a>
      <a href={ROUTES.home} class="link text-textDark">Etusivu</a>
    </div>
  </div>
{/if}
