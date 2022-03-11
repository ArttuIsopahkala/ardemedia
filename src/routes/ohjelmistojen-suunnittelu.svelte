<script lang="ts">
  import { goto } from '$app/navigation';
  import Button from '$lib/common/Button.svelte';
  import Container from '$lib/common/Container.svelte';
  import Divider from '$lib/common/Divider.svelte';
  import Icon from '$lib/common/Icon.svelte';
  import TechSection from '$lib/common/TechSection.svelte';
  import DesignExamples from '$lib/portfolio/DesignExamples.svelte';
  import PriceItem from '$lib/services/PriceItem.svelte';
  import ServiceSection from '$lib/services/ServiceSection.svelte';
  import { ServicesOptions } from '$lib/static/firestore';
  import ROUTES from '$lib/static/routes';
  import { options } from '../store';

  let services: ServicesOptions;

  options.subscribe((options) => {
    services = options.services;
  });
</script>

<svelte:head>
  <title>Ohjelmistojen suunnittelu | Arde Media</title>
</svelte:head>

<Container>
  <div>
    <h1 class="portfolio-title pt-8">Ohjelmistojen suunnittelu</h1>
    <h4 class="mark">Arde suunnittelee</h4>
    <h1 class="pt-5">Älykkäät ja selkeät järjestelmät</h1>
    <!-- OSA-ALUEET -->
    <div id="service-container" class="flex flex-wrap justify-between pt-5">
      <ServiceSection
        title="UI-suunnitelmat"
        desc="Määritellään sovelluksellesi visuaalinen ilme. Suunnitelmaan voidaan sisällyttää mm. värimaailma, fontit, brändi, mockupit ja logo. Olen tehnyt UI-suunnitelmia useille mobiilisovellukselle sekä nettisivuille."
      >
        <TechSection
          slot="techs"
          title="Käyttämiäni työkaluja"
          techs={[{ techs: 'Photoshop / AdobeDX / Marvel / draw.io' }]}
        />
        <Icon type="brush" slot="icon" />
      </ServiceSection>

      <ServiceSection
        title="Tekninen suunnittelu"
        desc="Löydetään sovelluksellesi sopivia teknologiaratkaisuja. Opastan mikä teknisesti on mahdollista ja järkevää toteuttaa sekä luon suunnitelman sovelluksesi ominaisuuksista, jotka ohjelmistokehittäjä osaa toteuttaa. Suunnitelma vodaan toteuttaa vaatimusmäärittelyinä sisältäen ominaisuuksien yleiset ja tekniset kuvaukset, arkkitehtuurikaaviot sekä mahdolliset käyttöliittymäkuvat."
      >
        <Icon type="compass" slot="icon" />
      </ServiceSection>
    </div>
    <div id="design-example">
      <DesignExamples
        uiTitle="Esimerkki UI-suunnitelmasta"
        techTitle="Esimerkki teknisestä suunnittelusta"
      />
    </div>
    <Divider />
    <!-- HINNASTO -->
    <div class="py-5">
      <h2 class=" mb-3">Hinta</h2>
      <div class="flex flex-row">
        <PriceItem price={services.designPriceHour} list={['Tuntihinnalla']} />
        <!-- <PriceItem price={$designPricePerFeature} list={[$designPriceWithUI]} /> -->
      </div>
    </div>
    <div class="py-5">
      <h3 class="mt-5 mb-3"><span class="mark">100%</span> Tyytyväisyystakuu</h3>
      <p class="lg:max-w-lg">
        Varmistan aina oma-aloitteisesti, että työni jälki on yrityksesi arvoista. Jos et ole
        tyytyväinen työhöni tai huomaat parannettavaa, kerro siitä minulle. Takuu edellyttää reilua
        avoimuutta minua kohtaan jo yhteistyön aikana. Jos et kirjallisen kritiikkisikään jälkeen
        ole tyytyväinen työni tulokseen, en lähetä laskua.
      </p>
    </div>
    <div class="py-5">
      <h3 class="mt-5 mb-3">Kenelle suunnittelupalveluni <span class="mark">sopii?</span></h3>
      <p class="lg:max-w-lg">
        Suunnittelupalveluni sopii sinulle, jolla on jo hyvä käsitys siitä mitä sovellukselta
        haluat. Eniten hyötyä saat palvelusta suurempiin projekteihin, jolloin voin suunnitella
        suurempia kokonaisuuksia kerralla.
      </p>
    </div>
    <div class="py-5">
      <h3 class="mt-5 mb-3">Kenelle suunnittelupalveluni <span class="mark">ei sovi?</span></h3>
      <p class="lg:max-w-lg">
        &#8226; Suunnittelutyötä tehdään usein tiiviissä yhteistyössä päättävän tahon kanssa, joten
        se vaatii molemminpuolista sitoutumista projektiin. Erityisesti aikaasi tarvitaan
        tarkentaviin kysymyksiin ja liiketoiminnan ymmärtämiseen.
        <br />
        &#8226; En ole paras vaihtoehto, jos haluat erityisen tarkkoja UI-suunnitelmia, koska olen toteuttanut
        suunnitelmia lähinnä rautalankamallilla (katso esimerkit).
      </p>
    </div>
    <Divider />
    <div class="flex flex-col justify-center items-center">
      <h2 class="mb-10">Kysy lisätietoja tai katso milloin olen vapaana!</h2>
      <Button
        text="Ota yhteyttä"
        size="sm:btn-lg"
        outlined={false}
        onClick={() => goto(ROUTES.contact)}
      />
    </div>
  </div></Container
>
