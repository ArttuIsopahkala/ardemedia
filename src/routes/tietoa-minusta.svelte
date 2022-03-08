<script lang="ts">
  import HistoryItem from '$lib/about/HistoryItem.svelte';
  import Story from '$lib/about/Story.svelte';
  import TechTable from '$lib/about/TechTable.svelte';
  import Container from '$lib/common/Container.svelte';
  import Divider from '$lib/common/Divider.svelte';
  import Icon from '$lib/common/Icon.svelte';
  import LazyImage from '$lib/common/LazyImage.svelte';
</script>

<svelte:head>
  <title>Tietoa minusta | Arde Media</title>
</svelte:head>

<Container>
  <div class="flex flex-col gap-14">
    <div>
      <h1 class="py-5">Olen Arttu Isopahkala, Arde Median <span class="mark">yrittäjä</span></h1>
      <div class="flex flex-row">
        <div class="p-5 card shadow-lg bg-base-100 md:max-w-2xl">
          <span class="w-[30px] h-[30px]">
            <Icon type="quote" />
          </span>
          <p class="">
            Olen koodaillut kaikenlaista jo lähes 10 vuotta. Harrasteprojektien sekä hyvien
            työpaikkojen avulla olen kehittynyt Full Stack -koodariksi, joka osaa suunnitella ja
            toteuttaa erilaisia sovelluksia tarvittaessa täysin itsenäisesti. Ensisijainen
            osaamiseni on web-teknologioiden ja pilvipalvelujen puolella, mutta myös mobiilihommat
            luonnistuu vankan Android-kokemuksen johdosta. Olen aina ollut kiinnostunut
            teknologiasta ja tietokoneista, joten seuraan tiiviisti alan trendejä ja uusia
            julkaisuja. Koodailun vastapainoksi vapaa-aikani menee salibandyn, läheisten tai hyvän
            kirjan parissa.
          </p>
        </div>
        <div class="hidden md:flex justify-center items-center md:w-1/2">
          <LazyImage style="max-h-[300px]" src={'muotokuva.png'} alt="muotokuva" />
        </div>
      </div>
    </div>
    <div>
      <h1 class="py-5">Teknologioita ja työkaluja, jotka hallitsen</h1>
      <p class="pb-5">
        Lasken osaamiseksi sen, että olen toteuttanut projektin valmiiksi, jossa olen käyttänyt
        kyseistä teknologiaa. Näiden lisäksi projektinhallintatyökalut kuten Trello, Jira tai Github
        Projects kuuluvat arkikäyttööni. Käyttöjärjestelmistä suosin Windowsia (+WSL), mutta myös
        Linuxin käyttö on hanskassa.
      </p>
      <div>
        <TechTable />
      </div>
    </div>
    <div>
      <h1 class="py-5">Rooli- ja vastuuosaaminen</h1>
      <p>
        Toimin aikaisemmassa työsuhteessa tehtävänimikkeellä Lead Software Developer. Tässä roolissa
        sain kokemusta verkkopalvelujen teknisestä omistajuudesta. Omistajuuteen kuului vastuu
        verkkopalvelujen kehitystarpeiden teknisestä suunnittelusta, visualisoinnista (UI design)
        sekä toteutuksesta.
      </p>
    </div>
    <div>
      <h1 class="py-5">Erityisosaaminen ja muu osaaminen</h1>
      <p>
        Lasken erityisosaamiseksi sellaisen osaamisen, joka on erityisen syvää tai harvinaista.
        Teknologioiden osalta erityisosaamistani on Svelte ja GWT (Google Web Toolkit), jotka ovat
        harvinaisempia teknologioita tätä kirjoittaessa (2022). Vahvuutena koen Full Stack
        -ohjelmistokehityksen, jonka seurauksena minulta löytyy monipuolisuutta ja laajojen
        kokonaisuuksien hallintakykyä.
        <br /><br />
        Erityisiä hyödynnettäviä taitojani ovat myös videoeditointi ja kuvankäsittely, joista minulla
        on vuosien kokemus. Olen toteuttanut yli 50 videoprojektia vapaa-ajallani. Näiden lisäksi kokemusta
        ja ymmärrystä löytyy jonkin verran Facebook-markkinoinnista ja hakukoneoptimoinnista.
      </p>
    </div>
    <div class="flex flex-row flex-wrap py-5 gap-5 sm:gap-20">
      <div class="flex-col">
        <h2 class="mark">Työpaikkoja</h2>
        <HistoryItem role="Ohjelmistokehittäjä, Yrittäjä" year="2018-" company="Arde Media" />
        <HistoryItem
          role="Lead Software Developer"
          year="2017-2020"
          company="Firstbeat Technologies Oy"
        />
      </div>

      <div class="flex-col">
        <h2 class="mark">Kouluja</h2>
        <HistoryItem
          role="Insinööri (ylempi AMK)"
          year="2021 - Ohjelmistotekniikka ja ICT"
          company="Turun ammattikorkeakoulu"
        />
        <HistoryItem
          role="Insinööri (AMK)"
          year="2013-2017 - Mediatekniikka"
          company="Jyväskylän ammattikorkeakoulu"
        />
        <HistoryItem
          role="Elektroniikka-asentaja + Ylioppilas"
          year="2008-2012 - ICT-lukio (kaksoistutkinto)"
          company="Kainuun ammattiopisto ja Kajaanin lukio"
        />
      </div>
    </div>
    <Divider />
    <Story />
  </div>
</Container>
