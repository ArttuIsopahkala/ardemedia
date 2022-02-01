<script context="module">
  import * as animateScroll from 'svelte-scrollto';
  import Icon from '$lib/common/Icon.svelte';
  import data from '$lib/static/data';
</script>

<footer class="bg-success border-t-2 border-primary flex justify-center">
  <div class="p-10 footer text-base-content max-w-5xl">
    <div on:click={() => animateScroll.scrollTo({ y: 0 })}>TAKAISIN YLÖS</div>
    <div>
      <img src="favicon.png" alt="logo" />
      <p>
        ACME Industries Ltd.
        <br />Providing reliable tech since 1992
      </p>
    </div>
    <div>
      {#each data.ROUTES as route}
        <a href={route.url} class="link link-hover">{route.label}</a>
      {/each}
    </div>
    <div>
      <div class="grid grid-flow-col gap-4">
        <a href="https://www.linkedin.com/in/arttu-isopahkala-865557ba" target="_blank">
          <Icon type="linkedin" />
        </a>
      </div>
    </div>
    <div>
      <p class="text-sm">Copyright © {new Date().getFullYear()}<br />Arde Media</p>
    </div>
  </div>
</footer>
