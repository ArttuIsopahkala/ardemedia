<script lang="ts">
  import FaCode from 'svelte-icons/fa/FaCode.svelte';
  export let label: string = '';
</script>

<div class="flex flex-col justify-center items-center p-3">
  <div class="flex w-[40px] h-[40px]">
    <slot>
      <FaCode />
    </slot>
  </div>
  <div class="text-base">
    {label}
  </div>
</div>
