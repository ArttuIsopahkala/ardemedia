<script context="module">
  import {browser, dev}  from '$app/env'
import Selector from '$lib/services/Selector.svelte';
  export const hydrate = dev
  export const router = browser
  export const prerender = true
</script>

<svelte:head>
  <title>Services</title>
</svelte:head>

<section class="container mx-auto max-w-5xl bg-base-100 shadow-md">
  <Selector />
</section>
