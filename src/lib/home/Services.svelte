<script lang="ts">
  import ServiceItem from '$lib/home/ServiceItem.svelte';
</script>

<div id="services">
  <h2 class="py-5">Palvelut</h2>
  <div class="flex flex-row flex-wrap gap-5">
    <ServiceItem
      serviceName="Arde kehittää"
      label="Tarvitsetko ohjelmistokehittäjää?"
      description="Voit sijoita minut tiimiisi tekemään samoja hommia kuin muutkin. "
      href="/services"
      id="development"
      techTitle="Käyttämiäni teknologioita"
      techs={[
        { title: 'Käyttöliittymät', techs: 'React / TypeScript / GWT / Svelte' },
        { title: 'Taustapalvelut', techs: 'AWS / Firebase / Java EE' },
        { title: 'Mobiili', techs: 'Java (Android) / PWA' }
      ]}
    >
      <img slot="image" src="laptop.jpg" alt="läppäri" />
    </ServiceItem>
    <ServiceItem
      serviceName="Arde suunnittelee"
      label="Tarvitsetko teknistä suunnitelmaa?"
      description="Teen teknisen suunnitelman sovelluksesi ominaisuuksista, jonka ohjelmistokehittäjä osaa
  toteuttaa. Suunnitelma voi olla esim. MVP-versio tuotteestasi, jatkokehityssuunnitelma tai
  nykyisen työn tekninen dokumentaatio. Suunnitelma voidaan toteuttaa
  vaatimusmäärittelyillä suosimaasi projektinhallintajärjestelmään. Suunnitelma sisältää
  ominaisuuksien yleiset ja tekniset kuvaukset sekä mahdolliset käyttöliittymäkuvat."
      href="/services"
      id="design"
      techTitle="Käyttämiäni työkaluja"
      techs={[
        { title: 'Projektinhallinta', techs: 'Jira / Trello / GitHub Projects' },
        { title: 'UI/UX', techs: 'Photoshop / AdobeDX / draw.io / Marvel' }
      ]}
    >
      <img slot="image" src="design.jpg" alt="design" />
    </ServiceItem>
  </div>
</div>
