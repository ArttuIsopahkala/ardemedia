<script lang="ts">
  import { goto } from '$app/navigation';

  import clsx from 'clsx';
  import { text } from 'svelte/internal';
  import Button from '$lib/Button.svelte';

</script>

<div id="company">
  <h2 class="p-5">Arde Media tarjoaa auttavan käden</h2>
  <div class="flex flex-row p-4">
    <div class="p-6 card shadow-lg bg-base-100 md:w-1/2">
      <p class="mb-4">
        Moro, Arttu Isopahkala tässä! Autan yrityksiä kehittämään ohjelmistotuotantoaan,
        toteuttamaan liiketoimintaa tukevia ohjelmistoja sekä pysymään teknologian kehityksessä
        mukana. Koska ohjelmistoilla voidaan helpottaa ihmisten jokapäiväistä elämää, haluan olla
        siinä mukana. Missioni on koodata maailmaa paremmaksi paikaksi, vaikka rivi kerrallaan.
        Ongelmanratkaisu on minulle koukuttavaa puuhaa ja ohjelmistoja rakentamalla saan siihen
        helpotusta. Toivottavasti otat minut kehittämään sinunkin yritystä!
      </p>
      <Button text="Lisätietoa minusta →" onClick={() => goto('/about')} />
    </div>
    <div class="hidden md:flex justify-center p-6 md:w-1/2">
      <img class="max-h-[300px]" src={'muotokuva.png'} alt="muotokuva" />
    </div>
  </div>
</div>
