<script lang="ts">
  import Container from '$lib/common/Container.svelte';
  import Icon from '$lib/common/Icon.svelte';
  import Form from '$lib/contact/Form.svelte';
  import NoteItem from '$lib/contact/NoteItem.svelte';
  import { options } from '../store';

  let availableDate: string;

  options.subscribe((options) => {
    availableDate = options.contact.availableDate;
  });

  // Future feature
  /*   const isFutureDate = (dateString: string) => {
    const today = new Date();
    const compare = new Date(dateString);
    console.log("dateString",compare)
    console.log("dateString today",today)
    return today.valueOf() < compare.valueOf();
  }; */
</script>

<svelte:head>
  <title>Ota yhteyttä! | Arde Media</title>
</svelte:head>

<Container>
  <h1 class="py-5">Ennen kuin otat yhteyttä...</h1>
  <h3 class="pb-5">sinun on hyvä tietää nämä jutut:</h3>
  <div class="grid grid-flow-col grid-rows-3 sm:grid-rows-1 gap-5">
    <NoteItem description="Voin aloittaa seuraavan projektin">
      <Icon slot="icon" type="calendar" />
      <h2
        slot="extra"
        class="text-primary"
        on:click={() =>
          document
            .getElementById('contactBox')
            .scrollIntoView({ block: 'center', behavior: 'smooth' })}
      >
        {availableDate ?? '-'}
        <!-- {#if isFutureDate($availableDate)}
          {$availableDate}
        {:else}
          Vaikka heti!
        {/if} -->
      </h2>
    </NoteItem>
    <NoteItem
      description="Majailen Tampereella, joten voin työskennellä toimistollasi Tampereen alueella. Muuten palveluni tapahtuvat etänä."
    >
      <Icon slot="icon" type="marker" />
    </NoteItem>
    <!-- <NoteItem
      description="Pyrin tekemään 6 tunnin työpäiviä, jolloin vireystilani pysyy koko työajan tuottavana. Tällöin myös asiakkaana saat pienemmän laskun. Win-win?"
    >
      <Icon slot="icon" type="clock" />
    </NoteItem> -->
    <NoteItem
      description="Toivon, että työpaikalla puhutaan pääsääntöisesti suomea. Tällöin osaan auttaa teitä parhaalla mahdollisella tavalla."
    >
      <Icon slot="icon" type="language" />
    </NoteItem>
  </div>
  <div id="contactBox" class="bg-card p-5 my-5">
    <div class="flex items-center">
      <h3 class="py-5 mr-5">Lähetä minulle viesti</h3>
      <Icon type="email" color="text-primary" />
    </div>
    <p class="">Vastaan heti kun se on inhimillisesti mahdollista!</p>
    <Form />
  </div>
</Container>
