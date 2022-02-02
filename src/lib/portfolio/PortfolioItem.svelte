<script lang="ts">
  export let title: string = '';
  export let description: string = '';
  export let year: string = '';
  export let url: string = '';
  export let logo: string = '';
</script>

<div class="flex flex-row flex-wrap">
  <div class="flex flex-col w-full md:w-1/2 py-5 justify-between">
    <div>
      <div class="flex flex-row items-center">
        {#if logo}
          <img class="max-h-[40px] mr-5" src={logo} alt="logo" />
        {/if}
        <h3 class="text-primary mark">{title}</h3>
      </div>
      <h5 class="pt-2">{year}</h5>
      <p class="py-5">
        {@html description}
      </p>
    </div>
    <div class="">
      <h5 class="">Teknologiat</h5>
      <div class="flex flex-row items-start py-5">
        <slot />
      </div>
      {#if url}
        <a class="link link-primary font-bold" href={url} target="_blank">Linkki sovellukseen →</a>
      {/if}
    </div>
  </div>
  <div class="w-full md:w-1/2 flex flex-wrap flex-row justify-center items-center">
    <slot name="carousel"/>
    

    <!-- <div class="mockup-window bg-base-300 sm:w-2/3 p-5">
      <div class="flex justify-center px-4 py-16 bg-base-200">
        <img class="max-h-[300px]" src={imgSrc2} alt="preview-desktop" />
      </div>
    </div> -->
  </div>
</div>
