<script lang="ts" context="module">
  export interface ServiceTech {
    title: string;
    techs: string;
  }
</script>

<script lang="ts">
  import { goto } from '$app/navigation';
  import Button from '$lib/common/Button.svelte';

  export let serviceName: string = '';
  export let label: string = '';
  export let href: string = '/';
  export let description: string = '';
  export let id: string;
</script>

<div {id} class="card shadow-md bg-base-100 w-full">
  <slot name="image" />

  <div class="card-body gap-0">
    <h4 class="text-primary mb-2 mark">{serviceName}</h4>
    <h2 class="mb-4">{label}</h2>
    <p class="mb-5">
      {@html description}
    </p>
    <slot name="techs" />
    <span class="my-2 text-sm"
      >Huom! Myös teidän työkalut ja teknologiat ovat opeteltavissa &#128640;</span
    >
    <div class="card-actions flex">
      <Button text="Lisätietoa palvelusta" onClick={() => goto(href)} />
    </div>
  </div>
</div>
