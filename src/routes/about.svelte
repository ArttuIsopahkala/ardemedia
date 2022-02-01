<script lang="ts">
  import HistoryItem from '$lib/about/HistoryItem.svelte';
  import Story from '$lib/about/Story.svelte';
  import TechTable from '$lib/about/TechTable.svelte';
  import Values from '$lib/about/Values.svelte';
  import Divider from '$lib/common/Divider.svelte';
  import MdFormatQuote from 'svelte-icons/md/MdFormatQuote.svelte';
  import { fade } from 'svelte/transition';
</script>

<svelte:head>
  <title>Tietoa minusta | Arde Media</title>
</svelte:head>

<article in:fade={{ duration: 300 }} class="bg-base-100 bg-[url('/bg-pattern.svg')] pb-10">
  <section class="container mx-auto max-w-5xl">
    <h2 class="py-5">Olen Arttu Isopahkala, Arde Median <span class="mark">yrittäjä</span></h2>
    <div class="flex flex-row">
      <div class="p-5 card shadow-lg bg-base-100 md:w-1/2">
        <span class="w-[30px] h-[30px]">
          <MdFormatQuote />
        </span>
        <p class="">
          Olen koodaillut kaikenlaista kohta jo 10 vuotta. Olen Full Stack koodari, joka käytännössä
          osaa suunnitella erilaisten sovellusten ulkoasun ja teknisen toteutuksen sekä niiden
          kehittämisen ja ylläpidon. Ensisijainen osaamiseni on web-teknologioiden ja
          pilvipalvelujen puolella, mutta lisäksi mobiilihommat luonnistuu vankan Android-kokemuksen
          johdosta. Olen aina ollut kiinnostunut teknologiasta ja tietokoneista, jonka takia seuraan
          tiiviisti alan trendejä ja uutisia. Koodailun vastapainoksi vapaa-aikani kuluu salibandyn
          ja muun pelailun parissa.
        </p>
      </div> 
      <div class="hidden md:flex justify-center items-center md:w-1/2">
        <img class="max-h-[300px]" src={'muotokuva.png'} alt="muotokuva" />
      </div>
    </div>
    <h2 class="py-5">Teknologioita ja työkaluja, jotka hallitsen</h2>
    <p>
      Lasken osaamiseksi sen, että olen toteuttanut projektin valmiiksi, jossa olen käyttänyt
      kyseistä teknologiaa. Näiden lisäksi projektinhallintatyökalut kuten Trello, Jira ja Github
      Projects kuuluvat työkalujeni piiriin. Käyttöjärjestelmistä Windows (+WSL) on lähellä sydäntä.
      Myös Linuxin käyttö on hanskassa eli voin työskennellä molemmilla kummalla tahansa.
    </p>
    <div>
      <TechTable />
    </div>
    <h2 class="py-5">Rooli- ja vastuuosaaminen</h2>
    <p>
      Ennen yrittäjyyttä olen toiminut ohjelmistokehittäjänä tehtävänimikkeellä Lead Software
      Developer. Tässä roolissa olen saanut kokemusta verkkopalvelujen teknisestä omistajuudesta.
      Omistajuuteen on kuulunut vastuu verkkopalvelujen kehitystarpeiden teknisestä suunnittelusta,
      visualisoinnista (UI design) sekä toteutuksesta. Kokemusta on siis monipuolisesti ihan
      rivikoodarista Leadin rooliin.
    </p>
    <h2 class="py-5">Erityisosaaminen ja muu osaaminen</h2>
    <p>
      Erityisosaamiseksi voidaan laskea sellainen osaaminen, joka on erityisen syvää tai harvinaista
      ohjelmistoalalla. Minun erityisosaaminen teknologioiden osalta on GWT (Google Web Toolkit),
      joka on harvinaisempi teknologia nykypäivänä. Vahvuutena koen Full Stack
      -ohjelmistokehityksen, jonka ansiosta osaamista löytyy jokaiselta ohjelmistokehityksen
      osa-alueelta.
      <br /><br />
      Tarvittaessa hyödynnettäviä taitojani on videoeditointi ja kuvankäsittely, joista minulla on vuosien
      kokemus. Olen toteuttanut yli 50 videoprojektia vapaa-ajallani. Näiden lisäksi kokemusta ja ymmärrystä
      löytyy lisäksi jonkin verran Facebook-markkinoinnista ja hakukoneoptimoinnista.
    </p>
    <div class="flex flex-row flex-wrap py-5">
      <div class="flex-col md:w-1/2">
        <h3 class="mark">Työpaikkoja</h3>
        <HistoryItem role="Ohjelmistokehittäjä, Yrittäjä" year="2018-" company="Arde Media" />
        <HistoryItem
          role="Lead Software Developer"
          year="2017-2020"
          company="Firstbeat Technologies Oy"
        />
      </div>

      <div class="flex-col md:w-1/2">
        <h3 class="mark">Kouluja</h3>
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
    <Values />
    <Story />
  </section>
</article>
