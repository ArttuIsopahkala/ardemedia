<script lang="ts">
  export let title: string;
</script>

<div class="p-5 bg-card">
  <h3 class="mb-3">{title}</h3>
  <p class="text-sm">
    <slot/>
  </p>
</div>
