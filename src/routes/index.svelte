<script lang="ts">
  import Company from '$lib/home/Company.svelte';
  import Hero from '$lib/home/Hero.svelte';
  import References from '$lib/home/References.svelte';
  import Services from '$lib/home/Services.svelte';
</script>

<svelte:head>
  <title>Arde Media | Vuokraa Full Stack -koodari</title>
</svelte:head>

<section class="bg-base-100 bg-[url('/bg-pattern.svg')] shadow-md">
  <div class="container mx-auto max-w-7xl ">
    <Hero />
  </div>
</section>
<section class="container mx-auto max-w-5xl">
  <Services />
  <Company />
  <References />
</section>
