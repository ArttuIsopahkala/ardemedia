<script lang="ts">
  import { goto } from '$app/navigation';
  import Button from '$lib/common/Button.svelte';
  import Divider from '$lib/common/Divider.svelte';
  import Icon from '$lib/common/Icon.svelte';
  import { fade } from 'svelte/transition';
  import { devPrice, devPriceHigh } from './../../store.js';
  import PriceItem from './PriceItem.svelte';
  import ServiceSection from './ServiceSection.svelte';
</script>

<div class="" in:fade={{ duration: 300 }}>
  <div>
    <h5 class="mark">Arde kehittää</h5>
    <h2 class="pt-5">Timanttista <span class="mark">koodia</span> yritykseesi</h2>
    <div class="flex flex-wrap justify-between">
      <ServiceSection
        title="Web-sovellukset"
        desc="Full Stack-ohjelmistokehittäjänä osaan toteuttaa käyttöliittymät, taustapalvelut,
    tietokannat ja siihen päälle Devsit ja Opsit."
        techTitle="Teknologioita"
        techText="React / TypeScript / AWS / GWT / Svelte / NodeJS"
      >
        <!-- <MdDesktopWindows slot="icon" /> -->
        <span class="text-xl" slot="icon">&#128187;</span>
      </ServiceSection>
      <ServiceSection
        title="Mobiilisovellukset"
        desc="Mobiilisovelluksia olen työstänyt lähinnä Javalla, mutta myös React Native ja Flutter -projektit kiinnostavat."
        techTitle="Teknologioita"
        techText="Java / Android"
      >
        <!-- <FaMobileAlt slot="icon" /> -->
        <span class="text-xl" slot="icon">&#128241;</span>
      </ServiceSection>
    </div>
    <!-- HINNASTO -->
    <div class="py-5">
      <h3 class="mark mb-3">Hinta</h3>
      <div class="flex flex-row gap-5">
        <PriceItem price={$devPrice} list={['Yli kuukauden kestävät projektit']} />
        <PriceItem
          price={$devPriceHigh}
          list={[
            'Alle kuukauden kestävät projektit',
            'GWT projektit',
            'Normaalia vastuullisempi rooli (esim. Lead)'
          ]}
        />
      </div>
    </div>
    <Divider />
    <h3 class="py-5"><span class="mark">Osa-alueita</span>, joista minulla on kokemusta...</h3>
  </div>
  <!-- OSA-ALUEET -->
  <div id="service-container" class="flex flex-wrap justify-between">
    <ServiceSection
      title="Pilvipalvelut"
      desc="Etsitään sovelluksellesi koti. Olen toteuttanut Firebasen päälle useita mobiilisovelluksia sekä web-sovelluksen, käyttäen Firebasen tietokantoja, analytiikkaa ja tallennustiloja. Firebase on helppo oppia ja sen päälle voidaan rakentaa keskitetysti monimutkainenkin järjestelmä. Amazon Web Services (AWS) olen käyttänyt rajapinnan ja web-sovelluksen alustana. AWS palveluja mm. EC2, S3, Cognito, API Gateway, DynamoDB. Alustat: Firebase, AWS"
    >
      <Icon type="cloud" slot="icon" />
    </ServiceSection>

    <ServiceSection
      title="Testaus"
      desc="Kokemukseni testaamisesta on suhteellisen OK. Omien sekä työnantajan sovelluksia olen yksikkötestannut Jest, JUnit ja PHPUnit-kirjastoilla. Teinpä myös asiakkaan PHP bäkkärin testauksen PHPUnit:n avulla. Rajapintatestausta olen toteuttanut AVA:lla."
      techTitle="Teknologioita"
      techText="Jest, JUnit, PHPUnit, AVA"
    >
      <Icon type="tasks" slot="icon" />
    </ServiceSection>

    <ServiceSection
      title="Tietoturva"
      desc="Olen käynyt kurssin Tietoturvan riskien hallinta ja yksityisyyden suoja  sekä Tietoturvan perusteet. Minulla on Tietoturvan ABC -sertifikaatti. Erityisesti web-sovellusten tietoturva ja riskit ovat hyvin hallussa! Voin tulla tarkastamaan teidänkin sovellusten tietoturvan sekä kirjoittaa tietosuojakäytännön."
    >
      <Icon type="security" slot="icon" />
    </ServiceSection>

    <ServiceSection
      title="Automatisointi"
      desc="Voin automatisoida ohjelmistokehityksen manuaalisia töitä (CI/CD), kuten testien ajon, automaattisen julkaisun ja arkkitehtuurien pystytyksen. Näissä käyttämiäni työkaluja ovat mm. CircleCI, Serverless ja Github Actions. Mikä on CI/CD? Kerro lisää."
    >
      <Icon type="settings" slot="icon" />
    </ServiceSection>

    <ServiceSection
      title="Ohjelmiston uudistaminen"
      desc="Onko koodin &#34;parasta ennen&#34; -päiväys mennyt? Voin toteuttaa vanhan järjestelmän nykyaikaisilla teknologioilla.  Uudistin opinnäytetyönä Flash-pohjaisen järjestelmän GWT:n päälle ja myöhemmin GWT pohjaisen järjestelmän Reactin päälle."
    >
      <Icon type="recycle" slot="icon" />
    </ServiceSection>
  </div>
  <Divider />
  <div id="service-info" class="flex flex-col py-5">
    <h3 class=""><span class="mark">100%</span> Tyytyväisyystakuu</h3>
    <p class="lg:max-w-lg">
      Varmistan aina oma-aloitteisesti, että työni jälki on yrityksesi arvoista. Jos et ole
      tyytyväinen työhöni tai huomaat parannettavaa, kerro siitä minulle. Takuu edellyttää reilua
      avoimuutta minua kohtaan jo yhteistyön aikana. Jos et kirjallisen kritiikkisikään jälkeen ole
      tyytyväinen työni tulokseen, en lähetä laskua.
    </p>
    <h3 class="mt-5">Kenelle palvelu <span class="mark">sopii?</span></h3>
    <p class="lg:max-w-lg">
      Mikään projekti ei ole liian pieni tai liian suuri. Ideaalina minut kannattaa sijoittaa jo
      olemassa olevaan ohjelmistokehitystiimiisi. Eniten voin tuottaa arvoa varsinkin pieniin ja
      keskisuuriin kehitystä haluaviin yrityksiin. Voin toimia esimerkiksi lisäkäsinä projektin ajan
      tai pienempiä sovelluksia toteuttaa täysin itsenäisestikin.
    </p>
    <h3 class="my-5">Kenelle palvelu <span class="mark">ei sovi?</span></h3>
    <ul class="flex flex-col gap-4 lg:max-w-lg">
      <li>
        &#8226; <b>Jos haluat perinteiset nettisivut</b><br />Sisällönhallintajärjestelmät kuten
        Wordpress eivät ole vahvinta osaamistani, joten saat nettisivut muualta edullisemmin.
      </li>
      <li>
        &#8226; <b>Jos haluat kokonaisen tiimin</b><br /> Koska toimin yksin, suurempiin projekteihin
        minut kannattaa sijoittaa jo olemassa olevaan tiimiin.
      </li>
    </ul>
    <!-- <p class="lg:max-w-lg">
      Perinteiset nettisivut saat edullisemmin muualta, koska sisällönhallintajärjestelmät (esim.
      Wordpress) eivät ole vahvinta osaamistani. Lisäksi koska toimin yksin, suurempiin projekteihin
      minut kannattaa sijoittaa jo olemassa olevaan tiimiin.
    </p> -->
    <h3 class="mt-5">Mitä <span class="mark">hyötyjä</span> saat minusta?</h3>
    <p class="mb-5 lg:max-w-lg">
      Saat tiimiisi tehokkaan, luotettavan, selkeän ja jokaista arvostavan hyvän tyypin, joka lupaa
      teknologian avulla kehittää yritystäsi kuin omaansa.
    </p>
    <Button
      text="Yrityksen arvot →"
      outlined={true}
      secondary={false}
      onClick={() => goto('/#values')}
    />
    <Divider />
    <h3 class="mb-5">Kysy lisätietoja tai katso milloin olen vapaana!</h3>
    <Button text="Ota yhteyttä →" outlined={false} onClick={() => goto('/contact')} />
  </div>
</div>
