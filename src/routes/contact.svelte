<script lang="ts">
  import NoteItem from '$lib/contact/NoteItem.svelte';
  import Form from '$lib/contact/Form.svelte';
  import Icon from '$lib/common/Icon.svelte';
  import { availableDate } from './../store.js';
  import Container from '$lib/common/Container.svelte';
  import clsx from 'clsx';

  const isFutureDate = (dateString: string) => {
    const today = new Date();
    const compare = new Date(dateString);
    return today.valueOf() < compare.valueOf();
  };
</script>

<svelte:head>
  <title>Ota yhteyttä! | Arde Media</title>
</svelte:head>

<Container style="bg-base-100 bg-[url('/bg-pattern.svg')]">
  <h2 class="py-5">Ennen kuin otat yhteyttä...</h2>
  <h4 class="pb-5">sinun on hyvä tietää nämä jutut:</h4>
  <div class="flex flex-row flex-wrap justify-between">
    <NoteItem description="Voin aloittaa seuraavan projektin">
      <Icon slot="icon" type="calendar" />
      <h3 slot="extra" class={clsx(isFutureDate($availableDate) ? 'text-primary' : 'text-success')}>
        {#if isFutureDate($availableDate)}
          {$availableDate}
        {:else}
          Vaikka heti!
        {/if}
      </h3>
    </NoteItem>
    <NoteItem
      description="Majailen Tampereella, joten voin työskennellä toimistollasi Tampereen alueella. Muuten palveluni tapahtuvat etänä."
    >
      <Icon slot="icon" type="marker" />
    </NoteItem>
    <NoteItem
      description="Toivon, että työpaikalla puhutaan pääsääntöisesti suomea. Tällöin osaan auttaa teitä parhaalla mahdollisella tavalla."
    >
      <Icon slot="icon" type="language" />
    </NoteItem>
    <NoteItem
      description="Teen pääsääntöisesti 6 tunnin työpäiviä. Tällöin olen koko työajan virkeä ja tuottava. Samalla saat asiakkaana pienemmän laskun. Win-win?"
    >
      <Icon slot="icon" type="clock" />
    </NoteItem>
  </div>
  <div class="bg-card p-5 my-5">
    <div class="flex items-center">
      <h4 class="py-5 mr-5">Lähetä minulle viesti</h4>
      <Icon type="email" style="text-primary" />
    </div>
    <p class="">Vastaan heti kun se on inhimillisesti mahdollista!</p>
    <Form />
  </div>
</Container>
