<script lang="ts">
  import Design from '$lib/services/Design.svelte';
  import Development from '$lib/services/Development.svelte';
  import Selector, { SelectorItem } from '$lib/services/Selector.svelte';

  let selectedValue: string;

  const items: SelectorItem[] = [
    {
      label: 'Ohjelmistokehitys',
      value: 'development'
    },
    {
      label: 'Ohjelmistojen suunnittelu',
      value: 'design'
    }
  ];
</script>

<svelte:head>
  <title>Palvelut | Arde Media</title>
</svelte:head>

<article class="bg-base-100 bg-[url('/bg-pattern.svg')] shadow-md">
  <section class="container mx-auto max-w-5xl">
    <Selector bind:selectedValue {items} defaultValue="development" />
    {#if selectedValue === 'development'}
      <Development />
    {:else if selectedValue === 'design'}
      <Design />
    {:else}
      Valitse palvelu!
    {/if}
    <slot />
  </section>
</article>
