<script lang="ts">
  import { goto } from '$app/navigation';
  import Button from '$lib/common/Button.svelte';
  import Container from '$lib/common/Container.svelte';
  import Divider from '$lib/common/Divider.svelte';
  import Icon from '$lib/common/Icon.svelte';
  import TechSection from '$lib/common/TechSection.svelte';
  import PriceItem from '$lib/services/PriceItem.svelte';
  import ServiceSection from '$lib/services/ServiceSection.svelte';
  import { ServicesOptions } from '$lib/static/firestore';
  import ROUTES from '$lib/static/routes';
  import { options } from '../store';

  let services: ServicesOptions;

  options.subscribe(options => {
    services = options.services;
  });
</script>

<svelte:head>
  <title>Ohjelmistokehitys | Arde Media</title>
</svelte:head>

<Container>
  <div>
    <h1 class="portfolio-title pt-8">Ohjelmistokehitys</h1>
    <h4 class="mark">Arde kehittää</h4>
    <h1 class="pt-5">Timanttista <span class="mark">koodia</span> yritykseesi</h1>
    <div class="flex flex-wrap justify-between pt-5">
      <ServiceSection
        title="Web-sovellukset"
        desc="Sijoita minut tiimiisi lisäkäsiksi tehostamaan kehitystyötänne. Full Stack -kehittäjänä osaan toteuttaa kokonaisia web-sovelluksia itsenäisestikin."
      >
        <TechSection
          slot="techs"
          title="Teknologioita"
          techs={[
            { title: 'Käyttöliittymät', techs: 'React / Svelte / TypeScript / GWT' },
            { title: 'Taustapalvelut', techs: 'AWS / Firebase / NodeJS / Java EE' }
          ]}
        />
        <Button
          slot="proof"
          text="Työnäytteitä"
          size="btn-sm sm:btn-sm"
          onClick={() => goto(ROUTES.portfolio + '#web')}
        />
        <span class="text-xl" slot="icon">&#128187;</span>
      </ServiceSection>
      <ServiceSection
        title="Mobiilisovellukset"
        desc="Tilaa minulta monipuolinen Android-sovellus. Myös React Native ja Flutter -projektit kiinnostavat, mutta näissä minut kannattaa sijoittaa tiimiin."
      >
        <TechSection
          slot="techs"
          title="Teknologioita"
          techs={[{ techs: 'Android (Java) / Firebase' }]}
        />
        <Button
          slot="proof"
          text="Työnäytteitä"
          size="btn-sm sm:btn-sm"
          onClick={() => goto(ROUTES.portfolio + '#mobile')}
        />
        <span class="text-xl" slot="icon">&#128241;</span>
      </ServiceSection>
    </div>
    <Divider />
    <h2 class="py-5">
      <span class="mark">Osa-alueita</span>, joissa voin sinua parhaiten auttaa...
    </h2>
  </div>
  <!-- OSA-ALUEET -->
  <div id="service-container" class="flex flex-wrap justify-between">
    <ServiceSection
      title="Pilvipalvelut"
      desc="Etsitään sovelluksellesi turvallinen koti. Olen toteuttanut Firebasen päälle useita sovelluksia sen helppokäyttöisyyden takia. Amazon Web Services (AWS) olen käyttänyt mm. rajapintojen kehitykseen ja web-sovellusten alustana."
    >
      <Icon type="cloud" slot="icon" />
      <TechSection
        slot="techs"
        title="Teknologioita"
        techs={[
          {
            title: 'AWS',
            techs:
              'API Gateway, Cognito, Cloudfront, DynamoDB, Lambda, S3, EC2, CloudFormation, Route 53, IAM, Certificate Manager, KMS, CloudWatch'
          },
          {
            title: 'Firebase',
            techs: 'Realtime database, Firestore, Storage, Functions, Hosting'
          }
        ]}
      />
    </ServiceSection>

    <ServiceSection
      title="Testaus"
      desc="Testataan, että koodisi toimii. Yksikkötestaus kuuluu jokaisen kehittäjän arkeen, mutta joskus niiden kirjoittaminen salaperäisesti unohtuu. Toteutan yksikkö- ja rajapintatestejä ohjelmiston laadun varmistamiseksi. Eräs asiakaprojekti keskittyi nimenomaan yksikkötestien kirjoittamiseen."
    >
      <TechSection
        slot="techs"
        title="Teknologioita"
        techs={[{ techs: 'Jest / JUnit / PHPUnit / AVA' }]}
      />
      <Icon type="tasks" slot="icon" />
    </ServiceSection>

    <ServiceSection
      title="Automatisointi"
      desc="Onko CI/CD putket kunnossa? Tehdään ohjelmistokehittäjän työstä tehokasta ja selkeää automatisoimalla manuaalisia töitä. Automatisoidut ja selkeät prosessit ovat nykypäivänä suuressa roolissa tehokkuuden säilyttämisessä."
    >
      <TechSection
        slot="techs"
        title="Teknologioita"
        techs={[{ techs: 'CloudFormation, Serverless, CircleCI, GitHub Actions' }]}
      />
      <Icon type="settings" slot="icon" />
    </ServiceSection>

    <ServiceSection
      title="Ohjelmiston uudistaminen"
      desc="Onko koodin &#34;parasta ennen&#34; -päiväys lähestymässä? Teen vanhasta järjestelmästä uudenveroisen nykyaikaisilla teknologioilla. Tällaisesta projektista kokemusta sain mm. opinnäytetyössäni, kun uudistin Flash-pohjaisen järjestelmän GWT:n päälle ja myöhemmin GWT-pohjaisen järjestelmän Reactin päälle."
    >
      <Icon type="recycle" slot="icon" />
    </ServiceSection>

    <ServiceSection
      title="Tietoturva"
      desc="Laitetaan web-sovelluksesi tietoturva-asiat lainmukaiseen kuntoon ja tukitaan räikeimmät tietoturva-aukot. Olen käynyt tätä varten kursseja tietoturvan riskien hallintaan, yksityisyyden suojaan sekä tietoturvan perusteisiin liittyen."
    >
      <Icon type="security" slot="icon" />
    </ServiceSection>
  </div>
  <Divider />
  <!-- HINNASTO -->
  <div class="py-5">
    <h2 class="mb-3">Hinta</h2>
    <div class="flex flex-row gap-5">
      <PriceItem price={services.devPrice} list={['Yli kuukauden kestävät projektit']} />
      <PriceItem
        price={services.devPriceHigh}
        list={[
          'Alle kuukauden kestävät projektit',
          'GWT projektit',
          'Normaalia vastuullisempi rooli (esim. Lead)'
        ]}
      />
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
</Container>
