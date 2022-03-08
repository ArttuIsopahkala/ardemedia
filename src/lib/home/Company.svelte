<script lang="ts">
  import { goto } from '$app/navigation';
  import Button from '$lib/common/Button.svelte';
  import Divider from '$lib/common/Divider.svelte';
  import LazyImage from '$lib/common/LazyImage.svelte';
  import ROUTES from '$lib/static/routes';
</script>

<div id="company">
  <h3 class="py-5 text-primary"><Divider>Yritys</Divider></h3>
  <h1 class="">Arde Media tarjoaa auttavan käden</h1>
  <div class="flex flex-row py-5">
    <div class="p-6 card shadow-lg bg-base-100 w-full md:max-w-2xl">
      <p class="mb-4">
        Moro, Arttu tässä! Autan yrityksiä kehittämään ohjelmistotuotantoaan, toteuttamaan
        liiketoimintaa tukevia ohjelmistoja sekä pysymään teknologian kehityksessä mukana. Koska
        ohjelmistoilla voidaan helpottaa ihmisten jokapäiväistä elämää, haluan olla siinä mukana.
        Missioni on koodata maailmaa paremmaksi paikaksi, vaikka rivi kerrallaan. Ongelmanratkaisu
        on koukuttavaa puuhaa ja ohjelmistoja rakentamalla saan mielihyvää onnistumisen tunteista.
        Toivottavasti pääsen kehittämään teidänkin yritystä!
      </p>
      <Button text="Lisätietoa minusta" onClick={() => goto(ROUTES.about)} />
    </div>
    <div class="hidden lg:flex justify-center p-6 md:w-1/2">
      <LazyImage style="max-h-[300px]" src={'muotokuva.png'} alt="muotokuva" />
    </div>
  </div>
</div>
