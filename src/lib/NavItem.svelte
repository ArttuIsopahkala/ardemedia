<script context="module" lang="ts">
  export interface MenuItem {
    label: string;
    href: string;
  }
</script>

<script lang="ts">
  import MdKeyboardArrowDown from 'svelte-icons/md/MdKeyboardArrowDown.svelte';
  import clsx from 'clsx';

  export let label: string = '';
  export let href: string = '/';
  export let menuItems: MenuItem[] = [];
  export let active: boolean = false;
  export let onClick = null;
</script>

<a
  class={clsx(
    'flex justify-center items-center w-full p-4 text-base',
    'md:px-6 md:w-auto md:inline-flex',
    'hover:text-primary',
    active && 'text-primary'
  )}
  on:click={onClick}
  {href}
>
  {label}
  {#if menuItems.length > 0}
    <div class="w-[20px] h-[20px]">
      <MdKeyboardArrowDown />
    </div>
  {/if}
</a>
