<script lang="ts">
  import { fade } from 'svelte/transition';
  export let style: string = '';
</script>

<article in:fade={{ duration: 150 }} class="px-5 xl:px-0 {style} pb-14">
  <section class="container mx-auto max-w-5xl">
    <slot />
  </section>
</article>
