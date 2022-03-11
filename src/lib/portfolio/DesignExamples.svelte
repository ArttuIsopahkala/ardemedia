<script>
  import Collapse from '$lib/common/Collapse.svelte';
  import LazyImage from '$lib/common/LazyImage.svelte';

  export let uiTitle = '';
  export let techTitle = '';
</script>

<Collapse title={uiTitle}>
  <div class="grid gap-8">
    <div>
      <h3 class="mb-2">Väripaletti</h3>
      <div class="flex flex-row flex-wrap">
        <div class="h-[50px] w-[100px] flex justify-center items-center bg-primary text-textLight">
          #F89B00
        </div>
        <div
          class="h-[50px] w-[100px] flex justify-center items-center bg-base-content text-textLight"
        >
          #1f2937
        </div>
        <div class="h-[50px] w-[100px] flex justify-center items-center bg-base-300 text-textLight">
          #d1d5db
        </div>
        <div class="h-[50px] w-[100px] flex justify-center items-center bg-base-100 text-textDark">
          #ffffff
        </div>
      </div>
    </div>
    <div>
      <h3 class="mb-2">Fontit</h3>
      <div class="flex flex-row flex-wrap">
        <div class="flex-col mr-5">
          <p class="text-sm">Open Sans</p>
          <h1 class="font-['Open_Sans'] normal-case">AaBbCc</h1>
          <h2 class="font-['Open_Sans'] normal-case">AaBbCc</h2>
          <h3 class="font-['Open_Sans'] normal-case">AaBbCc</h3>
          <h4 class="font-['Open_Sans'] normal-case">AaBbCc</h4>
        </div>
        <div class="flex-col mr-5">
          <p class="text-sm">Barlow Condensed</p>
          <h1 class="font-['Barlow_Condensed'] normal-case">AaBbCc</h1>
          <h2 class="font-['Barlow_Condensed'] normal-case">AaBbCc</h2>
          <h3 class="font-['Barlow_Condensed'] normal-case">AaBbCc</h3>
          <h4 class="font-['Barlow_Condensed'] normal-case">AaBbCc</h4>
        </div>
        <div class="flex-col">
          <p class="text-sm">Rampart One</p>
          <h1 class="font-['Rampart_One'] normal-case">AaBbCc</h1>
          <h2 class="font-['Rampart_One'] normal-case">AaBbCc</h2>
          <h3 class="font-['Rampart_One'] normal-case">AaBbCc</h3>
          <h4 class="font-['Rampart_One'] normal-case">AaBbCc</h4>
        </div>
      </div>
    </div>
    <div>
      <h3 class="mb-2">Logo</h3>
      <div class="flex flex-row flex-wrap">
        <LazyImage style="max-h-[800px] mr-5" src="logo_black.png" alt="musta logo" />
        <LazyImage style="max-h-[800px]" src="logo_white.png" alt="valkoinen logo" />
      </div>
    </div>
    <div>
      <h3 class="mb-2">UI-kuva</h3>
      <LazyImage style="max-h-[800px]" src="ui-kuva.png" alt="esimerkki ui-kuvasta" />
    </div>
  </div>
</Collapse>
<Collapse title={techTitle}>
  <h3 class="mb-2">Projektinäkymä</h3>
  <LazyImage style="max-h-[800px]" src="projekti.png" alt="esimerkki projektinäkymästä" />
  <h3 class="mb-2 mt-5">Vaatimusmäärittely</h3>
  <LazyImage style="max-h-[800px]" src="vaatimus.png" alt="esimerkki vaatimusmäärittelystä" />
  <h3 class="mb-2 mt-5">Tekninen kuvaus (AWS)</h3>
  <LazyImage style="max-h-[600px]" src="infra.png" alt="esimerkki teknisestä kuvauksesta" />
</Collapse>
