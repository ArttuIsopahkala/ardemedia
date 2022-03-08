<script lang="ts">
  import Blog from '$lib/blog/Blog.svelte';
  import Post from '$lib/blog/Post.svelte';
  import Container from '$lib/common/Container.svelte';
  import { onMount } from 'svelte';
  import { fly } from 'svelte/transition';
  import { posts } from '../../store';

  let loaded = false;
  onMount(() => {
    loaded = true;
  });

  /* Categories: 'Tutorials' | 'Web development' | 'Personal' | 'Tools' | 'General' */
</script>

<svelte:head>
  <title>Blogi | Arde Media</title>
</svelte:head>

{#if loaded}
  <Blog>
    <Container>
      <div class="flex flex-row items-center">
        <span class="text-3xl">&#128226;</span>
        <h1 class="py-5" in:fly={{ x: -100, duration: 600 }}>Oodi koodille</h1>
      </div>
      <div class="flex flex-col gap-5">
        {#each $posts as post}
          <Post {post} />
        {/each}
      </div>
    </Container>
  </Blog>
{/if}
