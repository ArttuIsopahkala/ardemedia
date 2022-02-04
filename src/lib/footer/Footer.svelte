<script lang="ts">
  import Icon from '$lib/common/Icon.svelte';
  import data from '$lib/static/data';
  import * as animateScroll from 'svelte-scrollto';
  import FooterLink from './FooterLink.svelte';
  import SomeButton from './SomeButton.svelte';
</script>

<footer
  class="bg-base-content border-t-2 border-primary flex flex-col items-center text-base-300"
>
  <div
    class="w-16 h-16 btn btn-circle -mt-6 bg-base-content"
    on:click={() => animateScroll.scrollTo({ y: 0 })}
  >
    <Icon type="up" color="text-base-300" />
  </div>
  <div class="max-w-5xl w-full flex flex-row justify-around">
    <div class="flex flex-col">
      <h4 class="text-base-300">Arde Media</h4>
      <span>Y-tunnus: 2945862-1</span>
      <div class="flex flex-row gap-5 mt-4">
        <SomeButton
          icon="linkedin"
          url="https://www.linkedin.com/in/arttu-isopahkala-865557ba"
          label="LinkedIn"
        />
        <SomeButton icon="github" url="https://github.com/ArttuIsopahkala" label="GitHub" />
        <SomeButton
          icon="google-play"
          url="https://play.google.com/store/apps/developer?id=Arde+Apps"
          label="Google Play"
        />
        <SomeButton icon="youtube" url="https://www.youtube.com/pehrehvind" label="Youtube" />
      </div>
    </div>
    <div class="flex flex-col gap-2 justify-start">
      {#each data.ROUTES as route}
        <FooterLink label={route.label} href={route.url} />
      {/each}
    </div>
  </div>
  <div>
    <p class="text-sm text-textGray m-4 text-center">
      © Arde Media {new Date().getFullYear()}<br />
    </p>
  </div>
</footer>
