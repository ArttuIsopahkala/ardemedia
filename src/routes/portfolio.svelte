<script lang="ts">
  import * as animateScroll from 'svelte-scrollto';
  import Selector, { SelectorItem } from '$lib/services/Selector.svelte';
  import PortfolioItem from '$lib/portfolio/PortfolioItem.svelte';
  import TechItem from '$lib/portfolio/TechItem.svelte';
  import Icon from '$lib/Icon.svelte';
  import Divider from '$lib/Divider.svelte';
  import Carousel from '$lib/Carousel.svelte';
  import { fade } from 'svelte/transition';

  let selectedValue: string;
  let previousValue: string;

  $: {
    if (previousValue) {
      animateScroll.scrollTo({ element: '#' + selectedValue, offset: -50 });
    }
    previousValue = selectedValue;
  }

  const items: SelectorItem[] = [
    {
      label: 'Web-sovellukset',
      value: 'web'
    },
    {
      label: 'Mobiili-sovellukset',
      value: 'mobile'
    },
    {
      label: 'Web-suunnittelu',
      value: 'design'
    },
    {
      label: 'Videoeditointi',
      value: 'video'
    }
  ];

  const videos: string[] = [
    'https://www.youtube.com/embed/mKjv8CBQlg0',
    'https://www.youtube.com/embed/Igfxeg1wYkQ',
    'https://www.youtube.com/embed/kb9qRYYWNzI',
    'https://www.youtube.com/embed/cZ9gNI8OOy8?controls=0',
    'https://www.youtube.com/embed/30KKutVrpDs?controls=0'
  ];
</script>

<svelte:head>
  <title>Portfolio | Arde Media</title>
</svelte:head>

