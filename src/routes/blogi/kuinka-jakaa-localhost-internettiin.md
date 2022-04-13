---
title: Kuinka jakaa localhost Internettiin?
categories:
  - tutoriaali
  - työkalut
  - web-kehitys
created: 2022-03-25
updated:
description: "Localhostin jakamisella nettiin on useita käyttötapauksia. Suosituimpia näistä ovat nettisivujen esittely ilman käyttöönottoa ja sivuston parempi testaaminen kehitysvaiheessa. Tässä postauksessa opetan kuinka voit jakaa localhostisi julkiseen verkkoon muutamassa minuutissa."
thumbnail: kuinka-jakaa-localhost-internettiin.jpg
words: 520
---

Kuvitteleppa hetki seuraavia skenaarioita:
<br/>

### Skenaario 1

> Olet viettänyt tunteja kehittäessäsi nettisivujesi pikselintarkkaa ulkoasua. Haluat testata tuotostasi muutamalla mobiililaitteella ja tabletilla. Myös asiakkaasi haluaa nähdä kädenjälkesi. Sinulla ei kuitenkaan ole aikaa viedä tuotosta palvelimille nopeaa vilkaisua varten. Haluat ehkä myös varmistaa koodin toimivuuden, koska julkaisuprosessisi on hidas.

### Skenaario 2

> Olet kehittänyt oman hienon harrasteprojektin tietokoneellasi ja haluat näyttää sen läheisille tai työkaverille. Et kuitenkaan halua sijoittaa rahaa ja aikaa hosting -palveluihin, domainiin ja sivuston konfiguraatioihin.

