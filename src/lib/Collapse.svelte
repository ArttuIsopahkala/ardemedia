<script lang="ts">
  import clsx from 'clsx';

  let open: boolean = false;

  export let title: string = '';
</script>

<div
  tabindex="0"
  class={clsx(
    'bg-card border bg-base-100 collapse collapse-arrow text-textDark cursor-pointer mt-4',
    open ? 'collapse-open' : 'collapse-close'
  )}
  on:click={() => (open = !open)}
>
  <div class="collapse-title text-base font-medium">{title}</div>
  <div class="collapse-content focus:bg-base-100">
    <slot />
  </div>
</div>
