<script lang="ts">
  import { goto } from '$app/navigation';
  import Button from '$lib/common/Button.svelte';
</script>

<div id="story">
  <h2 class="text-center p-5 mt-5">Tarinani koodarina</h2>
  <div class="flex flex-row p-5">
    <div class="md:w-1/2">
      <p class="mb-4">
        Opi vielä vähän lisää minusta. Mikä ohjelmoinnissa oikein viehättää ja millainen matkani
        koodarina on ollut pikkupojasta aina tähän päivään asti. Tämä lyhyt elämänkerta sisältää
        kurkistuksen ensimmäisiin nettisivuihini, opiskeluun, työelämään ja luonteeseeni.
      </p>
      <Button text="Lue tarinani →" outlined={true} onClick={() => goto('/blog/story')} />
    </div>
    <div class="hidden md:flex justify-center p-6 md:w-1/2">
      <img class="max-h-[300px] mask mask-squircle" src={'story.jpg'} alt="tarina" />
    </div>
  </div>
</div>
