---
title: Kotisivuprojekti - Tech Stack
categories:
  - web-kehitys
  - svelte
  - css
  - firebase
  - työkalut
created: 2022-04-15
updated:
description: "Käyn läpi mitä teknologioita nämä Arde Median kotisivut pitää sisällään. Kerron myös miksi valitsin kyseiset teknologiat ja mitä mieltä niistä olin."
thumbnail: tech-stack.png
words: 1350
---

<script>
  import Collapse from '$lib/common/Collapse.svelte';
</script>

Tämä teksti on yksi osa sarjasta, jossa kerron tämän verkkosivuston suunnittelusta ja toteutuksesta. Toteutin verkkosivut Arde Medialle eli omalle toiminimiyritykselleni.

Tulen kertomaan mitä teknologioita valitsin kotisivuilleni ja miksi valitsin juuri kyseiset teknologiat. Lisäksi annan oman mielipiteen jokaisesta teknologiasta niiden käyttämisen jälkeen. Teknologioiden kriteereinä olivat täysi kustomoitavuus, helppokäyttöisyys, suosio ja hinta. Henkilökohtaisena tavoitteena oli uuden oppiminen, jonka takia käytin projektissa vain minulle uusia teknologioita.

---

# Tech Stack

Tech Stack eli teknologiapino kuvastaa teknologioita, joilla sovellus on toteutettu. Verkkosivuja voidaan toteuttaa nopeasti valmiita kotisivukoneita käyttäen, mutta koska halusin sivustolle täysin kustomoituja ja omassa hallinnassa olevia ominaisuuksia, toteutin sivuston web-sovelluksena itse ohjelmoiden. Seuraavassa lista teknologioista, joita käytin:

