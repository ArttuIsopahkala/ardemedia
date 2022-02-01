<script lang="ts">
  import clsx from 'clsx';

  export let description: string = '';
</script>

<div
  class={clsx(
    'p-5 bg-card flex flex-col border-2 items-center border-primary w-full m-2',
    'sm:m-[8px] sm:w-[calc(50%-16px)]',
    'md:m-[8px] lg:w-[calc(25%-16px)]'
  )}
>
  <div class="mb-5 flex justify-center">
    <slot name="icon" />
  </div>
  <div>
    {description}
  </div>
  <slot name="extra" />
</div>
