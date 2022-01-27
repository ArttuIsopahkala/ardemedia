<script lang="ts">
  export let title: string = '';
  export let desc: string = '';
</script>

<div class="flex flex-col justify-center items-center mr-10">
  <slot />
  <h5 class="mt-2 text-center">{title}</h5>
  <p class="italic text-sm text-center max-w-[150px]">{desc}</p>
</div>
