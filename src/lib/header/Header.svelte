<script lang="ts">
  import { onMount } from 'svelte';
  import Button from '$lib/common/Button.svelte';
  import { page } from '$app/stores';
  import MdMenu from 'svelte-icons/md/MdMenu.svelte';
  import MdClose from 'svelte-icons/md/MdClose.svelte';
  import clsx from 'clsx';
  import NavItem from '$lib/header/NavItem.svelte';
  import { breakpoints } from '$lib/static/breakpoints';
  import data from '$lib/static/data';

  // Show mobile icon and display menu
  let showMobileMenu = false;

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
        <img class="h-[40px] p-1" src="/logo_white.png" alt="Arde Media logo" />
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
      {#each data.ROUTES as route}
        {#if route.url !== '/contact'}
          <NavItem
            label={route.label}
            href={route.url}
            active={$page.path === route.url}
            onClick={() => (showMobileMenu = false)}
          />
        {/if}
      {/each}
      {#if data.ROUTES.some((route) => route.url === '/contact')}
        <a
          class={clsx('flex justify-center items-center my-5 w-full ', 'lg:w-auto lg:my-0 lg:mx-5')}
          on:click={() => (showMobileMenu = false)}
          href={'/contact'}
        >
          <Button text={'Ota yhteyttä'} outlined={false} />
        </a>
      {/if}
    </div>
  </nav>
</header>
