<script lang="ts">
  import Icon from '$lib/common/Icon.svelte';
  import LazyImage from '$lib/common/LazyImage.svelte';

  export let title: string = '';
  export let description: string = '';
  export let year: string = '';
  export let url: string = '';
  export let github: string = '';
  export let logo: string = '';
  export let features: string[] = undefined;
</script>

<div class="flex flex-row flex-wrap">
  <div class="flex flex-col w-full lg:w-1/2 py-5 justify-between">
    <div>
      <div class="flex flex-row items-center">
        {#if logo}
          <LazyImage src={logo} alt="sovelluksen logo" style="max-h-[40px] max-w-[50px] mr-5" />
        {/if}
        <h2 class="text-primary mark">{title}</h2>
      </div>
      <h4 class="pt-3">{year}</h4>
      <p class="py-5">
        {@html description}
      </p>
      {#if features}
        <div class="pb-5">
          <h3 class="pb-2">Ominaisuuksia:</h3>
          {#each features as feature}
            <p>&bull; {@html feature}</p>
          {/each}
        </div>
      {/if}
    </div>
    <div>
      <h3>Teknologiat:</h3>
      <div class="flex flex-row flex-wrap items-start py-5">
        <slot />
      </div>
      <div class="flex flex-row">
        {#if url}
          <a rel="noreferrer nofollow noopener" href={url} target="_blank">
            <button class="btn btn-sm mr-3">
              <Icon type="google-play" color="text-textLight" style="w-[15px] h-[15px] mr-2" />
              Sovellukseen →
            </button>
          </a>
        {/if}
        {#if github}
          <a rel="noreferrer nofollow noopener" href={github} target="_blank">
            <button class="btn btn-sm">
              <Icon type="github" color="text-textLight" style="w-[18px] h-[18px] mr-2" />
              Koodiin →
            </button>
          </a>
        {/if}
      </div>
    </div>
  </div>
  <div class="w-full lg:w-1/2 flex flex-wrap flex-row justify-center items-center">
    <slot name="carousel" />
  </div>
</div>
