<script lang="ts">
  import ValueItem from './ValueItem.svelte';
</script>

<div id="values">
  <h1 class="py-5">Arvot</h1>
  <div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
    <ValueItem title="Vastuullisuus &#127774;">
      Jokainen on lopulta vastuussa omasta työstään ja itsestään. Tämän takia tehdään hommat
      tosissaan ja huolella, mutta ei liian vakavalla naamalla.
    </ValueItem>
    <ValueItem title="Auttaminen &#9889;">
      Joka apua pyytää, se apua saa. Se merkitsee paljon, jos voin olla avuksi muille. Olen
      työelämässä saanut kiitosta auttamisesta, liittyen järjestelmien toiminnallisuuksien auki
      selittämiseen, virhetilanteiden korjaamiseen tai muuhun nopeaan reagointiin.
    </ValueItem>
    <ValueItem title="Selkeys &#128172;">
      Oli kyse sitten kommunikaatiosta asiakasrajapinnassa tai käyttöliittymäsuunnittelusta,
      tekemisessäni voidaan havaita insinöörimäinen loogisuus ja selkeys. Koodiasioiden selittäminen
      ei-tekniselle ihmiselle luonnistuu ilman vaikeaa ammattisanastoa.
    </ValueItem>
    <ValueItem title="Yhdenvertaisuus &#128106;">
      Jokainen ihminen ansaitsee tulla kuulluksi, eikä kenenkään toiveita tai mielipiteitä saa
      sivuuttaa. Huomioonottaminen ja huumori luovat ympäristön, jossa kaikilla on hyvä olla.
    </ValueItem>
  </div>
</div>
