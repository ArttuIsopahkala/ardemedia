<script lang="ts">
  import Button from '$lib/common/Button.svelte';
  import { goto } from '$app/navigation';

  export let serviceName: string = '';
  export let label: string = '';
  export let href: string = '/';
  export let description: string = '';
  export let price: string = '';
</script>

<div class="card shadow-lg bg-background">
  <div class="card-body">
    <h5 class="text-primary mb-2 mark">{serviceName}</h5>
    <h4 class="card-title">{label}</h4>
    <div class="mb-4">
      {description}
    </div>
    <div class="mb-2 flex flex-row">
      <h4 class="text-primary">{serviceName}</h4>
      <h4 class="ml-2">hintaan</h4>
    </div>
    <div class="mb-2 flex flex-row">
      <h4 class="text-base-300">{price}</h4>
    </div>
    <Button text="Lisätietoa palvelusta →" onClick={() => goto(href)} />
  </div>
</div>
