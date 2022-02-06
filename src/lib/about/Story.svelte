<script lang="ts">
  import { goto } from '$app/navigation';
  import Button from '$lib/common/Button.svelte';
  import LazyImage from '$lib/common/LazyImage.svelte';
</script>

<div id="story">
  <h2 class="text-center py-5">Tarinani koodarina</h2>
  <div class="flex flex-row justify-center">
    <div class="md:max-w-md">
      <p class="mb-4">
        Opi vielä vähän lisää minusta. Mikä ohjelmoinnissa oikein viehättää ja millainen matkani
        koodarina on ollut pikkupojasta aina tähän päivään asti. Tämä lyhyt elämänkerta sisältää
        kurkistuksen ensimmäisiin nettisivuihini, opiskeluun, työelämään ja luonteeseeni.
      </p>
      <Button text="Lue tarinani →" outlined={true} onClick={() => goto('/blog/story')} />
    </div>
    <div class="hidden md:flex justify-center ml-5">
      <LazyImage style="max-h-[250px] mask mask-squircle" src={'story.jpg'} alt="tarina" />
    </div>
  </div>
</div>
