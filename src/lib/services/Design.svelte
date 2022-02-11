<script lang="ts">
  import { goto } from '$app/navigation';
  import Button from '$lib/common/Button.svelte';
  import Collapse from '$lib/common/Collapse.svelte';
  import Divider from '$lib/common/Divider.svelte';
  import Icon from '$lib/common/Icon.svelte';
  import { fade } from 'svelte/transition';
  import { designPriceHour } from './../../store.js';
  import PriceItem from './PriceItem.svelte';
  import ServiceSection from './ServiceSection.svelte';
  import LazyImage from '$lib/common/LazyImage.svelte';
  import TechSection from '$lib/common/TechSection.svelte';
</script>

<div class="" in:fade={{ duration: 300 }}>
  <div>
    <h4 class="mark">Arde suunnittelee</h4>
    <h1 class="py-5">Älykkäät ja selkeät järjestelmät</h1>
  </div>
  <!-- OSA-ALUEET -->
  <div id="service-container" class="flex flex-wrap justify-between">
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
    <Collapse title="Esimerkki UI-suunnitelmasta">
      <div class="flex flex-col gap-8">
        <div>
          <h3 class="mb-2">Väripaletti</h3>
          <div class="flex flex-row flex-wrap">
            <div
              class="h-[50px] w-[100px] flex justify-center items-center bg-primary text-textLight"
            >
              #F89B00
            </div>
            <div
              class="h-[50px] w-[100px] flex justify-center items-center bg-base-content text-textLight"
            >
              #1f2937
            </div>
            <div
              class="h-[50px] w-[100px] flex justify-center items-center bg-base-300 text-textLight"
            >
              #d1d5db
            </div>
            <div
              class="h-[50px] w-[100px] flex justify-center items-center bg-base-100 text-textDark"
            >
              #ffffff
            </div>
          </div>
        </div>
        <div>
          <h3 class="mb-2">Fontit</h3>
          <div class="flex flex-row gap-5 flex-wrap">
            <div class="flex-col">
              <p class="text-sm">Open Sans</p>
              <h1 class="font-['Open_Sans'] normal-case">AaBbCc</h1>
              <h2 class="font-['Open_Sans'] normal-case">AaBbCc</h2>
              <h3 class="font-['Open_Sans'] normal-case">AaBbCc</h3>
              <h4 class="font-['Open_Sans'] normal-case">AaBbCc</h4>
            </div>
            <div class="flex-col">
              <p class="text-sm">Barlow Condensed</p>
              <h1 class="font-['Barlow_Condensed'] normal-case">AaBbCc</h1>
              <h2 class="font-['Barlow_Condensed'] normal-case">AaBbCc</h2>
              <h3 class="font-['Barlow_Condensed'] normal-case">AaBbCc</h3>
              <h4 class="font-['Barlow_Condensed'] normal-case">AaBbCc</h4>
            </div>
            <div class="flex-col">
              <p class="text-sm">Rampart One</p>
              <h1 class="font-['Rampart_One'] normal-case">AaBbCc</h1>
              <h2 class="font-['Rampart_One'] normal-case">AaBbCc</h2>
              <h3 class="font-['Rampart_One'] normal-case">AaBbCc</h3>
              <h4 class="font-['Rampart_One'] normal-case">AaBbCc</h4>
            </div>
          </div>
        </div>
        <div>
          <h3 class="mb-2">Logo</h3>
          <div class="flex flex-row gap-5 flex-wrap">
            <LazyImage style="max-h-[800px]" src="logo_black.png" alt="musta logo" />
            <LazyImage style="max-h-[800px]" src="logo_white.png" alt="valkoinen logo" />
          </div>
        </div>
        <div>
          <h3 class="mb-2">UI-kuva</h3>
          <LazyImage style="max-h-[800px]" src="ui-kuva.png" alt="esimerkki ui-kuvasta" />
        </div>
      </div>
    </Collapse>
    <Collapse title="Esimerkki teknisestä suunnittelusta">
      <h3 class="mb-2">Projektinäkymä</h3>
      <LazyImage style="max-h-[800px]" src="projekti.png" alt="esimerkki projektinäkymästä" />
      <h3 class="mb-2 mt-5">Vaatimusmäärittely</h3>
      <LazyImage style="max-h-[800px]" src="vaatimus.png" alt="esimerkki vaatimusmäärittelystä" />
      <h3 class="mb-2 mt-5">Tekninen kuvaus (AWS)</h3>
      <LazyImage style="max-h-[600px]" src="infra.png" alt="esimerkki teknisestä kuvauksesta" />
    </Collapse>
  </div>
  <Divider />
  <!-- HINNASTO -->
  <div class="py-5">
    <h2 class=" mb-3">Hinta</h2>
    <div class="flex flex-row gap-5">
      <PriceItem price={$designPriceHour} list={['Tuntihinnalla']} />
      <!-- <PriceItem price={$designPricePerFeature} list={[$designPriceWithUI]} /> -->
    </div>
  </div>
  <div class="py-5">
    <h3 class="mt-5 mb-3"><span class="mark">100%</span> Tyytyväisyystakuu</h3>
    <p class="lg:max-w-lg">
      Varmistan aina oma-aloitteisesti, että työni jälki on yrityksesi arvoista. Jos et ole
      tyytyväinen työhöni tai huomaat parannettavaa, kerro siitä minulle. Takuu edellyttää reilua
      avoimuutta minua kohtaan jo yhteistyön aikana. Jos et kirjallisen kritiikkisikään jälkeen ole
      tyytyväinen työni tulokseen, en lähetä laskua.
    </p>
  </div>
  <div class="py-5">
    <h3 class="mt-5 mb-3">Kenelle suunnittelupalveluni <span class="mark">sopii?</span></h3>
    <p class="lg:max-w-lg">
      Suunnittelupalveluni sopii sinulle, jolla on jo hyvä käsitys siitä mitä sovellukselta haluat.
      Eniten hyötyä saat palvelusta suurempiin projekteihin, jolloin voin suunnitella suurempia
      kokonaisuuksia kerralla.
    </p>
  </div>
  <div class="py-5">
    <h3 class="mt-5 mb-3">Kenelle suunnittelupalveluni <span class="mark">ei sovi?</span></h3>
    <p class="lg:max-w-lg">
      &#8226; Suunnittelutyötä tehdään usein tiiviissä yhteistyössä päättävän tahon kanssa, joten se
      vaatii molemminpuolista sitoutumista projektiin. Erityisesti aikaasi tarvitaan tarkentaviin
      kysymyksiin ja liiketoiminnan ymmärtämiseen.
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
      onClick={() => goto('/contact')}
    />
  </div>
</div>
