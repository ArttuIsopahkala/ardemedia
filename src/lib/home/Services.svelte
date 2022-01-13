<script lang="ts">
  import { fly, fade } from 'svelte/transition';
  import clsx from 'clsx';
  import ServiceItem from './ServiceItem.svelte';
  import Button from '$lib/Button.svelte';
  import { goto } from '$app/navigation';
</script>

<div id="services">
  <h2 class="p-5">Palvelut</h2>
  <div class="card lg:card-side shadow-md mb-5 bg-base-100">
    <figure>
      <img class="max-h-[400px] p-5" src="laptop.jpg" alt="läppäri" />
    </figure>
    <div class="card-body">
      <h5 class="text-primary mb-2 mark">Arde kehittää</h5>
      <h2 class="card-title">Tarvitsetko web- tai mobiilikehittäjää?</h2>
      <p>Toteutan Web-sovelluskehitystä yritysten yksilölliseen tarpeeseen.</p>
      <h5 class="mt-4 text-primary">Käyttämiäni teknologioita</h5>
      <h6>Käyttöliittymät</h6>
      <span class="mb-1">React / TypeScript / GWT / Svelte</span>
      <h6>Taustapalvelut</h6>
      <span class="mb-1">AWS / Firebase / Java EE</span>
      <h6>Mobiili</h6>
      <span>Java (Android) / PWA</span>

      <div class="card-actions flex justify-between items-center">
        <div class="flex flex-col">
          <h4><span class="text-primary">Arde kehittää</span> hintaan</h4>
          <div class="stat-value">alk. 70€ / h</div>
          <div class="stat-desc">+ alv 24%</div>
          <div class="badge badge-lg mx-2">alk. 70€ / h + alv 24%</div>
        </div>
        <Button
          text="Lisätietoa palvelusta →"
          onClick={() => goto('/services/web')}
          outlined={false}
        />
      </div>
    </div>
  </div>
  <div class="flex flex-wrap justify-between">
    <div id="service-web" class="card shadow-md m-5 bg-base-100 lg:w-[45%]">
      <figure>
        <img src="laptop.jpg" alt="läppäri" />
      </figure>
      <div class="card-body">
        <h5 class="text-primary mb-2 mark">Arde kehittää</h5>
        <h2 class="card-title">Tarvitsetko web- tai mobiilikehittäjää?</h2>
        <p>Toteutan Web-sovelluskehitystä yritysten yksilölliseen tarpeeseen.</p>
        <h5 class="mt-4 text-primary">Käyttämiäni teknologioita</h5>
        <h6>Käyttöliittymät</h6>
        <span class="mb-1">React / TypeScript / GWT / Svelte</span>
        <h6>Taustapalvelut</h6>
        <span class="mb-1">AWS / Firebase / Java EE</span>
        <h6>Mobiili</h6>
        <span>Java (Android) / PWA</span>
        <div class="mb-2 flex flex-row mt-4">
          <h4 class="text-primary">Arde kehittää</h4>
          <h4 class="ml-2">hintaan</h4>
        </div>
        <div class="mb-2 flex flex-row">
          <div class="badge mx-2">alk 65€ / h + alv 24%</div>
        </div>
        <div class="card-actions">
          <Button text="Lisätietoa palvelusta →" onClick={() => goto('/services/web')} />
        </div>
      </div>
    </div>
    <div id="service-design" class="card shadow-md m-5 bg-base-100 w-full lg:w-[45%]">
      <figure>
        <img src="design.jpg" alt="design" />
      </figure>
      <div class="card-body">
        <h5 class="text-primary mb-2 mark">Arde suunnittelee</h5>
        <h2 class="card-title">Tarvitsetko web-suunnittelijaa?</h2>
        <p>
          Toteutan teknisen suunnitelman sovelluksesi ominaisuuksista, jonka mukaan
          ohjelmistokehittäjä osaa toteuttaa. Suunnitelma toteutetaan vaatimusmääritelmillä, joita
          voidaan tehdä nopealla aikataululla. Vaatimusmäärittely on kehitystarpeen muuntamista
          suunnitelmaksi, jonka avulla ohjelmistokehittäjä tietää kuinka ominaisuus toteutetaan.
          Vaatimusmäärittely sisältää ominaisuuden yleisen ja teknisen kuvauksen sekä mahdollisen
          käyt-töliittymäsuunnitelman. Vaatimusmäärittelyjä tehdään tiiviissä yhteistyössä asiakkaan
          kanssa.
        </p>
        <h5 class="mt-4 text-primary">Käyttämiäni työkaluja</h5>
        <h6>Projektinhallinta</h6>
        <span class="mb-1">Jira / Trello / GitHub Projects</span>
        <h6>UI/UX</h6>
        <span>AdobeDX / draw.io / Marvel / NinjaMock</span>
        <div class="mb-2 flex flex-row">
          <h4 class="text-primary">Arde suunnittelee</h4>
          <h4 class="ml-2">hintaan</h4>
        </div>
        <div class="mb-2 flex flex-row mt-4">
          <div class="badge mx-2">alk 65€ / h + alv 24% tai 10€ / vaatimusmäärittely</div>
        </div>
        <div class="card-actions">
          <Button text="Lisätietoa palvelusta →" onClick={() => goto('/services/design')} />
        </div>
      </div>
    </div>
  </div>
</div>
