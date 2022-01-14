<script lang="ts">
  import clsx from 'clsx';

  export let text: string = '';
  export let outlined: boolean = true;
  export let onClick: svelte.JSX.MouseEventHandler<HTMLButtonElement> = null;
  export let secondary: boolean = false;
</script>

<button
  on:click={onClick}
  class={clsx(
    'btn text-base w-fit',
    outlined && 'btn-outline bg-base-100',
    secondary ? 'btn-neutral no-animation' : 'btn-primary'
  )}
>
  {text}
</button>
