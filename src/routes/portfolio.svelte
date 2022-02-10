<script lang="ts">
  import Selector, { SelectorItem } from '$lib/services/Selector.svelte';
  import PortfolioItem from '$lib/portfolio/PortfolioItem.svelte';
  import TechItem from '$lib/portfolio/TechItem.svelte';
  import Icon from '$lib/common/Icon.svelte';
  import Divider from '$lib/common/Divider.svelte';
  import Carousel from '$lib/common/Carousel.svelte';
  import { fade } from 'svelte/transition';
  import Container from '$lib/common/Container.svelte';
  import LazyVideo from '$lib/common/LazyVideo.svelte';

  let selectedValue: string;
  let previousValue: string;

  $: {
    if (previousValue) {
      document.getElementById(selectedValue).scrollIntoView({ block: 'start', behavior: 'smooth' });
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
    /* {
      label: 'Web-suunnittelu',
      value: 'design'
    }, */
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

<Container>
  <Selector bind:selectedValue {items} defaultValue="web" />
  <div in:fade={{ duration: 300 }}>
    <h1 id="web" class="portfolio-title">Web-sovellukset</h1>
    <PortfolioItem
      title="Arde Median kotisivut"
      year="Julkaistu 2022"
      description="Kotisivut yritykselleni, joita katselet parhaillaan! Homma lähti käyntiin 
      sivukartan suunnittelusta ja käyttöliittymäkuvien piirtämisestä. Kun suunnitelma oli suunnilleen valmis, 
      alkoi armoton koodaaminen. Toteutin sivuston Sveltellä, joka on JavaScriptin trendikäs ja kehittäjäystävällinen viitekehys.
        <br/><br/>
        Ominaisuudet:
        <br/>&bull; Kuvakaruselli
        <br/>&bull; Visuaalista ilmettä
        <br/>&bull; Blogialusta
        <br/>&bull; Yhteydenottolomake"
      logo="logo_black.png"
      github="https://github.com/ArttuIsopahkala/ardemedia"
    >
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
      year="Kehityksessä 2020-2021, ei aktiivinen"
      description="Digitaalinen fläppitaulu ja salibandyjoukkueen hallintajärjestelmä. Opin tämän projektin aikana hurjasti Reactia, TypeScriptiä ja AWS:n palveluja. 
      Työstin sovellusta ystävieni kanssa, jotka auttoivat <a rel='noreferrer nofollow noopener' class='link link-primary font-bold' href='https://urn.fi/URN:NBN:fi:amk-2021060815000' target='_blank'>kilpailija-analyysissä</a> ja UI-suunnitelmissa. 
      Itse hoidin ohjelmoinnin ja projektinhallinnan.
      <br/><br/>
      Valmiit ominaisuudet:
      <br/>&bull; Animoitu fläppitaulu
      <br/>&bull; Harjoituskirjasto
      <br/>&bull; Kokoonpanon hallinta
      <br/>&bull; Kalenteri ja tapahtumat"
      logo="flappi/flappi.svg"
    >
      <Carousel
        slot="carousel"
        images={[
          { web: 'flappi/flappi2.png' },
          { web: 'flappi/flappi3.png' },
          { web: 'flappi/flappi4.png' },
          { web: 'flappi/flappi5.png' },
          { web: 'flappi/flappi6.png' }
        ]}
      />
      <TechItem
        title="Amazon Web Services"
        desc={'Cognito, API Gateway, Route 53, Cloudfront, DynamoDB, Lambda, S3, IAM, CloudFormation, Certificate Manager'}
      >
        <Icon type="aws" />
      </TechItem>
      <TechItem title="React" desc="Material-UI, PWA">
        <Icon type="react" />
      </TechItem>
      <TechItem title="NodeJS">
        <Icon type="nodejs" />
      </TechItem>
    </PortfolioItem>
    <Divider />
    <PortfolioItem
      title="Firstbeat web-sovellukset"
      year="Vuodet 2017-2020"
      description="Työsuhteessa Firstbeatilla ylläpidin yksin lähemmäs 10 eri web-sovellusta. 
      Näistä toteutin itse muutaman kokonaan itse (mm. asiakashallintajärjestelmä). 
      Valitettavasti näistä ei ole tarkempia kuvia, mutta tässä <a rel='noreferrer nofollow noopener' class='link link-primary font-bold' href='https://urn.fi/URN:NBN:fi:amk-201705026047' target='_blank'>linkki</a> opinnäytetyöhöni, jossa toteutin yhden järjestelmän uudistuksen."
    >
      <TechItem
        title="Amazon Web Services"
        desc={'API Gateway, KMS, Route 53, Cloudfront, DynamoDB, Lambda, EC2, S3, IAM, CloudFormation, CloudWatch'}
      >
        <Icon type="aws" />
      </TechItem>
      <TechItem title="React + NodeJS" desc="3 sovellusta">
        <Icon type="react" />
      </TechItem>
      <TechItem title="GWT + Java EE" desc="6 sovellusta">
        <Icon type="java" />
      </TechItem>
    </PortfolioItem>
    <h1 id="mobile" class="portfolio-title">Mobiilisovellukset</h1>
    <PortfolioItem
      title="Floorball Manager"
      year="Julkaistu 2019"
      description="Salibandyjoukkueen käyttöön tarkoitettu sovellus, jonka avulla voidaan pitää kirjaa otteluista sekä tarkoista joukkue- ja pelaajatilastoista. Kokoonpanoja voidaan suunnitella kemialaskurin avulla.
      <br/><br/>
      Ominaisuudet:
      <br/>&bull; Ottelujen ja tilastojen muokkaaminen
      <br/>&bull; Laukauskartat
      <br/>&bull; Pelaajien välisen kemian analysointi tilastojen perusteella
      <br/>&bull; Joukkueiden hallinta ja pelaajien kutsuminen/lisääminen"
      url="https://play.google.com/store/apps/details?id=com.ardeapps.floorballcoach"
      github="https://github.com/ArttuIsopahkala/FloorballManager"
      logo="floorball/floorball.png"
    >
      <Carousel
        slot="carousel"
        images={[
          { phone: 'floorball/floorball1.png' },
          { phone: 'floorball/floorball2.png' },
          { phone: 'floorball/floorball3.png' },
          { phone: 'floorball/floorball4.png' },
          { phone: 'floorball/floorball5.png' }
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
      year="Julkaistu 2018"
      description="Herätysvalo toimii manuaalisesti tai yhteistyössä laitteen herätyskellon kanssa. Se käynnistyy ensin himmeänä ja kirkastuu aina herätykseen asti.
      <br/><br/>
      Ominaisuudet:
      <br/>&bull; Puhelimen herätyskelloon integrointi
      <br/>&bull; Valon säätö (väri, kesto, nopeus)
      <br/>&bull; Pienoisohjelma kotinäytölle"
      url="https://play.google.com/store/apps/details?id=com.ardeapps.simplewakeuplight"
      github="https://github.com/ArttuIsopahkala/SimpleWakeUpLight"
      logo="heratysvalo/heratysvalo.png"
    >
      <Carousel
        slot="carousel"
        images={[
          { phone: 'heratysvalo/heratysvalo1.png' },
          { phone: 'heratysvalo/heratysvalo2.png' }
        ]}
      />
      <TechItem title="Android" desc="Java">
        <Icon type="android" />
      </TechItem>
    </PortfolioItem>
    <Divider />
    <PortfolioItem
      title="Live Location"
      year="Julkaistu 2017, ei aktiivinen"
      description="Yksinkertainen sovellus sijainnin jakamiseen kavereiden kesken reaaliaikaisesti. Lisää kaverit, jaa sijaintisi ja näe kartalla missä kaverit liikkuvat.
      <br/><br/>
      Ominaisuudet:
      <br/>&bull; Kirjautuminen (Facebook / sähköposti)
      <br/>&bull; Kuvien lataaminen
      <br/>&bull; Sijainnin jakaminen reaaliaikatietokannan avulla"
      github="https://github.com/ArttuIsopahkala/LiveLocation"
      logo="livelocation/livelocation.png"
    >
      <Carousel
        slot="carousel"
        images={[
          { phone: 'livelocation/livelocation1.png' },
          { phone: 'livelocation/livelocation2.png' }
        ]}
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
      year="Julkaistu 2017"
      description="Sovellus näyttää Kelan tukemat opiskelijalounasta tarjoavat ravintolat ja niiden lounaslistat.
      <br/><br/>
      Ominaisuudet:
      <br/>&bull; Näe lounasravintolat kartalla
      <br/>&bull; Hakutoiminto kaupungin tai ravintolan mukaan
      <br/>&bull; Löydä ravintolat lähellä sinua sijaintisi perusteella
      <br/>&bull; Lataa suosikkiravintoloiden lounaslistat automaattisesti"
      url="https://play.google.com/store/apps/details?id=com.ardeapps.opiskelijalounas"
      github="https://github.com/ArttuIsopahkala/Opiskelijalounas"
      logo="opiskelijalounas/opiskelijalounas.png"
    >
      <Carousel
        slot="carousel"
        images={[
          { phone: 'opiskelijalounas/opiskelijalounas1.png' },
          { phone: 'opiskelijalounas/opiskelijalounas2.png' },
          { phone: 'opiskelijalounas/opiskelijalounas3.png' },
          { phone: 'opiskelijalounas/opiskelijalounas5.png' },
          { phone: 'opiskelijalounas/opiskelijalounas4.png' }
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
      year="Julkaistu 2016"
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
      github="https://github.com/ArttuIsopahkala/Menomesta"
      logo="menomesta/menomesta.png"
    >
      <Carousel
        slot="carousel"
        images={[
          { phone: 'menomesta/menomesta1.png' },
          { phone: 'menomesta/menomesta2.png' },
          { phone: 'menomesta/menomesta3.png' },
          { phone: 'menomesta/menomesta4.png' },
          { phone: 'menomesta/menomesta5.png' },
          { phone: 'menomesta/menomesta6.png' }
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
      year="Julkaistu 2016"
      description="Löydä tiesi maaliin mahdollisimman nopeasti, mutta älä koske seiniin! Kilpaile muita pelaajia, kavereitasi, ja itseäsi vastaan. Peli sisältää 30 erilaista sokkeloa erilaisilla vaikeustasoilla, joten pelattavaa riittää tunneiksi.
      <br/><br/>
      Ominaisuudet:
      <br/>&bull; Google Games tulostaulukot ja saavutukset
      <br/>&bull; Offline pelaaminen"
      logo="maze/maze.png"
      url="https://play.google.com/store/apps/details?id=com.ardeapps.mazespeedrun"
      github="https://github.com/ArttuIsopahkala/MazeSpeedrun"
    >
      <Carousel
        slot="carousel"
        images={[
          { phone: 'maze/maze1.png' },
          { phone: 'maze/maze2.png' },
          { phone: 'maze/maze3.png' },
          { phone: 'maze/maze4.png' },
          { phone: 'maze/maze5.png' },
          { phone: 'maze/maze6.png' },
          { phone: 'maze/maze7.png' },
          { phone: 'maze/maze8.png' }
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
        images={[
          { phone: 'travelmeter/travelmeter1.png' },
          { phone: 'travelmeter/travelmeter2.png' },
          { phone: 'travelmeter/travelmeter3.png' },
          { phone: 'travelmeter/travelmeter4.png' }
        ]}
      />
      <TechItem title="Android" desc="Java">
        <Icon type="android" />
      </TechItem>
      <TechItem title="Google Maps">
        <Icon type="googlemaps" />
      </TechItem>
    </PortfolioItem>
    <h1 id="video" class="portfolio-title">Videoeditointi</h1>
    <p class="px-5">
      Olen tuottanut Youtubeen yli 50 videoprojektia. Tässä niistä parhaita ja tuoreimpia paloja.
      Työkaluina on toiminut lähinnä Sony Vegas PRO ja Adobe After Effects.
    </p>
    <div class="flex flex-row flex-wrap justify-center p-5 gap-5">
      {#each videos as video}
        <LazyVideo src={video} />
      {/each}
    </div>
  </div>
</Container>
