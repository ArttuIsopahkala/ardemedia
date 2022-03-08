<script lang="ts">
  import Sidebar from './Sidebar.svelte';
</script>

<div class="grid gap-x-10 xl:grid-cols-[calc(100vw/5)_auto_calc(100vw/5)] justify-center">
  <Sidebar />
  <slot />
</div>