Jos olet web-kehittäjä, olet todennäköisesti törmännyt kyseisiin ongelmiin sillon tällöin. Tätä varten on kehitetty simppeli ratkaisu, nimittäin localhostin jakaminen Internettiin. Törmäsin tähän tekniikkaan ensimmäisen kerran Youtubessa Fireship -kanavan <mark>[videolla](https://www.youtube.com/shorts/SlBOpNLFUC0)</mark> (vahva suositus kanavalle!).

Localhostin jakamista varten on luotu useita palveluja. Tässä postauksessa käyn läpi <mark>[ngrok](https://ngrok.com)</mark> -palvelua, joka on ilmainen ja nopea ottaa käyttöön. Muita vastaavia palveluja joita tutkin ja testasin toimivaksi olivat: 
- https://www.cloudflare.com/
- http://localhost.run/

---

## Ngrokin ja vastaavien palvelujen käyttötapauksia
- Nettisivujen esittely ilman käyttöönottoa
- Webhookien testaaminen kehityslaitteella
- Mobiilisovellusten testaaminen localhostissa pyörivää back-endiä vasten
- Responsiivisen ulkoasun testaaminen mobiililaitteessa 
- IoT laitteille kiinteä julkinen osoite
- Henkilökohtaisten pilvipalvelujen ajaminen kotoa käsin

### Esimerkki💡
> Käytin vasta ngrokia nettisivujeni käyttöliittymän tyylien testauksessa. Halusin nähdä miltä sivustoni näyttää kännykkäni mobiiliselaimessa ja tätä varten sovelluksen julkaisu tuotantopalvelimelle tuntui överiltä -- varsinkin jos halusi testata miltä pienet CSS muutokset näyttävät mobiiliselaimessa. Avasin kehitysympäristön ngrokin avulla julkiseksi ja menin kännykällä sen tarjoamaan osoitteeseen. Näin ollen koodimuutokset päivittyivät kännykän selaimeen lähes reaaliajassa, joten pystyin helposti varmistamaan tyylien toimivuuden kännykällä ja tietokoneella samanaikaisesti.

---

## Ngrokin käyttöönotto

1\. Mene osoitteeseen <mark>[ngrok.com/download](https://www.ngrok.com/download)</mark> ja lataa ngrok<br/>
2\. Pura zip-paketti<br/>
3\. Avaa ngrok.exe<br/>
*ngrok.exe* kannattaa lisätä ympäristömuuttujiin ($PATH) niin sitä voidaan ajaa mistä vaan:
```bash
$ ngrok http 3000
```

**Jos ja kun haluat jakaa HTML sisältöä tunnelin yli, tarvitset Authtokenin:**

4\. Luo ilmainen käyttäjätunnus osoitteessa <mark>[dashboard.ngrok.com/signup](https://dashboard.ngrok.com/signup)</mark><br/>
5\. Lisää Authtoken ngrokiin (löytyy rekisteröinnin jälkeen [täältä](https://dashboard.ngrok.com/get-started/your-authtoken)): 
```bash
$ ngrok authtoken <token>
```
6\. Aja komento **ngrok http 3000** (jakaa localhostin portin 3000) Kehitysympäristön täytyy siis olla käynnissä.


Komento avaa tunnelin ja tulostaa generoidun osoitteen sivustolle, jolle nyt pääsee vierailemaan mistä tahansa! ✅

Osoite on esimerkiksi <mark>https://12dc-88-193-131-239.ngrok.io</mark>

![Näkymä ngrok komennon jäkeen](/blogi/ngrok.png)

---

## Onko ngrok turvallinen?
Tällainen palvelu, jossa oman tietokoneen ympäristö jaetaan nettiin herättää aina epäilyksiä turvallisuudesta. Keskustelupalstojen mukaan ngrokia pidetään yleisesti turvallisena ja luotettavana työkaluna, vaikka sitä voidaan käyttää myös haitalliseen tarkoitukseen, kuten tietojenkalastelusivustojen alustana (phishing).

Ngrokin [kotisivujen](https://ngrok.com/product#:~:text=Ngrok%20exposes%20local%20servers%20behind%20NATs%20and%20firewalls%20to%20the%20public%20internet%20over%20secure%20tunnels.) mukaan ngrok luo turvallisen tunnelin paikallisen palvelimen ja julkisen verkon välille:
> "Ngrok exposes local servers behind NATs and firewalls to the public internet over secure tunnels."

Lisäturvaa ja luotettavuutta lisäävät mm. seuraavat asiat:

- Atlassian käyttää ja [suosittelee](https://developer.atlassian.com/cloud/jira/platform/getting-started-with-connect/#:~:text=We%20recommend%20ngrok,easy%20to%20use) sitä.
- Ngrok on avoimen lähdekoodin työkalu ja löytyy [GitHubista](https://github.com/inconshreveable/ngrok).
- Ngrokin ajaminen ssh yhteyden yli mahdollistaa sen, ettei ngrokin koodia tarvitse ajaa koneellasi:
  ```bash
  $ ssh -R 80:localhost:3000 tunnel.us.ngrok.com http
  ```
- Vaikka generoitu osoite on jo itsessään vaikea arvata, voidaan lisäturvaa asettaa salasanasuojauksella, joka estää satunnaisten silmäparien pääsyn sivustolle:
  ```bash
  $ ngrok http -auth="username:password" 3000
  ```

**Huom!** Generoidussa ngrok-osoitteessa vierailu voi aiheuttaa selaimessa varoituksen. Tämä on kuitenkin odotettavissa, koska selain ei välttämättä [tunnista](https://rntlab.com/question/is-ngrok-safe/#:~:text=Your%20browser%20just%20doesn%E2%80%99t%20recognize%20the%20domain%20name/https%20server%20and%20throws%20that%20warning%20message.) generoitua domainia / https palvelinta.

## Yhteenveto
Jos työskentelet tietokoneella, jossa on käytössä aktiivinen Internet yhteys, voit luoda julkisen pääsyn localhostiisi muutamassa minuutissa. Käyttöönotto on hyvin yksinkertaista ja palveluntarjoajia löytyy monia. Tällainen työkalu kannattaa jokaisen web-kehittäjän ottaa käyttöön, koska se helpottaa sovellusten esittelyä ja kehitystyötä. 