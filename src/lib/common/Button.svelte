<script lang="ts">
  import clsx from 'clsx';

  export let text: string = '';
  export let outlined: boolean = true;
  export let onClick: svelte.JSX.MouseEventHandler<HTMLButtonElement> = null;
  export let secondary: boolean = false;
  export let hideArrow: boolean = false;
  export let size: string = '';
  export let style: string = '';
</script>

<button
  on:click={onClick}
  class={clsx(
    'btn text-base',
    outlined && 'btn-outline bg-base-100',
    secondary ? 'btn-neutral no-animation' : 'w-fit btn-primary',
    size || 'btn-sm sm:btn-md',
    style
  )}
>
  {text}
  {secondary || hideArrow ? '' : ' →'}
</button>
