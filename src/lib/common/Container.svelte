<script lang="ts">
  import { fade } from 'svelte/transition';
  export let style: string = '';
</script>

<article in:fade={{ duration: 300 }} class="px-5 xl:px-0 {style} bg-base-100 bg-[url('/bg-pattern.svg')]">
  <section class="container mx-auto max-w-5xl">
    <slot />
  </section>
</article>
