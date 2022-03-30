<script lang="ts">
  export let description: string = '';
</script>

<div class="p-5 bg-base-100 shadow-md flex flex-col border-2 items-center border-primary">
  <div class="mb-5 flex justify-center">
    <slot name="icon" />
  </div>
  <div>
    {description}
  </div>
  <slot name="extra" />
</div>
