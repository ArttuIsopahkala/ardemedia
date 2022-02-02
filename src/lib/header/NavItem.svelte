<script lang="ts">
  import clsx from 'clsx';

  export let label: string = '';
  export let href: string = '/';
  export let active: boolean = false;
  export let onClick = null;
</script>

<a
  class={clsx(
    'flex justify-center items-center w-full p-4 text-base transition-all',
    'lg:px-6 lg:w-auto lg:inline-flex',
    'hover:text-primary',
    active && 'text-primary'
  )}
  on:click={onClick}
  {href}
>
  {label}
</a>
