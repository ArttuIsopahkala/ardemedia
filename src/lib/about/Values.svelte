<script lang="ts">
  import Button from '$lib/common/Button.svelte';
  import Divider from '$lib/common/Divider.svelte';
  import { fade } from 'svelte/transition';

  type Arvo = 'auttaminen' | 'vastuullisuus' | 'selkeys' | 'kunnioitus';
  let selectedValue: Arvo = 'vastuullisuus';
</script>

<div id="values">
  <h2 class="text-center p-5">Arvot</h2>
  <div class="flex flex-row justify-center p-5">
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
        text="Toisten kunnioitus"
        outlined={selectedValue !== 'kunnioitus'}
        secondary={true}
        onClick={() => (selectedValue = 'kunnioitus')}
      />
    </div>
    <Divider vertical={true} />
    <div class="flex flex-col md:max-w-lg">
      {#if selectedValue === 'auttaminen'}
        <p in:fade={{ duration: 300 }}>
          KEKSI UUS ! Olen urani aikana saanut paljon kiitosta tehokkuudestani ja nopeasta reagoinnista
          erilaisissa ohjelmistokehityksen tilanteissa. Oli kyse sitten ohjelmistosta löydetystä
          virheestä tai uudesta ominaisuudesta, olen reagoinut näihin nopeasti. Järjestelmällisyyden
          avulla onnistun tuottamaan vaikeammankin tehtävän tiukassa aikataulussa. Tästä
          tehokkuudesta haluan pitää kiinni.
        </p>
      {:else if selectedValue === 'vastuullisuus'}
        <p in:fade={{ duration: 300 }}>
          Ohjelmistokehityksessä olen aina toimittanut lupaamani asiat. Vaati se sitten
          tuntemattoman teknologian opettelua tai uuteen rooliin hyppäämistä, olen onnistunut
          muuntautumaan uuteen tilanteeseen kovalla työllä tai muiden avustamana.
        </p>
      {:else if selectedValue === 'selkeys'}
        <p in:fade={{ duration: 300 }}>
          Oli kyse sitten asiakasrajapinnan kommunikaatiosta tai käyttöliittymäsuunnittelusta,
          kaikessa voidaan havaita insinöörimäinen loogisuus ja selkeys. Kommunikointi ei-tekniselle
          ihmiselle onnistuu ilman vaikeaa ammattisanastoa. Lisäksi yrityksen toimintamallit ovat
          selkeitä, jolloin palveluja on helppo ostaa eikä asiakkaan tarvitse huolehtia ylimääräistä
        </p>
      {:else if selectedValue === 'kunnioitus'}
        <p in:fade={{ duration: 300 }}>
          Jokainen ihminen ansaitsee tulla kuuluksi, eikä toiveita tai mielipiteitä saa sivuuttaa.
          Huumori ja kaikkien huomioonottaminen tuo työympäristöön rentoutta, jolloin kaikilla on
          mukavampaa työskennellä.
        </p>
      {/if}
    </div>
  </div>
</div>
