<script lang="ts">
  import Icon from '$lib/common/Icon.svelte';
  import ROUTES from '$lib/static/routes';
  import FooterLink from './FooterLink.svelte';
  import SomeButton from './SomeButton.svelte';
</script>

<footer class="bg-base-content border-t-2 border-primary flex flex-col items-center text-base-300">
  <div
    class="w-16 h-16 btn btn-circle -mt-6 bg-base-content"
    on:click={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
  >
    <Icon type="up" color="text-base-300" />
  </div>
  <div class="max-w-3xl w-full flex flex-row justify-between flex-wrap">
    <div class="flex flex-col p-5 mt-2 xl:p-0">
      <h3 class="text-base-300 mb-5">Arde Media</h3>
      <span>Y-tunnus: 2945862-1</span>
      <div class="grid grid-flow-col gap-5 mt-4">
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
    <div class="flex flex-col justify-start p-5 xl:p-0">
      <h3 class="p-2 text-base-300">Palvelut</h3>
      <FooterLink label={'Ohjelmistokehitys'} href={ROUTES.development} />
      <FooterLink label={'Ohjelmistojen suunnittelu'} href={ROUTES.design} />
    </div>
    <div class="flex flex-col justify-start p-5 xl:p-0">
      <h3 class="p-2 text-base-300">Pikalinkit</h3>
      <FooterLink label="Etusivu" href={ROUTES.home} />
      <FooterLink label="Tietoa minusta" href={ROUTES.about} />
      <FooterLink label="Portfolio" href={ROUTES.portfolio} />
      <FooterLink label="Blogi" href={ROUTES.blog} />
      <FooterLink label="Ota yhteyttä!" href={ROUTES.contact} />
      <FooterLink label="Evästepolitiikka" href={ROUTES.cookies} />
    </div>
  </div>
  <div>
    <p class="text-sm text-textGray m-4 text-center">
      © Arde Media {new Date().getFullYear()}<br />
    </p>
  </div>
</footer>
