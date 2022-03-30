<script lang="ts">
  export let src: string;
  export let alt: string;
  export let style: string = '';
  import { onMount } from 'svelte';
  import lazyLoad from '$lib/static/lazyLoad';
  import clsx from 'clsx';
  let loaded: boolean = false;
  let thisImage: HTMLImageElement;

  onMount(() => {
    thisImage.onload = () => {
      loaded = true;
    };
  });
</script>

<img
  {src}
  {alt}
  class={clsx(style, 'transition-opacity', loaded ? 'opacity-100' : 'opacity-0')}
  class:loaded
  bind:this={thisImage}
  use:lazyLoad={src}
  loading="lazy"
/>
