<script lang="ts">
  import { onMount } from 'svelte';
  import Button from './Button.svelte';
  import { page } from '$app/stores';
  import MdMenu from 'svelte-icons/md/MdMenu.svelte';
  import MdClose from 'svelte-icons/md/MdClose.svelte';
  import clsx from 'clsx';
  import NavItem, { MenuItem } from './NavItem.svelte';
  import {breakpoints}  from '../theme/breakpoints.js';

  // Show mobile icon and display menu
  let showMobileMenu = false;

  const navItems: MenuItem[] = [
    { label: 'Etusivu', href: '/' },
    { label: 'Palvelut', href: '/services' },
    { label: 'Tietoa minusta', href: '/about' },
    { label: 'Portfolio', href: '/portfolio' },
    { label: 'Blogi', href: '/blog' }
  ];

  // Mobile menu click event handler
  const handleMobileIconClick = () => (showMobileMenu = !showMobileMenu);

  // Media match query handler
  const mediaQueryHandler = (e) => {
    // Reset mobile state
    if (!e.matches) {
      showMobileMenu = false;
    }
  };

  // Attach media query listener on mount hook
  onMount(() => {
    const mediaListener = window.matchMedia(`max-width: ${breakpoints.lg}px`);
    mediaListener.onchange = (e) => mediaQueryHandler(e);
  });
</script>

<header
  class={clsx('fixed w-full top-0 border-primary text-textLight bg-base-content border-b-2 z-50')}
>
  <nav
    class={clsx(
      'flex flex-col',
      'lg:container lg:mx-auto lg:flex-row lg:justify-between lg:items-center'
    )}
  >
    <div class="flex justify-between items-center p-3 h-[60px]">
      <a on:click={() => (showMobileMenu = false)} href={'/'}>
        <img class="h-[40px] p-1" src="/logo.png" alt="logo" />
      </a>
      <button
        on:click={handleMobileIconClick}
        class="btn btn-md btn-ghost btn-circle cursor-pointer lg:hidden"
      >
        {#if showMobileMenu}
          <MdClose />
        {:else}
          <MdMenu />
        {/if}
      </button>
    </div>

    <div
      class={clsx('w-full m-0', !showMobileMenu && 'hidden', 'lg:flex lg:justify-end lg:w-auto')}
    >
      {#each navItems as item}
        <NavItem
          label={item.label}
          href={item.href}
          active={$page.url.pathname === item.href}
          onClick={() => (showMobileMenu = false)}
        />
      {/each}
      <a
        class={clsx('flex justify-center items-center my-5 w-full ', 'lg:w-auto lg:my-0 lg:mx-5')}
        on:click={() => (showMobileMenu = false)}
        href={'/contact'}
      >
        <Button text={'Ota yhteyttä!'} outlined={false} />
      </a>
    </div>
  </nav>
</header>