## Frontend
- [Svelte](https://svelte.dev/) -- JavaScript-käyttöliittymäkirjasto 
- [SvelteKit](https://kit.svelte.dev/) -- Sovelluskehys Svelte-kehitykseen
- [Tailwind CSS](https://tailwindcss.com/) -- CSS-kehys
- [daisyUI](https://daisyui.com/) -- Tailwind CSS komponenttikirjasto
- [mdsvex](https://mdsvex.pngwn.io/) -- Markdownin esikääntäjä Sveltelle

## Backend
- [SendGrid](https://sendgrid.com/) -- Sähköpostien välityspalvelu
- [Firebase](https://firebase.google.com/) -- BaaS (Backend as a Service), josta käytössä seuraavat tuotteet:
  - [Cloud Firestore](https://firebase.google.com/products/firestore/) -- NoSQL dokumenttitietokanta
  - [Cloud Functions for Firebase](https://firebase.google.com/products/functions/) -- Backend koodin ajaminen pilvifunktioissa
  - [Firebase Hosting](https://firebase.google.com/products/hosting/) -- Verkkosivun hostaus

---

# Frontend

## Svelte

[![Svelten kotisivu](/blogi/tech-stack/svelte.png)](https://svelte.dev/)
<caption>Svelten kotisivu</caption>

**Mikä Svelte?**

[Svelte](https://svelte.dev/) on avoimen lähdekoodin JavaScript-kirjasto interaktiivisten verkkosivujen tekoon. Se tarjoaa uuden lähestymistavan käyttöliittymien rakentamiseen. Perinteiset JS-kehykset kuten React ja Vue tekevät suurimman osan työstään *selaimessa*, kun taas Svelte tekee työn sovelluksen *käännösvaiheessa*. Svelte kokoaa koodin pieniksi itsenäisiksi JS-moduuleiksi, mikä varmistaa että selain tekee mahdollisimman vähän työtä. Tämän ansiosta Svelte-sovellukset ovat latausnopeuksiltaan nopeita sekä kooltaan pieniä.


<Collapse title="Kolme Svelten erikoispiirrettä verrattuna Reactiin ja Vueen">

**Vähemmän koodia**

Tyypillinen Hello World -koodi menee Sveltessä suunnilleen näin:

```svelte
  <script>
    let name = "World"
  </script>

  <h1>Hello {name}!</h1>
```

> Vastaavaa koodia tulisi kirjoittaa 30-40% enemmän Reactilla tai Vuella.

**Ei virtuaalista DOM:a**

Virtuaalinen DOM on tapa päivittää verkkosivun rakennetta (DOM) ilman, että koko sivua tarvitsee piirtää uudelleen. Tämä tapahtuu vertaamalla edellistä kustomoitujen objektien puurakennetta nykyiseen ja päivittämällä sivulta vain muuttunut osa. React ja Vue käyttävät virtuaalista DOM:ia. Svelte ei käytä virtuaalista DOM:ia. Svelte on *kääntäjä*, joten sitä ei tarvitse ladata selaimeen suorittaakseen Svelten koodia. Sen sijaan sivulle ladataan yksinkertainen tiedosto sovelluksen renderöimiseksi. Tämä vähentää virtuaalisen DOM:in tuottamia yleiskustannuksia.

**Todella reaktiivinen**

React- tai Vue-tilan muuttamiseen on käytettävä "hookseja". Vaikka ne ovatkin olennainen osa tilan päivittämistä, ne aiheuttavat ylimääräistä työtä muistinhallinnalle.

React-koodi laskurin muuttamiseksi voi näyttää tältä:

```javascript
  const { count } = this.state;
  this.setState({
    count: count + 1
  });
```

Sveltessä tämä koodi voidaan yksinkertaistaa seuraavaksi:
```svelte
  count += 1;
```

Lähde:
https://www.educative.io/edpresso/what-is-svelte


💡**Extra hyödyt:**
- Sveltessä on sisäänrakennettu tilanhallinta, joten siihen ei tarvita ylimääräisiä kirjastoja (vrt. Redux)
- Svelten oppimiskäyrä on Reactia ja Vuea lyhyempi.

</Collapse>

**Miksi Svelte?**

Svelten valinta oli helppoa, koska yksi pääkriteereistäni kotisivujen toteutuksessa oli uuden oppiminen. <mark>Svelte oli 2021 kehittäjien keskuudessa tykätyin web framework</mark> ([tilasto](https://insights.stackoverflow.com/survey/2021#web-frameworks)). Sveltestä olin kuullut vain hyvää ja se vaikutti sellaiselta kirjastolta, joka tulevaisuudessa voisi nousta isojen joukkoon. Svelte tukee myös TypeScriptiä, jota olen suosinut. Suurimmat vaikuttavat tekijät Svelten valintaan olivat:
- Nouseva teknologia
- Lyhyt oppimiskäyrä
- Kehittäjäystävällinen
- Sisäänrakennetut animointiominaisuudet

**Mitä mieltä olin Sveltestä?**

Svelte todella täytti lupauksensa kehittäjäystävällisenä kirjastona. Koodia oli helppo kirjoittaa ja rakenne oli selkeää. Aikaisemmat kokemukseni tulevat React -maailmasta. Svelte on mielestäni taklannut useita Reactin "epäkohtia", ja jo alun perin lähtenyt toteuttamaan kehittäjäkokemusta uudesta näkökulmasta -- selkeydestä, ja siitähän insinööri tykkää. Vaikka Svelte jää vielä suosioltaan suurempien jalkoihin, on sen taustalla omistautunut kehittäjäyhteisö ja en näe mitään estettä sille etteikö Sveltestä voisi nousta esimerkiksi Vuen kaltaista ilmiötä. Tulen jatkossa toteuttamaan Sveltellä sovelluksia, mikäli siihen tulee tilaisuus. 💯/💯

---

## SvelteKit

[![SvelteKitin kotisivu](/blogi/tech-stack/sveltekit.png)](https://kit.svelte.dev/)
<caption>SvelteKitin kotisivu</caption>

**Mikä SvelteKit?**

[SvelteKit](https://kit.svelte.dev/) on Svelten kehittämä sovelluskehys, jonka avulla Svelte-sovellusten rakentaminen on nopeinta. SvelteKit on kehys kaikenkokoisten sovellusten rakentamiseen, varustettuna hyvällä kehittäjäkokemuksella ja tiedostojärjestelmään perustuvalla reitityksellä.

**Miksi SvelteKit?**

Valitsin SvelteKitin, koska halusin tehdä sovelluksen Svelteä käyttäen ja SvelteKit on sitä varten suorituskykyisin työkalu sisältäen reitityksen ilman ylimääräisiä lisäosia. SvelteKit sisälsi muitakin edistyneitä ominaisuuksia koodin rakentamiseen ja optimointiin liittyen, joten kehittäjänä pystyin keskittymään lähinnä sovelluksen rakentamiseen.

**Mitä mieltä olin SvelteKitistä?**

SvelteKit on edelleen beta-vaiheessa ja voi siksi sisältää virheitä ja kummallisuuksia. Itse huomasin tämän kun etsin sovellukseen adapteria Firebasea varten (SvelteKitillä buildatessa täytyy käyttää adapteria kääntämään koodi sopivanlaiseksi kohdeympäristöön). SvelteKitin ja adapterin versionumerot täytyi laskea sopiviksi, jotta ne toimivat yhteen. Muuten SvelteKit toimi mallikkaasti ja tehokkaasti kuten oli luvattu. SvelteKit on myös ainoa oikea vaihtoehto Svelte-sovellusten tekoon, mikäli sovellukseen haluaa backendiä.

---

## Tailwind CSS

[![Tailwind CSS:n kotisivu](/blogi/tech-stack/tailwindcss.png)](https://tailwindcss.com/)
<caption>Tailwind CSS:n kotisivu</caption>

**Mikä Tailwind CSS?**

[Tailwind CSS](https://tailwindcss.com/) on CSS-kehys, jolla voi kirjoittaa tyylejä suoraan HTML-rakenteeseen. Tailwind CSS:n kotisivujen pääotsikkokin kertoo, ettei kehittäjän tarvitse enää koskaan poistua HTML-rakenteesta. Tailwind CSS:ää käytetään HTML:n seassa utility-luokkina seuraavasti:

```html
  <div class="flex text-center pt-5">
    Kato äiti, mä oon netissä!
  </div>
```

Jokainen utility-luokka vastaa yhtä CSS -määrettä, jotka voi tarkastaa Tailwind CSS:n [dokumentaatiosta](https://tailwindcss.com/docs/installation).

Sovelluksen käännösvaiheessa käytössä olevista luokista luodaan <mark>.css</mark> tiedosto:
```css
  .flex {
    display: flex
  }
  .text-center {
    text-align: center;
  }
  .pt-5 {
    padding-top: 1.25rem;
  }
```

**Miksi Tailwind CSS?**

Tailwind CSS:n käytölle ei ollut muuta syytä kuin uuden oppiminen. Monessa mediassa oli kerrottu Tailwind CSS:stä ja siksi päätinkin kokeilla kuinka se oikein toimii. Suurimmat hyödyt Tailwind CSS:stä oli responsiivisen käyttöliittymän luominen sekä värimaailman luominen teemojen avulla. Tailwind CSS sisältää raja-arvot eri näytönleveyksille, joita oli helppo käyttää. Esimerkiksi seuraava tyyli voidaan merkitä Tailwind CSS:llä yksinkertaisesti <mark>sm:flex</mark>.

```css
  @media (min-width: 640px) { 
    display: flex;
  }
```

En muutenkaan ole suuri media queryjen fani, joten tämä oli tervetullut ominaisuus. 

**Mitä mieltä olin Tailwind CSS:stä?**

Tailwind CSS toi uutta näkökulmaa tyylien kirjoittamiseen. Sveltessä kuitenkin on jo itsessään yksinkertaista kirjoittaa tyylejä, joten en usko että Tailwind CSS erityisesti nopeutti tai paransi kehittäjäkokemusta. Kirjoitan edelleen mielummin perinteistä CSS:ää. Hyvä löytö Tailwind CSS:ää ajatellen oli daisyUI, josta kerron seuraavaksi.

---

## daisyUI

[![daisyUI:n kotisivu](/blogi/tech-stack/daisyui.png)](https://daisyui.com/)
<caption>daisyUI:n kotisivu</caption>

**Mikä daisyUI?**

[DaisyUI](https://daisyui.com/) on Tailwind CSS:ää hyödyntävä avoimen lähdekoodin komponenttikirjasto. DaisyUI sisältää komponentti-luokkia kuten <mark>btn</mark> tai <mark>card</mark>, ja näin ollen vähentää utility-luokkien määrää UI-komponenteissa. DaisyUI toimii SvelteKit kanssa ja on helppo ottaa käyttöön.

Seuraava toggle-komponentti rakennettu Tailwind CSS:n **uitility-luokilla**:
<input type="checkbox" class="toggle" checked/>

```html
  <div class="relative">
    <input type="checkbox" class="peer
    appearance-none cursor-pointer
    border border-gray-300 rounded-full
    checked:border-gray-900 w-12 h-6"/>
    <span class="peer-checked:left-7
    peer-checked:bg-gray-900
    transition-all duration-200
    pointer-events-none w-4 h-4
    block absolute top-1 left-1
    rounded-full bg-gray-300"></span>
  </div>
```

Sama komponentti rakennettu daisyUI:n **komponentti-luokalla**:
<input type="checkbox" class="toggle" checked/>

```html
  <input type="checkbox" class="toggle"/>
```

**Miksi daisyUI?**

Koska Tailwind CSS:n malliin kuuluu tyylien kirjoittaminen HTML:n sekaan, olin hieman epäileväinen koodipohjan selkeydestä. DaisyUI vaikutti tähän sopivalta ratkaisulta vähentäen tyyli-luokkien määrää. Halusin lisäksi komponentteihin näyttävyyttä sekä valmiit animaatiot ja mobiilituen, joten tällainen komponenttikirjasto oli arvokas.

DaisyUI:n lisäksi hyödynsin seuraavia Tailwind CSS:ää käyttäviä kokoelmia komponenttien kustomoinnissa: 
- https://tailwindui.com/
- https://tailblocks.cc/
- https://tailwindcomponents.com/

**Mitä mieltä olin daisyUI:sta?**

DaisyUI sisälsi tyyli-luokat kaikkiin tarpeellisiin komponentteihin ja sen asennus SvelteKitiin oli helppoa verrattuna muutamaan muuhun vastaavaan joita kokeilin. Jos jatkossa käytän Tailwind CSS:ää, tulen todennäköisesti palaamaan tämän kirjaston pariin. 👍 siis daisyUI:lle.  

---

## mdsvex

[![mdsvex:n kotisivu](/blogi/tech-stack/mdsvex.png)](https://mdsvex.pngwn.io/)
<caption>mdsvex:n kotisivu</caption>

**Mikä mdsvex?**

[Mdsvex](https://mdsvex.pngwn.io/) on markdownin esikääntäjä (engl. preprocessor) Svelte-komponenteille. Mdsvex mahdollistaa Svelte-komponenttien käytön markdownin seassa ja markdownin käytön Svelte-komponenteissa. Mdsvex sisältää hyödyllisiä ominaisuuksia blogi-alustaa varten, kuten metatietojen käyttämisen sekä yhteisten layouttien luomisen erilaisia postauksia varten. Markdown itsessään on kevyt merkintäkieli muotoillun tekstin luomiseen. Tämäkin postaus on luotu markdownilla. 

**Miksi mdsvex?**

Halusin nopean ja monipuolisen tavan kirjoittaa tyylikkäitä blogi-tekstejä. Tätä varten markdown on sopiva ratkaisu, koska tekstielementit voi tyylitellä nopeasti ja esikatsella reaaliajassa esim. VSCoden lisäosilla. Koska blogipostauksiin sisältyy usein koodilohkoja, lisäsin [prism](https://prismjs.com/) -highlighterin koodien tyylittelyyn. Prism oli mahdollista lisätä mdsvexin avulla.

**Mitä mieltä olin mdsvex:stä?**

Mdsvex on erityisesti blogien kirjoittajille erinomainen lisä Sveltellä rakennettuihin sovelluksiin. Sen avulla blogiteksteihin saa eloa, kun markdowniin voi lisätä omia komponentteja ja tyylejä. Lisäksi blogin rakenne on selkeä, koska markdowiin voi kirjoittaa postaukseen liittyviä metatietoja, joita voi hyödyntää blogi-järjestelmän rakentamisessa.  

---

# Backend

## Firebase

[![Firebasen kotisivu](/blogi/tech-stack/firebase.png)](https://firebase.google.com/)
<caption>Firebasen kotisivu</caption>

**Mikä Firebase?**

[Firebase](https://firebase.google.com/) on Googlen kehittämä alusta mobiili- ja verkkosovellusten rakentamiseen. Firebase on BaaS (Backend as a Service) alusta, joka tarjoaa sovellukselle taustapalveluja, kuten reaaliaikaisen tietokannan, pilvitallennustilan, tunnistautumislogiikan, pilvifunktiot ja verkkosivujen hostauksen. Firebase on kehitetty ensisijaisesti mobiilisovelluksia varten, mutta sitä voidaan käyttää myös web-sovelluksien taustapalveluina. Firebase on ilmainen tiettyyn käyttömäärään asti.

**Miksi Firebase?**

Yksinkertainen syy Firebasen valintaan oli sen helppokäyttöisyys ja sopivuus tämän kokoisiin pieniin web-sovelluksiin. Toinen mietinnässä ollut vaihtoehto pilvialustaksi olisi ollut AWS, mutta se sopii paremmin suuremmille sovelluksille, jotka tarvitsevat monipuolisia ominaisuuksia. Firebasea olen käyttänyt paljon, joten tutussa ja turvallisessa oli mukava pysyä. Tässä projektissa käytin Firebasen palveluista dokumenttitietokantaa, pilvifunktioita ja hostausta.

**Mitä mieltä olin Firebasesta?**

Tällä kertaa käytin vain itselleni uusia Firebasen tuotteita. Hyvä dokumentaatio ja tuotteiden samankaltaisuus tekivät niistä helposti lähestyttäviä ja nopeita ottaa käyttöön. 

Firebase säilyy tämänkin sovelluksen jälkeen ensisijaisena backendinä harrasteprojekteilleni, joissa tarvitaan tärkeitä ominaisuuksia kuten tietovarastoa. Oli kätevää, että Firebase tarjosi myös hostausta. Ainoastaan hostausta tarvitsevilla verkkosivuilla valitsisin kuitenkin toisen palvelun, koska siihen tarkoitukseen on paremmin kohdennettuja palveluja. 

Firebase on loistava palvelu monenlaisille sovelluksille, koska se sisältää kaikki sovelluskehityksen tärkeimmät ominaisuudet. Projektin aikana yksi puute Firebasessa tuli vastaan, nimittäin sähköpostien lähettäminen. Tätä varten otin käyttöön toisen palvelun nimeltään SendGrid.   

---

## SendGrid

[![SendGridin kotisivu](/blogi/tech-stack/sendgrid.png)](https://sendgrid.com/)
<caption>SendGridin kotisivu</caption>

**Mikä SendGrid?**

[SendGrid](https://sendgrid.com/) on sähköpostien jakelupalvelu, joka tarjoaa rajapinnan sähköpostien lähettämiseen. Sähköpostin pohjana voidaan käyttää kustomoituja sähköpostitemplaatteja, joiden muokkaaminen onnistuu SendGridin web-sovelluksessa. SendGridin välityksellä voidaan lähettää 100 sähköpostia päivässä ilmaiseksi.

**Miksi SendGrid?**

Halusin kotisivuille yhteydenottolomakkeen, josta lomake lähtisi sähköpostina minulle henkilökohtaiseen sähköpostiin. Tätä varten piti vertailla sähköpostin lähetyspalveluja. Webbifoorumeilla ja useissa Youtube-tutoriaaleissa suositeltiin SendGridiä, joka vaikutti passelilta yhteydenottolomakkeen taustatoimintoihin.

**Mitä mieltä olin SendGridistä?**

Käytin SendGridiä yhdessä Firebasen kanssa. Yhteydenottolomakkeen lähetys kutsuu Firebasen pilvifunktiota, joka välittää lomakkeen tiedot SendGridiin. SendGrid puolestaan välittää viestin ennalta määrättyyn sähköpostiin. 

Yhteydenottolomakkeesta voitiin rakentaa täysin kustomoitu, koska SendGrid tarjosi rajapinnan sähköpostin lähetykseen. Usein erilaiset sähköpostipalvelut vaativat heidän lomakkeen upottamisen sivustolle toimiakseen. 

SendGrid on hyvä ilmainen sähköpostipalvelu melko monipuolisilla ominaisuuksilla. Se ei kuitenkaan sisällä omaa sähköpostilaatikkoa vaan on ainoastaan sähköpostien välityspalvelu. Tulevia yhteydenottolomakkeita varten valitsisin palvelun, joka olisi mahdollisesti kiinni jo käytetyissä palveluissa (esim. Firebase, AWS). Palvelun sisäinen sähköpostilaatikko olisi myös kätevää. Näin saataisiin vähennettyä tarvittavien palvelujen määrää.

<br/>