<script lang="ts">
  import Button from '$lib/common/Button.svelte';
  import Divider from '$lib/common/Divider.svelte';
  import { fade } from 'svelte/transition';

  type Arvo = 'auttaminen' | 'vastuullisuus' | 'selkeys' | 'kunnioitus';
  let selectedValue: Arvo = 'vastuullisuus';
</script>

<div id="values">
  <h1 class="py-5">Arvot</h1>
  <div class="flex flex-row">
    <div class="flex flex-col gap-4">
      <Button
        text="Vastuullisuus"
        outlined={selectedValue !== 'vastuullisuus'}
        secondary={true}
        onClick={() => (selectedValue = 'vastuullisuus')}
      />
      <Button
        text="Auttaminen"
        outlined={selectedValue !== 'auttaminen'}
        secondary={true}
        onClick={() => (selectedValue = 'auttaminen')}
      />
      <Button
        text="Selkeys"
        outlined={selectedValue !== 'selkeys'}
        secondary={true}
        onClick={() => (selectedValue = 'selkeys')}
      />
      <Button
        text="Yhdenvertaisuus"
        outlined={selectedValue !== 'kunnioitus'}
        secondary={true}
        onClick={() => (selectedValue = 'kunnioitus')}
      />
    </div>
    <Divider vertical={true} />
    <div class="flex flex-col md:max-w-md">
      {#if selectedValue === 'auttaminen'}
        <p in:fade={{ duration: 300 }}>
          Joka apua pyytää, se apua saa. Se merkitsee paljon, jos voin olla avuksi muille. Olen työelämässä
          saanut kiitosta auttamisesta, liittyen järjestelmien toiminnallisuuksien auki
          selittämiseen, virhetilanteiden korjaamiseen tai muuhun nopeaan reagointiin. &#9889;
        </p>
      {:else if selectedValue === 'vastuullisuus'}
        <p in:fade={{ duration: 300 }}>
          Jokainen on lopulta vastuussa omasta työstään ja itsestään. Tämän takia tehdään hommat
          tosissaan ja huolella, mutta ei liian vakavalla naamalla. &#127774;
        </p>
      {:else if selectedValue === 'selkeys'}
        <p in:fade={{ duration: 300 }}>
          Oli kyse sitten kommunikaatiosta asiakasrajapinnassa tai käyttöliittymäsuunnittelusta,
          tekemisessäni voidaan havaita insinöörimäinen loogisuus ja selkeys. Koodiasioiden selittäminen 
          ei-tekniselle ihmiselle luonnistuu ilman vaikeaa ammattisanastoa. &#128172;
        </p>
      {:else if selectedValue === 'kunnioitus'}
        <p in:fade={{ duration: 300 }}>
          Jokainen ihminen ansaitsee tulla kuulluksi, eikä kenenkään toiveita tai mielipiteitä saa sivuuttaa.
          Huomioonottaminen ja huumori luovat ympäristön, jossa kaikilla on hyvä olla. &#128106;
        </p>
      {/if}
    </div>
  </div>
</div>
