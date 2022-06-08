<script lang="ts">
  import { page } from '$app/stores';
  import Button from '$lib/common/Button.svelte';
  import Icon from '$lib/common/Icon.svelte';
  import NavItem from '$lib/header/NavItem.svelte';
  import ROUTES from '$lib/static/routes';
  import clsx from 'clsx';

  // Show mobile icon and display menu
  let showMobileMenu = false;

  // Mobile menu click event handler
  const handleMobileIconClick = () => (showMobileMenu = !showMobileMenu);
</script>

<svelte:window on:click={() => (showMobileMenu = false)} />

<header
  on:click|stopPropagation
  class={clsx('fixed w-full top-0 border-primary text-textLight bg-base-content border-b-2 z-50')}
>
  <nav
    class={clsx(
      'flex flex-col',
      'lg:container lg:mx-auto lg:flex-row lg:justify-between lg:items-center'
    )}
  >
    <div class="flex justify-between items-center p-3 h-[60px]">
      <a on:click={() => (showMobileMenu = false)} href={ROUTES.home}>
        <img class="h-[40px] p-1" src="/logo_white.png" alt="Arde Media logo" />
      </a>
      <button
        on:click={handleMobileIconClick}
        class="btn btn-ghost btn-circle lg:hidden"
        aria-label="Open or close toggle menu"
      >
        {#if showMobileMenu}
          <Icon type="close" color="text-textLight" />
        {:else}
          <Icon type="menu" color="text-textLight" />
        {/if}
      </button>
    </div>

    <div
      class={clsx('w-full m-0', !showMobileMenu && 'hidden', 'lg:flex lg:justify-end lg:w-auto')}
    >
      <NavItem
        label={'Etusivu'}
        href={ROUTES.home}
        active={$page.path === ROUTES.home}
        onClick={() => (showMobileMenu = false)}
      />
      <!-- Different view in mobile menu with dropdown, note lg:hidden -->
      <div class={clsx('flex flex-col justify-center lg:hidden')}>
        <NavItem
          label={'Ohjelmistokehitys'}
          href={ROUTES.development}
          active={$page.path === ROUTES.development}
          onClick={() => (showMobileMenu = false)}
        />
        <NavItem
          label={'Ohjelmistojen suunnittelu'}
          href={ROUTES.design}
          active={$page.path === ROUTES.design}
          onClick={() => (showMobileMenu = false)}
        />
      </div>
      <div class={clsx('dropdown dropdown-hover cursor-pointer', 'hidden lg:inline-block')}>
        <div
          tabindex="0"
          class={clsx(
            'flex justify-center items-center w-full p-4 text-base transition-all',
            'lg:px-6 lg:w-auto lg:inline-flex',
            'hover:text-primary',
            ($page.path === ROUTES.development || $page.path === ROUTES.design) && 'text-primary'
          )}
        >
          Palvelut +
        </div>
        <div
          tabindex="0"
          class="shadow menu dropdown-content bg-base-content rounded-box w-max flex items-start"
        >
          <NavItem
            label={'Ohjelmistokehitys'}
            href={ROUTES.development}
            active={$page.path === ROUTES.development}
            onClick={() => (showMobileMenu = false)}
          />
          <NavItem
            label={'Ohjelmistojen suunnittelu'}
            href={ROUTES.design}
            active={$page.path === ROUTES.design}
            onClick={() => (showMobileMenu = false)}
          />
        </div>
      </div>
      <NavItem
        label={'Tietoa minusta'}
        href={ROUTES.about}
        active={$page.path === ROUTES.about}
        onClick={() => (showMobileMenu = false)}
      />
      <NavItem
        label={'Portfolio'}
        href={ROUTES.portfolio}
        active={$page.path === ROUTES.portfolio}
        onClick={() => (showMobileMenu = false)}
      />
      <NavItem
        label={'Blogi'}
        href={ROUTES.blog}
        active={$page.path === ROUTES.blog}
        onClick={() => (showMobileMenu = false)}
      />
      <a
        class={clsx('flex justify-center items-center my-5 w-full ', 'lg:w-auto lg:my-0 lg:mx-5')}
        on:click={() => (showMobileMenu = false)}
        href={ROUTES.contact}
      >
        <Button text={'Ota yhteyttä'} outlined={false} />
      </a>
    </div>
  </nav>
</header>
