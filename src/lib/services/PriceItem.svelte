<script lang="ts">
  export let price: string;
  export let list: string[] = [];
</script>

<div class="p-5 bg-card">
  <h4 class="">{price}</h4>
  <p class="mb-2 text-textGray text-sm">+ alv 24%</p>
  {#each list as item}
    <span>&#8226; {item}</span>
  {/each}
</div>
