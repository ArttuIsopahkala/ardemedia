<script lang="ts">
  export let title: string = '';
  export let desc: string = '';
</script>

<div class="flex flex-col justify-center items-center w-32 pr-5">
  <slot />
  <h4 class="mt-2 text-center">{title}</h4>
  <p class="italic text-xs text-center max-w-[150px]">{desc}</p>
</div>
