<script context="module" lang="ts">
  import Design from '$lib/services/Design.svelte';
  import Development from '$lib/services/Development.svelte';
  import Selector from '$lib/services/Selector.svelte';

  export type ServiceType = '#development' | '#design';
</script>

<script lang="ts">
  let selectedService: ServiceType;
</script>

<svelte:head>
  <title>Palvelut | Arde Media</title>
</svelte:head>

<article class="bg-base-100 bg-[url('/bg-pattern.svg')] shadow-md">
  <section class="container mx-auto max-w-5xl">
    <Selector bind:selectedService />
    {#if selectedService === '#development'}
      <Development />
    {:else if selectedService === '#design'}
      <Design />
    {:else}
      Valitse palvelu!
    {/if}
    <slot />
  </section>
</article>