<article class="bg-base-100 bg-[url('/bg-pattern.svg')] shadow-md">
  <section class="container mx-auto max-w-5xl">
    <Selector bind:selectedValue {items} defaultValue="web" />
    <div in:fade={{ duration: 300 }}>
      <h2 id="web" class="portfolio-title">Web-sovellukset</h2>
      <PortfolioItem
        title="Arde Median kotisivut"
        year="Julkaistu 2022"
        description="Kotisivut yritykselleni! Tässä niitä juuri katselet.
        <br/><br/>
        Ominaisuudet:
        <br/>&bull; Kuvakaruselli
        <br/>&bull; Uskomattomia animaatioita
        <br/>&bull; Blogialusta
        <br/>&bull; Yhteydenottolomake"
        logo="favicon.png"
      >
        <div slot="carousel" class="flex flex-col justify-center items-center">
          <h5>UI-suunnitelmat</h5>
          <Carousel
            phoneImages={[
              'flappi/infra.png',
              'floorball/floorball2.png',
              'floorball/floorball3.png',
              'floorball/floorball4.png',
              'floorball/floorball5.png'
            ]}
          />
        </div>
        <TechItem title="Svelte" desc="Tailwind CSS, daisyUI">
          <Icon type="svelte" />
        </TechItem>
        <TechItem title="Firebase" desc="Firestore, Storage, Hosting, Functions">
          <Icon type="firebase" />
        </TechItem>
      </PortfolioItem>
      <Divider />
      <PortfolioItem
        title="Flappi"
        year="Kehityksessä 2020-2021, ei julkaistu"
        description="Digitaalinen fläppitaulu ja salibandyjoukkueen hallintajärjestelmä. Opin tämän projektin aikana hurjasti Reactia, TypeScriptiä ja AWS:n palveluja. 
      Työstin sovellusta ystävieni kanssa, jotka auttoivat <a class='link link-primary font-bold' href='https://urn.fi/URN:NBN:fi:amk-2021060815000' target='_blank'>kilpailija-analyysissä</a> ja UI-suunnitelmissa. 
      Itse hoidin ohjelmoinnin ja projektinhallinnan. Sovellus jäi julkaisematta keskeneräisenä (liikaa koodaamista yhdelle).
      <br/><br/>
      Valmiit ominaisuudet:
      <br/>&bull; PÄIVITÄ!
      <br/>&bull; PÄIVITÄ!
      <br/>&bull; PÄIVITÄ!
      <br/>&bull; PÄIVITÄ!"
        logo="flappi/flappi.svg"
      >
        <Carousel
          slot="carousel"
          phoneImages={[
            'flappi/infra.png',
            'floorball/floorball2.png',
            'floorball/floorball3.png',
            'floorball/floorball4.png',
            'floorball/floorball5.png'
          ]}
        />
        <TechItem
          title="Amazon Web Services"
          desc={'Cognito, Cloudfront, DynamoDB, Lambda, S3, IAM, API Gateway'}
        >
          <Icon type="aws" />
        </TechItem>
        <TechItem title="React" desc="Material-UI">
          <Icon type="react" />
        </TechItem>
        <TechItem title="NodeJS">
          <Icon type="nodejs" />
        </TechItem>
      </PortfolioItem>
      <Divider />
      <PortfolioItem
        title="Firstbeatin web-sovellukset"
        year="Vuodet 2017-2020"
        description="Työsuhteessa Firstbeatilla ylläpidin yksin lähemmäs 10 eri web-sovellusta. 
      Näistä toteutin itse muutaman kokonaan itse (mm. asiakashallintajärjestelmä). 
      Valitettavasti näistä ei ole tarkempia kuvia, mutta tässä <a class='link link-primary font-bold' href='https://urn.fi/URN:NBN:fi:amk-201705026047' target='_blank'>linkki</a> opinnäytetyöhöni, jossa toteutin yhden järjestelmän uudistuksen."
      >
        <TechItem title="React + NodeJS" desc="3 sovellusta">
          <Icon type="react" />
        </TechItem>
        <TechItem title="GWT + Java EE" desc="6 sovellusta">
          <Icon type="java" />
        </TechItem>
      </PortfolioItem>
      <h2 id="mobile" class="portfolio-title">Mobiilisovellukset</h2>
      <PortfolioItem
        title="Floorball Manager"
        year="Julkaistu 2019, 12 päivitystä"
        description="Salibandyjoukkueen käyttöön tarkoitettu sovellus, jonka avulla voidaan pitää kirjaa otteluista sekä tarkoista joukkue- ja pelaajatilastoista. Kokoonpanoja voidaan suunnitella kemialaskurin avulla.
      <br/><br/>
      Ominaisuudet:
      <br/>&bull; Ottelujen ja tilastojen muokkaaminen
      <br/>&bull; Laukauskartat
      <br/>&bull; Pelaajien välisen kemian analysointi tilastojen perusteella
      <br/>&bull; Joukkueiden hallinta ja pelaajien kutsuminen/lisääminen"
        url="https://play.google.com/store/apps/details?id=com.ardeapps.floorballcoach"
        logo="floorball/floorball.png"
      >
        <Carousel
          slot="carousel"
          phoneImages={[
            'floorball/floorball1.png',
            'floorball/floorball2.png',
            'floorball/floorball3.png',
            'floorball/floorball4.png',
            'floorball/floorball5.png'
          ]}
        />
        <TechItem title="Firebase" desc="Realtime Database, Authentication, Storage">
          <Icon type="firebase" />
        </TechItem>
        <TechItem title="Android" desc="Java">
          <Icon type="android" />
        </TechItem>
      </PortfolioItem>
      <Divider />
      <PortfolioItem
        title="Herätysvalo"
        year="Julkaistu 2018, 8 päivitystä"
        description="Herätysvalo toimii manuaalisesti tai yhteistyössä laitteen herätyskellon kanssa. Se käynnistyy ensin himmeänä ja kirkastuu aina herätykseen asti.
      <br/><br/>
      Ominaisuudet:
      <br/>&bull; Puhelimen herätyskelloon integrointi
      <br/>&bull; Valon säätö (väri, kesto, nopeus)
      <br/>&bull; Pienoisohjelma kotinäytölle"
        url="https://play.google.com/store/apps/details?id=com.ardeapps.simplewakeuplight"
        logo="heratysvalo/heratysvalo.png"
      >
        <Carousel
          slot="carousel"
          phoneImages={['heratysvalo/heratysvalo1.png', 'heratysvalo/heratysvalo2.png']}
        />
        <TechItem title="Android" desc="Java">
          <Icon type="android" />
        </TechItem>
      </PortfolioItem>
      <Divider />
      <PortfolioItem
        title="Live Location"
        year="Julkaistu 2017, 3 päivitystä, ei aktiivinen"
        description="Yksinkertainen sovellus sijainnin jakamiseen kavereiden kesken reaaliaikaisesti. Lisää kaverit, jaa sijaintisi ja näe kartalla missä kaverit liikkuvat.
      <br/><br/>
      Ominaisuudet:
      <br/>&bull; Kirjautuminen (Facebook / sähköposti)
      <br/>&bull; Kuvien lataaminen
      <br/>&bull; Sijainnin jakaminen reaaliaikatietokannan avulla"
        logo="livelocation/livelocation.png"
      >
        <Carousel
          slot="carousel"
          phoneImages={['livelocation/livelocation1.png', 'livelocation/livelocation2.png']}
        />
        <TechItem title="Firebase" desc="Realtime Database, Authentication, Storage">
          <Icon type="firebase" />
        </TechItem>
        <TechItem title="Android" desc="Java">
          <Icon type="android" />
        </TechItem>
        <TechItem title="Google Maps">
          <Icon type="googlemaps" />
        </TechItem>
        <TechItem title="Facebook API" desc="Login">
          <Icon type="facebook" />
        </TechItem>
      </PortfolioItem>
      <Divider />
      <PortfolioItem
        title="Opiskelijalounas"
        year="Julkaistu 2017, 5 päivitystä"
        description="Sovellus näyttää Kelan tukemat opiskelijalounasta tarjoavat ravintolat ja niiden lounaslistat.
      <br/><br/>
      Ominaisuudet:
      <br/>&bull; Näe lounasravintolat kartalla
      <br/>&bull; Hakutoiminto kaupungin tai ravintolan mukaan
      <br/>&bull; Löydä ravintolat lähellä sinua sijaintisi perusteella
      <br/>&bull; Lataa suosikkiravintoloiden lounaslistat automaattisesti"
        url="https://play.google.com/store/apps/details?id=com.ardeapps.opiskelijalounas"
        logo="opiskelijalounas/opiskelijalounas.png"
      >
        <Carousel
          slot="carousel"
          phoneImages={[
            'opiskelijalounas/opiskelijalounas1.png',
            'opiskelijalounas/opiskelijalounas2.png',
            'opiskelijalounas/opiskelijalounas3.png',
            'opiskelijalounas/opiskelijalounas5.png',
            'opiskelijalounas/opiskelijalounas4.png'
          ]}
        />
        <TechItem title="Firebase" desc="Realtime Database">
          <Icon type="firebase" />
        </TechItem>
        <TechItem title="Android" desc="Java">
          <Icon type="android" />
        </TechItem>
        <TechItem title="Google Maps">
          <Icon type="googlemaps" />
        </TechItem>
      </PortfolioItem>
      <Divider />
      <PortfolioItem
        title="Menomesta"
        year="Julkaistu 2016, 23 päivitystä"
        description="Onko illan menomestan valinta ollut joskus vaikeaa? Ei ole enää! Tämä sovellus näyttää sinulle kätevästi kaupunkisi halvimmat, lähimmät ja suosituimmat baarit. Koska käyttäjät voivat lisätä ja muokata tietoja, teet sovelluksesta entistä hyödyllisemmän omalla aktiivisuudella ja myös sinusta voi tulla kaikkien Janoisten Sankari!
      <br/><br/>
      Ominaisuudet:
      <br/>&bull; Yli <b class='mark'>1000</b> lataajaa! 
      <br/>&bull; Aikanaan Suomen laajin baaritietokanta
      <br/>&bull; Tietojen hakeminen Facebookista
      <br/>&bull; Baarien ja tapahtumien muokkaaminen
      <br/>&bull; Karttatoiminto
      <br/>&bull; Anonyymi chat
      <br/>&bull; Seuranhakutoiminto"
        url="https://play.google.com/store/apps/details?id=com.ardeapps.menomesta"
        logo="menomesta/menomesta.png"
      >
        <Carousel
          slot="carousel"
          phoneImages={[
            'menomesta/menomesta1.png',
            'menomesta/menomesta2.png',
            'menomesta/menomesta3.png',
            'menomesta/menomesta4.png',
            'menomesta/menomesta5.png',
            'menomesta/menomesta6.png'
          ]}
        />
        <TechItem title="Firebase" desc="Realtime Database, Authentication">
          <Icon type="firebase" />
        </TechItem>
        <TechItem title="Android" desc="Java">
          <Icon type="android" />
        </TechItem>
        <TechItem title="Facebook API" desc="Login, Events, Pages">
          <Icon type="facebook" />
        </TechItem>
        <TechItem title="Google Maps API">
          <Icon type="googlemaps" />
        </TechItem>
      </PortfolioItem>
      <Divider />
      <PortfolioItem
        title="Maze Speedrun"
        year="Julkaistu 2016, 2 päivitystä"
        description="Löydä tiesi maaliin mahdollisimman nopeasti, mutta älä koske seiniin! Kilpaile muita pelaajia, kavereitasi, ja itseäsi vastaan. Peli sisältää 30 erilaista sokkeloa erilaisilla vaikeustasoilla, joten pelattavaa riittää tunneiksi.
      <br/><br/>
      Ominaisuudet:
      <br/>&bull; Google Games tulostaulukot ja saavutukset
      <br/>&bull; Offline pelaaminen"
        logo="maze/maze.png"
        url="https://play.google.com/store/apps/details?id=com.ardeapps.mazespeedrun"
      >
        <Carousel
          slot="carousel"
          phoneImages={[
            'maze/maze1.png',
            'maze/maze2.png',
            'maze/maze3.png',
            'maze/maze4.png',
            'maze/maze5.png',
            'maze/maze6.png',
            'maze/maze7.png',
            'maze/maze8.png'
          ]}
        />
        <TechItem title="Google API" desc="Games">
          <Icon type="google" />
        </TechItem>
        <TechItem title="Android" desc="Java">
          <Icon type="android" />
        </TechItem>
      </PortfolioItem>
      <Divider />
      <PortfolioItem
        title="Daily Travel Meter"
        year="Julkaistu 2015, ei aktiivinen"
        description="Sovellus tutkii sijaintia, laskee nopeuden ja erottelee henkilön kulkeman matkan kolmeen eri kulkutapaan. Kulkutavat ovat kävellen, pyörällä tai autolla. Lisäksi sovellus piirtää kuljetun reitin kartalle. Sovellus tutkii liikkeitäsi taustalla ja tallentaa sijaintia puhelimen muistiin.
      <br/><br/>
      Ominaisuudet:
      <br/>&bull; Päivittäinen matkamittari
      <br/>&bull; Katso päivittäinen reitti kartalta
      <br/>&bull; Lista 30 edellisen päivän matkoista
      <br/>&bull; Parhaat tulokset kategorioittain
      <br/>&bull; Widgetti päivittäisistä matkoista"
        logo="travelmeter/travelmeter.png"
      >
        <Carousel
          slot="carousel"
          phoneImages={[
            'travelmeter/travelmeter1.png',
            'travelmeter/travelmeter2.png',
            'travelmeter/travelmeter3.png',
            'travelmeter/travelmeter4.png'
          ]}
        />
        <TechItem title="Android" desc="Java">
          <Icon type="android" />
        </TechItem>
        <TechItem title="Google Maps">
          <Icon type="googlemaps" />
        </TechItem>
      </PortfolioItem>
      <Divider />
      <h2 id="design" class="portfolio-title">Ohjelmistojen suunnittelu</h2>
      <h2 id="video" class="portfolio-title">Videoeditointi</h2>
      <p class="px-5">
        Olen editoinnut Youtubeen noin 60 videota. Tässä niistä parhaita ja tuoreimpia paloja.
        Työkaluina on toiminut lähinnä Sony Vegas PRO ja Adobe After Effects.
      </p>
      <div class="flex flex-row flex-wrap justify-center p-5 gap-5">
        {#each videos as video}
          <iframe
            class="w-full max-w-[480px] h-72"
            src={video}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          />
        {/each}
      </div>
    </div>
  </section>
</article>
