<script lang="ts" context="module">
  export interface ServiceTech {
    title: string;
    techs: string;
  }
</script>

<script lang="ts">
  import Button from '$lib/common/Button.svelte';
  import { goto } from '$app/navigation';
  import { selectedService } from './../../store.js';

  export let id: string = '';
  export let serviceName: string = '';
  export let label: string = '';
  export let href: string = '/';
  export let description: string = '';
  export let techTitle: string = '';
  export let techs: ServiceTech[] = [];

  const handleReadMore = () => {
    selectedService.set(id);
    goto(href);
  };
</script>

<div {id} class="card shadow-md bg-base-100 w-full md:w-[calc(50%-10px)]">
  <figure class="hidden md:flex">
    <slot name="image" />
  </figure>

  <div class="card-body">
    <div class="flex flex-col justify-between" />
    <h5 class="text-primary mb-2 mark">{serviceName}</h5>
    <h3 class="mb-4">{label}</h3>
    <p>
      {@html description}
    </p>
    <h5 class="mt-5 mb-2 text-primary">{techTitle}</h5>
    {#each techs as tech}
      <h6>{tech.title}</h6>
      <span class="mb-3">{tech.techs}</span>
    {/each}
    <span class="my-2 text-sm"
      >Huom! Myös teidän työkalut ja teknologiat ovat opeteltavissa &#9996; &#128640;</span
    >
    <div class="card-actions flex">
      <Button text="Lisätietoa palvelusta →" onClick={handleReadMore} />
    </div>
  </div>
</div>
