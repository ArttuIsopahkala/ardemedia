<script lang="ts">
  import Container from '$lib/common/Container.svelte';
  import Design from '$lib/services/Design.svelte';
  import Development from '$lib/services/Development.svelte';
  import Selector, { SelectorItem } from '$lib/services/Selector.svelte';
  import { selectedService } from './../store.js';

  let selectedValue: string = $selectedService;

  $: if (selectedValue) {
    selectedService.set(selectedValue);
  }

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

<Container>
  <Selector bind:selectedValue {items} />
  {#if selectedValue === 'development'}
    <Development />
  {:else if selectedValue === 'design'}
    <Design />
  {:else}
    Valitse palvelu!
  {/if}
</Container>
