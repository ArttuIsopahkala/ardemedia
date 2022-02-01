<script lang="ts">
  import MdBrush from 'svelte-icons/md/MdBrush.svelte';
  import FaWarehouse from 'svelte-icons/fa/FaWarehouse.svelte';
  import FaDraftingCompass from 'svelte-icons/fa/FaDraftingCompass.svelte';
  import MdViewQuilt from 'svelte-icons/md/MdViewQuilt.svelte';
  import ServiceSection from './ServiceSection.svelte';
  import { fade } from 'svelte/transition';
  import { designPrice, designPriceHigh } from './../../store.js';
  import Divider from '$lib/common/Divider.svelte';
  import Button from '$lib/common/Button.svelte';
  import { goto } from '$app/navigation';
  import clsx from 'clsx';
  import Collapse from '$lib/common/Collapse.svelte';
  import PriceItem from './PriceItem.svelte';

  let exampleTrello: boolean = false;
  let exampleUI: boolean = false;
</script>

<div id="development" class="" in:fade={{ duration: 300 }}>
  <div>
    <h5 class="mark">Arde suunnittelee</h5>
    <h2 class="pt-5">Älykkäät ja <span class="mark">selkeät</span> järjestelmät</h2>
    <p class="py-5">
      Ydinosaamiseni on ohjelmistokehityksen puolella, mutta ohjelmoinnin sivussa olen saanut
      taitoja myös suunnitteluun liittyen.
    </p>
    <h3 class="py-5"><span class="mark">Osa-alueita</span>, joissa voin sinua auttaa...</h3>
  </div>
  <!-- OSA-ALUEET -->
  <div id="service-container" class="flex flex-wrap justify-between">
    <ServiceSection
      title="UI/UX suunnitelmat"
      desc="Olen suunnitellut käyttöliittymät 10 Android sovellukselle sekä useille nettisivuille. Voin luoda perus käyttöliittymäsuunnitelmat wireframe tasolla. En siis toteuta viimeisteltyjä suunnitelmia, joista voi suoraa kopioida CSS arvot. Marvel, AdobeXD, draw.io, NinjaMock"
    >
      <MdBrush slot="icon" />
    </ServiceSection>

    <ServiceSection
      title="Vaatimusmäärittelyt"
      desc="Voin luoda vaatimusmäärittelyt sovelluksellesi. Vaatimusmäärittelyn avulla ohjelmistokehittäjä osaa toteuttaa kehitystarpeen teknisesti. Vaatimusmäärittelyyn voi kuulua eri osia kuten UI kuvat, ominaisuuden mahdolliset poikkeustilanteet yms. Voin toteuttaa vaatimsumäärittelyn esim. Trello-tauluun tai Jiraan."
    >
      <FaDraftingCompass slot="icon" />
    </ServiceSection>

    <ServiceSection
      title="Arkkitehtuuriratkaisut"
      desc="Suunnittelen ja dokumentoin teknologiaratkaisuja, jotka sopivat juuri sinun ideaasi. Osaan katsoa päätökissäni teknologiatrendejä, koska pidän itseäni ajan tasalla."
    >
      <FaWarehouse slot="icon" />
    </ServiceSection>
  </div>
  <!-- HINNASTO -->
  <div class="py-5">
    <h3 class="mark mb-3">Hinta</h3>
    <div class="flex flex-row gap-5">
      <PriceItem price={$designPrice} list={['Tuntihinnalla']} />
      <PriceItem price={$designPriceHigh} list={['+ 80e UI-kuvan kanssa']} />
    </div>
  </div>
  <div id="design-example">
    <Collapse title="Esimerkki vaatimusmäärittelystä (Trello)">
      <img class="max-h-[800px]" src="vaatimus.png" alt="esimerkki vaatimusmäärittely" />
    </Collapse>
    <Collapse title="Esimerkki UI-kuvasta (Marvel)">
      <img class="max-h-[800px]" src="ui-kuva.png" alt="esimerkki ui-kuvasta" />
    </Collapse>
  </div>
  <Divider />
  <div id="service-info" class="flex flex-col py-5">
    <h3 class=""><span class="mark">100%</span> Tyytyväisyystakuu</h3>
    <p class="lg:max-w-lg">
      Varmistan aina oma-aloitteisesti, että työni jälki on yrityksesi arvoista. Laskutan
      suunnittelupalvelua projektin päättyessä, kuitenkin korkeintaan kuukausittain. Jos et ole
      tyytyväinen vaatimusmäärittelyyn tai UI-kuvaan eli en ole saanut yhtään selkoa mitä oikein
      haluat, en laskuta siitä.
    </p>
    <h3 class="mt-5">Kenelle suunnittelupalveluni <span class="mark">sopii?</span></h3>
    <p class="lg:max-w-lg">
      Suunnittelupalveluni sopii sovelluksille, josta sinulla on jo hyvä käsitys mitä haluat. Eniten
      hyötyä saat palvelusta siinä vaiheessa kun sovellus on idean tasolla, jolloin voin luoda MVP
      version ja suunnitelmasta tulee kerralla laaja. Voin osallistua kuitenkin sprintteihin, jollon
      luodaan vain muutama vaatimus ja UI-kuva.
    </p>
    <h3 class="mt-5">Kenelle suunnittelupalveluni <span class="mark">ei sovi?</span></h3>
    <p class="lg:max-w-lg">
      Suunnittelutyötä tehdää tiiviisti asiakkaan kanssa, joten jos asiakkaalla ei ole aikaa vastata
      tarkentaviin kysymyksiin niin palvelu ei silloin sovi. Jos haluat hyvin tarkat UI-suunnitelmat
      pikseleineen ja varjostuksineen niin en ole paras vaihtoehto, koska toteutan UI-suunnitelmat
      enemmän rautalankamallilla liikaa hiomatta, jolloin tiedetään mitä tulee mihinkin kohtaan.
      Toki suunnitelmani voi olla kauniita, mutta kauneus on katsojan silmässä.
    </p>
    <h3 class="mt-5">Mitä <span class="mark">hyötyjä</span> saat minusta?</h3>
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
    <Divider />
    <h3 class="mb-5">Kysy lisätietoja tai katso milloin olen vapaana!</h3>
    <Button text="Ota yhteyttä →" outlined={false} onClick={() => goto('/contact')} />
  </div>
</div>
