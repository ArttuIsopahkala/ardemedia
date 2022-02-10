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
  import Container from '$lib/common/Container.svelte';
</script>

<svelte:head>
  <title>Vuokraa Full Stack -koodari käyttöösi! | Arde Media</title>
</svelte:head>

<section class="shadow-md pt-5 px-5 xl:px-0 mb-0.5">
  <div class="container mx-auto max-w-7xl ">
    <Hero />
  </div>
</section>
<Container style="bg-background bg-none">
  <div class="flex flex-col mt-14 gap-14">
    <Services />
    <Reasons />
    <References />
    <div>
      <h1 class="my-5">Etkö vielä vakuuttunut?</h1>
      <p class="my-5">Antaa todisteiden puhua puolestaan!</p>
      <Button text="Portfolioon" size="btn-sm sm:btn-lg" onClick={() => goto("/portfolio")}/>
    </div>
    <Divider />
    <Company />
    <Values />
    <Divider />
    <div class="flex flex-col justify-center items-center mb-14">
      <h2 class="mb-10">Lähetä minulle viesti niin laitetaan rattaat pyörimään!</h2>
      <Button
        text="Ota yhteyttä"
        size="sm:btn-lg"
        outlined={false}
        onClick={() => goto('/contact')}
      />
    </div>
  </div>
</Container>
<!-- <section
  class="bg-background bg-none"
>
  <section
    class="container mx-auto max-w-5xl pb-10 px-5 xl:px-0 flex flex-col mt-14 gap-14 "
  >
    
  </section>
</section>
 -->
