<script>
  export let src;
  import { onMount } from 'svelte';
  import lazyLoad from '$lib/static/lazyLoad';
  import clsx from 'clsx';
  let loaded = false;
  let thisVideo;
  onMount(() => {
    thisVideo.onload = () => {
      loaded = true;
    };
  });
</script>

<iframe
  class={clsx(
    'w-full max-w-[480px] h-72 transition-opacity duration-100',
    loaded ? 'opacity-100' : 'opacity-0'
  )}
  bind:this={thisVideo}
  use:lazyLoad={src}
  title="YouTube video player"
  frameborder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowfullscreen
/>
