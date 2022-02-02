<script lang="ts">
  import Container from '$lib/common/Container.svelte';
  import Company from '$lib/home/Company.svelte';
  import Hero from '$lib/home/Hero.svelte';
  import Reasons from '$lib/home/Reasons.svelte';
  import References from '$lib/home/References.svelte';
  import Services from '$lib/home/Services.svelte';
</script>

<svelte:head>
  <title>Arde Media | Vuokraa Full Stack -koodari</title>
</svelte:head>

<section class="bg-base-100 bg-[url('/bg-pattern.svg')] shadow-md pt-5 px-5 xl:px-0">
  <div class="container mx-auto max-w-7xl ">
    <Hero />
  </div>
</section>
<section class="container mx-auto max-w-5xl pb-10 px-5 xl:px-0">
  <Reasons />
  <Services />
  <Company />
  <References />
</section>
