<script lang="ts">
  import { goto } from '$app/navigation';
  import Button from '$lib/common/Button.svelte';
  import { devPrice } from './../../store.js';
</script>

<div id="reasons">
  <h2 class="py-5">Miksi valita juuri minut?</h2>
  <ul class="flex flex-col gap-2">
    <li>&#8226; Jos olet lukenut arvojani ja haluat palkata minut, tiedän silloin että sovin rooliin.</li>
    <li>&#8226; Olen hyvä tiimipelaaja, joka osaa tukea toisia haasteissaan ja jakaa heille kokemukseni tuomat vinkkini</li>
    <li>&#8226; Teidän tuovani paljon lisäarvoa tiimiin teknisillä sekä kommunikaatiotaidoillani</li>
    <li>&#8226; Ohjelmistokehitys ei ole minulle ainoastaan työtä vaan saan siitä iloa ja yhteisöllisyyttä TODISTE</li>
    <li>&#8226; Teknologian kanssa kikkailu ei ole vain työtä vaan olen innokas koodari myös vapaa-ajalla TODISTE</li>
  </ul>
</div>