<script lang="ts" context="module">
  export interface ServiceTech {
    title: string;
    techs: string;
  }
</script>

<script lang="ts">
  import { goto } from '$app/navigation';
  import Button from '$lib/common/Button.svelte';
  import { selectedService } from './../../store.js';

  export let id: string = '';
  export let serviceName: string = '';
  export let label: string = '';
  export let href: string = '/';
  export let description: string = '';

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
    <h4 class="text-primary mb-2 mark">{serviceName}</h4>
    <h2 class="mb-4">{label}</h2>
    <p class="mb-5">
      {@html description}
    </p>
    <slot name="techs" />
    <span class="my-2 text-sm"
      >Huom! Myös teidän työkalut ja teknologiat ovat opeteltavissa &#9996; &#128640;</span
    >
    <div class="card-actions flex">
      <Button text="Lisätietoa palvelusta" onClick={handleReadMore} />
    </div>
  </div>
</div>
