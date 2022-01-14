<script lang="ts">
  import MdSecurity from 'svelte-icons/md/MdSecurity.svelte';
  import MdCloud from 'svelte-icons/md/MdCloud.svelte';
  import FaRecycle from 'svelte-icons/fa/FaRecycle.svelte';
  import FaMobileAlt from 'svelte-icons/fa/FaMobileAlt.svelte';
  import FaTasks from 'svelte-icons/fa/FaTasks.svelte';
  import MdSettings from 'svelte-icons/md/MdSettings.svelte';
  import MdDesktopWindows from 'svelte-icons/md/MdDesktopWindows.svelte';
  import ServiceSection from './ServiceSection.svelte';
  import { fade } from 'svelte/transition';
  import { devPrice, devPriceHigh } from './../../store.js';
  import Divider from '$lib/Divider.svelte';
  import Button from '$lib/Button.svelte';
  import { goto } from '$app/navigation';
</script>

<div id="development" class="" in:fade={{ duration: 300 }}>
  <div>
    <div class="px-5">
      <h5 class="mark">Arde kehittää</h5>
      <h2 class="pt-5">Timanttista <span class="mark">koodia</span> yritykseesi</h2>
    </div>
    <div class="flex flex-wrap justify-between">
      <ServiceSection
        title="Web-sovellukset"
        desc="Full Stack-ohjelmistokehittäjänä osaan toteuttaa käyttöliittymät, taustapalvelut,
    tietokannat ja siihen päälle Devsit ja Opsit."
        techTitle="Teknologioita"
        techText="React / TypeScript / GWT / Svelte / NodeJS"
      >
        <MdDesktopWindows slot="icon" />
      </ServiceSection>
      <ServiceSection
        title="Mobiilisovellukset"
        desc="Mobiilisovelluksia olen työstänyt lähinnä Javalla, mutta myös React Nativesta ja Flutter projektit kiinnostavat."
        techTitle="Teknologioita"
        techText="Java / Android"
      >
        <FaMobileAlt slot="icon" />
      </ServiceSection>
    </div>
    <!-- HINNASTO -->
    <div class="p-5">
      <h3 class="mark mb-3">Hinta</h3>
      <div class="flex flex-row gap-5">
        <div class="p-5 bg-card">
          <h4 class="">{$devPrice}</h4>
          <p>+ alv 24%</p>
          <p class="mt-2">&#8226; Yli kuukauden kestävät projektit</p>
        </div>
        <div class="p-5 bg-card">
          <h4 class="">{$devPriceHigh}</h4>
          <p>+ alv 24%</p>
          <p class="mt-2">&#8226; Alle kuukauden kestävät projektit</p>
          <p>&#8226; GWT projektit</p>
          <p>&#8226; Normaalia vastuullisempi tehtävä (esim. Leadin rooli)</p>
        </div>
      </div>
    </div>
    <Divider />
    <h3 class="p-5"><span class="mark">Osa-alueita</span>, joissa voin sinua auttaa...</h3>
  </div>
  <!-- OSA-ALUEET -->
  <div id="service-container" class="flex flex-wrap justify-between">
    <ServiceSection
      title="Pilvipalvelut"
      desc="Etsitään sovelluksellesi koti. Olen toteuttanut Firebasen päälle useita mobiilisovelluksia sekä web-sovelluksen, käyttäen Firebasen tietokantoja, analytiikkaa ja tallennustiloja. Firebase on helppo oppia ja sen päälle voidaan rakentaa keskitetysti monimutkainenkin järjestelmä. Amazon Web Services (AWS) olen käyttänyt rajapinnan ja web-sovelluksen alustana. AWS palveluja mm. EC2, S3, Cognito, API Gateway, DynamoDB. Alustat: Firebase, AWS"
    >
      <MdCloud slot="icon" />
    </ServiceSection>

    <ServiceSection
      title="Testaus"
      desc="Kokemukseni testaamisesta on suhteellisen OK. Omien sekä työnantajan sovelluksia olen yksikkötestannut Jest, JUnit ja PHPUnit-kirjastoilla. Teinpä myös asiakkaan PHP bäkkärin testauksen PHPUnit:n avulla. Rajapintatestausta olen toteuttanut AVA:lla."
      techTitle="Teknologioita"
      techText="Jest, JUnit, PHPUnit, AVA"
    >
      <FaTasks slot="icon" />
    </ServiceSection>

    <ServiceSection
      title="Tietoturva"
      desc="Olen käynyt kurssin Tietoturvan riskien hallinta ja yksityisyyden suoja  sekä Tietoturvan perusteet. Minulla on Tietoturvan ABC -sertifikaatti. Erityisesti web-sovellusten tietoturva ja riskit ovat hyvin hallussa! Voin tulla tarkastamaan teidänkin sovellusten tietoturvan sekä kirjoittaa tietosuojakäytännön."
    >
      <MdSecurity slot="icon" />
    </ServiceSection>

    <ServiceSection
      title="Automatisointi"
      desc="Voin automatisoida ohjelmistokehityksen manuaalisia töitä (CI/CD), kuten testien ajon, automaattisen julkaisun ja arkkitehtuurien pystytyksen. Näissä käyttämiäni työkaluja ovat mm. CircleCI, Serverless ja Github Actions. Mikä on CI/CD? Kerro lisää."
    >
      <MdSettings slot="icon" />
    </ServiceSection>

    <ServiceSection
      title="Ohjelmiston uudistaminen"
      desc="Onko koodin &#34;parasta ennen&#34; -päiväys mennyt? Voin toteuttaa vanhan järjestelmän nykyaikaisilla teknologioilla.  Uudistin opinnäytetyönä Flash-pohjaisen järjestelmän GWT:n päälle ja myöhemmin GWT pohjaisen järjestelmän Reactin päälle."
    >
      <FaRecycle slot="icon" />
    </ServiceSection>
  </div>
  <Divider />
  <div id="service-info" class="flex flex-col p-5">
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
    <h3 class="mt-5">Kenelle palvelu <span class="mark">ei sovi?</span></h3>
    <p class="lg:max-w-lg">
      Perus nettisivujen toteutus kannattaa hankkia muualta, koska en ole Wordpress tms taikuri. En
      toteuta myöskään suuria web-sovelluksia yksin, koska se ei ole järkevää. Koska toimin
      toistaiseksi yksin niin suurempiin projekteihin kannattaakin sijoittaa minut tiimiin niin
      aikataulut eivät veny.
    </p>
    <h3 class="mt-5">Mitä <span class="mark">hyötyä</span> saat minusta?</h3>
    <p class="mb-5 lg:max-w-lg">
      Saat tiimiisi tehokkaan, luotettavan, selkeän ja jokaista arvostavan hyvän tyypin, joka lupaa
      teknologian avulla kehittää yritystäsi kuin omaansa.
    </p>
    <Button
      text="Yrityksen arvot →"
      outlined={true}
      secondary={false}
      onClick={() => goto('/about#values')}
    />
    <Divider/>
    <h3 class="mb-5">Kysy lisätietoja tai katso milloin olen vapaana!</h3>
    <Button text="Ota yhteyttä →" outlined={false} onClick={() => goto('/contact')} />
  </div>
</div>
