<script lang="ts">
  import Values from '$lib/about/Values.svelte';
  import Button from '$lib/common/Button.svelte';
  import { goto } from '$app/navigation';
  import Divider from '$lib/common/Divider.svelte';
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
<section class="container mx-auto max-w-5xl pb-10 px-5 xl:px-0 flex flex-col mt-14 gap-14">
  <Services />
  <Reasons />
  <Values />
  <Company />
  <References />
  <Divider />
  <div class="flex flex-col justify-center items-center mb-14">
    <h3 class="mb-10">Lähetä minulle viesti ja laitetaan rattaat pyörimään!</h3>
    <Button text="Ota yhteyttä →" size="btn-lg" outlined={false} onClick={() => goto('/contact')} />
  </div>
</section>
