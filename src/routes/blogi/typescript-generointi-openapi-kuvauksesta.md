---
title: Typescript tyyppien ja API Clientin generointi OpenAPI kuvauksesta
categories:
  - web-kehitys
  - swagger
  - openapi
  - työkalut
created: 2023-04-06
updated:
description: "Tiesitkö, että front-endin API Clientin koodit voidaan generoida täysin vastaamaan Rest API:a, johon se on yhteyksissä? Tässä kirjoituksessa kerron, mitä hyötyjä koodigeneroinnista on ja miten generointi käytännössä tapahtuu OpenAPI-kuvauksen perusteella."
thumbnail: openapi-generointi.png
words: 560
---

OpenAPI kuvaus on tarkoitettu API:n käyttäjille kuvaamaan rajapinnan sisältöä. Kuvauksella kerrotaan, mitä rajapintoja API:iin on rakennettu ja millaisia tietomalleja rajapintojen läpi kulkee. OpenAPI kuvaus tarjoillaan usein Swaggerin työkaluja käyttäen ja nämä termit liitetäänkin usein yhteen. Virallisesti OpenAPI tarkoittaa kuvausta ja Swagger tarkoittaa työkaluja, joilla kuvaus implementoidaan. 

Tämä teksti on kirjoitettu React (TypeScript) -projektien näkökulmasta, eikä ota kantaa OpenAPI-kuvauksen tarjoiluun tai rakentamiseen. Sanotaanko kuitenkin näin, että jonkinlainen rajapintakuvaus on hyvä tehdä kaikille Rest API:lle. Tällöin rajapinnat on selkeästi dokumentoituna ja helpommin testattavissa.

## Ongelma
Kahdessa viimeisimmässä TypeScript-projektissa kehitystiimi on törmännyt ongelmaan frontendin ja Rest API:n tietomallien yhteensopivuuden kanssa. Olemme siis tyypittäneet frontendiin API:sta tulevat tietomallit eli front-end olettaa API:n datan vastaavan tiettyä muotoa. Varsinkin kehityksen aikana API:n tietomallit muuttuvat kuitenkin jatkuvasti (tulee uusia kenttiä, kenttien nimi ja tietotyyppi muuttuu). Uudesta muodosta ei ole front-endissä tietoa, ellei kehittäjä tajua päivittää tyypitystä jatkuvasti front-endin koodiin. Front-end voi vain olettaa, että data tulee tietyssä muodossa. Itse rajapintojen tietomallit kun ovat back-endin vastuulla.  

Ongelma ilmenee erityisesti silloin, kun front-endin ja back-endin koodit sijaitsevat eri repoissa, kehitys tapahtuu eriaikaisesti, ja rajapintatasolla ei voida käyttää jaettuja tietomalleja frontin ja bäkkärin kesken. Tällöin tietomallit ovat epäsynkassa ja julkaistu UI-sovellus voi pahimmassa tapauksessa kaatua.

## Ratkaisu
Näissä molemmissa projekteissa olemme ottaneet käyttöön koodigeneraattorin, joka generoi frontille tyypit API:sta tarjottavan OpenAPI-kuvauksen pohjalta. Kun frontti käyttää OpenAPI-kuvausta tyyppien generointiin, frontin tietomallit saadaan vastaamaan API:n tietomalleja, jolloin sovellus toimii oikein. Generointi on liitetty osaksi ohjelmointiprosessia ja se voidaan suorittaa kehittäjän toimesta tai automaattisesti testauksen ohessa.

## Generoinnin hyötyjä
TypeScript antaa kehittäjälle vapaat kädet siihen, kuinka vahvaa tyypitystä halutaan käyttää. Ideaalitilanteessa "any"-tyyppejä ei tulisi olla yhtään projektissa, jotta saadaan TypeScriptistä kaikki hyöty irti. Joissain tilanteissa tyypitystä ei kuitenkaan voida tehdä, vaan koodissa täytyy olettaa, että data on tietyn tyyppistä. Yksi tilanne on UI:n ja API:n välinen tyypitys, jossa API:n tyypitys on määritetty back-endin koodissa, eikä UI tiedä suoranaisesti näistä tyypeistä mitään. Erityisesti tähän tilanteeseen on OpenAPI:n pohjalta tehty koodigenerointi tarkoitettu.

Generoinnista on mm. seuraavia hyötyjä:
- Front-endin tyypit ja API Client voidaan todentaa vastaavaksi Rest API:n kanssa
- Generointi voidaan automatisoida mukaan kehitysprosessiin

## Eri generaattoreita
Generoitu koodi on aina generoidun näköistä. Usein kannattaa rakentaa wrapperi vielä generoidun koodin päälle, jos ei halua käyttää koodin seassa geneerisen näköistä nimeämistä. Koodigeneroinnin toteutukseen testasin seuraavia npm-kirjastoja:

- [OpenAPI Typescript Codegen](https://www.npmjs.com/package/openapi-typescript-codegen)
- [swagger-typescript-api](https://www.npmjs.com/package/swagger-typescript-api)
- [@openapitools/openapi-generator-cli](https://www.npmjs.com/package/@openapitools/openapi-generator-cli)

### Generointi OpenAPI Typescript Codegen -kirjastolla

Näistä vaihtoehdoista front-endin käyttöön paras oli [OpenAPI Typescript Codegen](https://github.com/ferdikoomen/openapi-typescript-codegen). Tässä kirjastossa hyvää oli monipuoliset parametrit, selkeä koodin jaottelu eri tiedostoihin ja se, että kirjastoa varten ei tarvitse asentaa Javaa ajoympäristöön toimiakseen. Kirjastolla voidaan generoida vaikka koko API Clientin koodit tai ainoastaan tietomallit.

Seuraavilla skripteillä voidaan generoida koko API Clientin koodi OpenAPI kuvauksen perusteella. Rivit sijoitetaan <mark>packages.json</mark> -tiedoston scripts-lohkoon.
```bash
  "swagger-download": "curl -k <openapi kuvauksen url> --output swagger.json",
  "swagger-generate": "openapi -i swagger.json -o <output-kansio>"
```
1. <mark>swagger-download</mark> käyttää curlia lataamaan OpenAPI kuvauksen halutusta osoitteesta projektiin swagger.json -tiedostoon.
2. <mark>swagger-generate</mark> generoi openapi kirjastoa käyttäen API Clientin swagger.json -tiedoston pohjalta, haluttuun kohdekansioon.

Jos halutaan generoida ainoastaan tyypit (ei API Clientia), voidaan <mark>swagger-generate</mark> skriptiin lisätä argumentit:
```bash 
--exportCore false --exportServices false
```

## Yhteenveto
Koodin generoinnin hyödyt ovat erityisesti laadunvarmistuksessa, koska front-endin koodi voidaan generoida vastaamaan tarkalleen sitä, mitä API:iin on määritetty. Näkisin, että tärkein osuus on generoida tietomallit, koska niihin tulee eniten rikkovia muutoksia. TypeScript-koodin generointiin paras kirjasto on tällä hetkellä [OpenAPI Typescript Codegen](https://github.com/ferdikoomen/openapi-typescript-codegen), koska se ei vaadi Javaa toimiakseen, se on hyvin muokattavissa ja sillä generoitu koodi on selkeiten jaoteltu verrattaen muihin vastaaviin kirjastoihin. Koodigeneroinnissa todennäköisesti suurimman työn aiheuttaa yhteisten käytäntöjen määrittäminen ja se kuinka generointi sisällytetään osaksi ohjelmointiprosessia.