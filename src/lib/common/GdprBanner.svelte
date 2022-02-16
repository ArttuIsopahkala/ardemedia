<script context="module" lang="ts">
  export interface GdprSettings {
    show: boolean;
    analytics: boolean;
    version: number;
  }
</script>

<script lang="ts">
  import Button from './Button.svelte';
  import { gdprSettings, gdprVersion } from '../../store.js';
  import config from '$lib/static/firebaseConfig.js';
  import Icon from './Icon.svelte';
  import { GoogleAnalytics } from '@beyonk/svelte-google-analytics';

  let currentSettings: GdprSettings = $gdprSettings;
  let analyticsCheck = $gdprSettings.analytics;
  let showSettings: boolean = false;
  let ga;

  $: if ($gdprSettings) {
    currentSettings = $gdprSettings;
  }

  const acceptCookies = () => {
    let newSettings: GdprSettings = {
      show: false,
      analytics: true,
      version: $gdprVersion
    };
    gdprSettings.set(newSettings);
    // Init analytics
    if (newSettings.analytics) {
      ga.init();
    }
  };

  const saveAndExit = () => {
    let newSettings: GdprSettings = {
      show: false,
      analytics: analyticsCheck,
      version: $gdprVersion
    };
    gdprSettings.set(newSettings);
    // Init analytics
    if (newSettings.analytics) {
      ga.init();
    }
  };
</script>

<GoogleAnalytics
  bind:this={ga}
  properties={[config.measurementId]}
  enabled={currentSettings.analytics}
/>

{#if currentSettings.show || ($gdprVersion && currentSettings.version < $gdprVersion)}
  <div
    class="border flex flex-col fixed z-[99999] bg-base-100 p-5 shadow-lg bottom-0 right-0 m-5 max-w-lg"
  >
    <div class="flex flex-row items-center">
      <h3 class="mr-5">Hetki aikaa evästeille?</h3>
      <Icon type="cookie" />
    </div>
    <p class="py-3 text-base">
      Tällä sivustolla käytetään evästeitä. Hyväksy evästeet, jotta sivuston käyttö olisi sujuvaa ja sen kehittäminen helpompaa.
      Evästeitä ei käytetä kohdennettuun mainontaan eikä ne sisällä henkilötietoja.
      <a class="link" href="/cookies">Lue lisää</a>
    </p>
    {#if showSettings}
      <div class="form-control mb-5">
        <label class="cursor-pointer label">
          <span class="label-text">Google Analytics for Firebase</span>
          <input type="checkbox" class="toggle" bind:checked={analyticsCheck} />
        </label>
      </div>
    {/if}
    <div class="flex flex-row justify-end">
      <Button
        style="mr-3"
        secondary={true}
        outlined={true}
        text={showSettings ? 'Tallenna ja sulje' : 'Asetukset'}
        onClick={showSettings ? saveAndExit : () => (showSettings = true)}
      />
      <Button secondary={true} outlined={false} text="Hyväksyn evästeet" onClick={acceptCookies} />
    </div>
  </div>
{/if}