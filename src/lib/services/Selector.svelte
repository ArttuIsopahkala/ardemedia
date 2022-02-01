<script lang="ts" context="module">
  export interface SelectorItem {
    label: string;
    value: string;
  }
</script>

<script lang="ts">
  import Button from '$lib/common/Button.svelte';

  export let defaultValue: string = ''; 
  export let items: SelectorItem[] = [];
  
  export let selectedValue: string = defaultValue;
</script>

<div class="flex gap-4 flex-wrap pt-5">
  {#each items as item}
    <Button
      text={item.label}
      outlined={selectedValue !== item.value}
      secondary={true}
      onClick={() => (selectedValue = item.value)}
    />
  {/each}
</div>
<div class="divider before:bg-primary after:bg-primary opacity-50" />
