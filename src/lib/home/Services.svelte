<script lang="ts">
  import Divider from '$lib/common/Divider.svelte';
  import LazyImage from '$lib/common/LazyImage.svelte';
  import TechSection from '$lib/common/TechSection.svelte';

  import ServiceItem from '$lib/home/ServiceItem.svelte';
  import ROUTES from '$lib/static/routes';
</script>

<div id="services">
  <h3 class="py-5 text-primary"><Divider>Palvelut</Divider></h3>
  <h1 class="pb-5">Mitä saisi olla?</h1>
  <div class="grid md:grid-cols-2 gap-5">
    <ServiceItem
      serviceName="Arde kehittää"
      label="Ohjelmistokehitys"
      description="Web- ja mobiilisovellusten kehittämistä lähes 10 vuoden kokemuksella. Voit sijoittaa minut tiimiisi lisäkäsiksi tai erillistä projektia kehittämään. 
      Full Stack -kehittäjänä osaan toteuttaa kokonaisia sovelluksia tai muita kehityshankkeita täysin itsenäisestikin."
      href={ROUTES.development}
      id="development"
    >
      <TechSection
        slot="techs"
        title="Käyttämiäni teknologioita"
        techs={[
          { title: 'Käyttöliittymät', techs: 'React / Svelte / TypeScript / GWT' },
          { title: 'Taustapalvelut', techs: 'AWS / Firebase / NodeJS / Java EE' },
          { title: 'Mobiili', techs: 'Java (Android) / PWA' }
        ]}
      />
      <LazyImage
        slot="image"
        src="laptop.jpg"
        alt="koodia tietokoneen näytöllä ohjelmistokehityksen aikana"
        style="hidden md:flex"
      />
    </ServiceItem>
    <ServiceItem
      serviceName="Arde suunnittelee"
      label="Ohjelmistojen suunnittelu"
      description="Teen teknisen suunnitelman sovelluksesi ominaisuuksista, jonka ohjelmistokehittäjä osaa
  toteuttaa. Suunnitelma voi olla esim. MVP-versio tuotteestasi, jatkokehityssuunnitelma tai
  nykyisen työn tekninen dokumentaatio. Suunnitelma voidaan toteuttaa
  vaatimusmäärittelyillä suosimaasi projektinhallintajärjestelmään. Suunnitelma voi sisältää
  ominaisuuksien yleiset ja tekniset kuvaukset, arkkitehtuurikaaviot sekä mahdolliset käyttöliittymäkuvat."
      href={ROUTES.design}
      id="design"
    >
      <TechSection
        slot="techs"
        title="Käyttämiäni työkaluja"
        techs={[{ title: 'UI/UX ja kaaviot', techs: 'Photoshop / AdobeDX / draw.io / Marvel' }]}
      />
      <LazyImage
        slot="image"
        src="design.jpg"
        alt="suunnitelmia ohjelmistosuunnittelun aikana työpöydällä"
        style="hidden md:flex"
      />
    </ServiceItem>
  </div>
</div>
