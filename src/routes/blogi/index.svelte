<script lang="ts">
  import Blog from '$lib/blog/Blog.svelte';
  import Post from '$lib/blog/Post.svelte';
  import Container from '$lib/common/Container.svelte';
  import Spinner from '$lib/common/Spinner.svelte';
  import { onMount } from 'svelte';
  import { fly, fade } from 'svelte/transition';
  import { posts } from '../../store';

  let loaded = false;
  onMount(() => {
    loaded = true;
  });
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
      <p class="pb-5 italic text-textDark" in:fade={{ duration: 600 }}>
        Koodari-yrittäjän ajatuksia devaamisesta ja teknologiasta, suomeksi!
      </p>
      <div class="grid gap-5">
        {#if $posts.length === 0}
          <Spinner />
        {:else}
          {#each $posts as post}
            <Post {post} />
          {/each}
        {/if}
      </div>
    </Container>
  </Blog>
{/if}
