<script lang="ts">
  import Values from '$lib/home/Values.svelte';
  import Button from '$lib/common/Button.svelte';
  import { goto } from '$app/navigation';
  import Divider from '$lib/common/Divider.svelte';
  import Company from '$lib/home/Company.svelte';
  import Hero from '$lib/home/Hero.svelte';
  import Reasons from '$lib/home/Reasons.svelte';
  import References from '$lib/home/References.svelte';
  import Services from '$lib/home/Services.svelte';
  import Container from '$lib/common/Container.svelte';
  import ROUTES from '$lib/static/routes';
</script>

<svelte:head>
  <title>Vuokraa Full Stack -kehittäjä käyttöösi! | Arde Media</title>
</svelte:head>

<section class="shadow-md pt-5 px-5 xl:px-0 mb-0.5">
  <div class="container mx-auto max-w-7xl ">
    <Hero />
  </div>
</section>
<Container style="bg-background bg-none">
  <div class="grid mt-4 gap-10">
    <Services />
    <Reasons />
    <References />
    <div>
      <h1 class="my-5">Etkö vielä vakuuttunut?</h1>
      <p class="my-5">Antaa todisteiden puhua puolestaan!</p>
      <Button text="Portfolioon" size="btn-sm sm:btn-lg" onClick={() => goto(ROUTES.portfolio)} />
    </div>
    <Company />
    <Values />
    <Divider />
    <div class="flex flex-col justify-center items-center mb-10">
      <h2 class="mb-10 text-center">Ei voi voittaa, jos ei kehtaa koittaa.</h2>
      <Button
        text="Ota yhteyttä"
        size="sm:btn-lg"
        outlined={false}
        onClick={() => goto(ROUTES.contact)}
      />
    </div>
  </div>
</Container>
