<script context="module" lang="ts">
  export interface MenuItem {
    label: string;
    href: string;
  }
</script>

<script lang="ts">
  import clsx from 'clsx';

  export let label: string = '';
  export let href: string = '/';
</script>

<a class={clsx('p-2 transition-all', 'hover:text-primary')} {href}>
  {label}
</a>
