<script lang="ts">
  import { goto } from '$app/navigation';
  import Button from '$lib/common/Button.svelte';
  import LazyImage from '$lib/common/LazyImage.svelte';
  import ROUTES from '$lib/static/routes';
</script>

<div id="story">
  <h1 class="text-center py-5">Kuinka minusta tuli koodari?</h1>
  <div class="flex flex-row justify-center">
    <div class="md:max-w-md">
      <p class="mb-4">
        Opi vielä vähän lisää minusta. Mikä ohjelmoinnissa oikein viehättää ja millainen matkani
        koodarina on ollut pikkupojasta aina tähän päivään asti. Tämä lyhyt elämänkerta sisältää
        kurkistuksen ensimmäisiin nettisivuihini, koodarin opintoihini sekä työpaikkoihin.
      </p>
      <Button text="Lue tarinani" outlined={true} onClick={() => goto(ROUTES.story)} />
    </div>
    <div class="hidden md:flex justify-center ml-5">
      <LazyImage
        style="max-h-[250px] mask mask-squircle"
        src={'/thumbnails/story.jpg'}
        alt="tarina"
      />
    </div>
  </div>
</div>
