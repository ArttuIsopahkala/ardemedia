<script lang="ts">
  import LazyImage from '$lib/common/LazyImage.svelte';

  import ServiceItem from '$lib/home/ServiceItem.svelte';
</script>

<div id="services">
  <h4 class="py-5 text-primary">Palvelut</h4>
  <h2 class="pb-5">Mitä saisi olla?</h2>
  <div class="flex flex-row flex-wrap gap-5">
    <ServiceItem
      serviceName="Arde kehittää"
      label="Web- ja mobiilikehitys"
      description="Lähes 10 vuoden ohjelmointikokemuksen turvin voit sijoittaa minut tiimiisi lisäkäsiksi tai erillistä projektia kehittämään. 
      Full Stack -koodarina osaan toteuttaa kokonaisia sovelluksia tai muita kehityshankkeita täysin itsenäisestikin."
      href="/services"
      id="development"
      techTitle="Käyttämiäni teknologioita"
      techs={[
        { title: 'Käyttöliittymät', techs: 'React / TypeScript / GWT / Svelte' },
        { title: 'Taustapalvelut', techs: 'AWS / Firebase / Java EE' },
        { title: 'Mobiili', techs: 'Java (Android) / PWA' }
      ]}
    >
      <LazyImage slot="image" src="laptop.jpg" alt="läppäri" />
    </ServiceItem>
    <ServiceItem
      serviceName="Arde suunnittelee"
      label="Ohjelmistojen suunnittelu"
      description="Teen teknisen suunnitelman sovelluksesi ominaisuuksista, jonka ohjelmistokehittäjä osaa
  toteuttaa. Suunnitelma voi olla esim. MVP-versio tuotteestasi, jatkokehityssuunnitelma tai
  nykyisen työn tekninen dokumentaatio. Suunnitelma voidaan toteuttaa
  vaatimusmäärittelyillä suosimaasi projektinhallintajärjestelmään. Suunnitelma voi sisältää
  ominaisuuksien yleiset ja tekniset kuvaukset, arkkitehtuurikaaviot sekä mahdolliset käyttöliittymäkuvat."
      href="/services"
      id="design"
      techTitle="Käyttämiäni työkaluja"
      techs={[{ title: 'UI/UX ja kaaviot', techs: 'Photoshop / AdobeDX / draw.io / Marvel' }]}
    >
      <LazyImage slot="image" src="design.jpg" alt="design" />
    </ServiceItem>
  </div>
</div>
