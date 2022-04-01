<script lang="ts">
  import Button from '$lib/common/Button.svelte';
  import clsx from 'clsx';
  import LazyImage from './LazyImage.svelte';

  export let images: string[];
  export let type: 'phone' | 'web';
  export let width: number;
  export let height: number;

  const webMaxWidth = 500;
  const phoneMaxWidth = 250;
  const defaultMaxWidth = type === 'phone' ? phoneMaxWidth : webMaxWidth;
  const maxWidth = width < defaultMaxWidth ? width : defaultMaxWidth;
  const aspectRatio: string = width + '/' + height;

  let index = 0;

  const next = () => {
    index = (index + 1) % images.length;
  };

  const previous = () => {
    if (index === 0) {
      index = images.length - 1;
    } else {
      index = (index - 1) % images.length;
    }
  };
</script>

{#if images.length > 0}
  <div
    class="flex flex-col justify-center items-center w-full"
  >
    <div class="flex flex-row justify-center items-center w-full">
      <Button text="<" hideArrow={true} onClick={previous} style="mr-2" />
      <!-- DESKTOP IMAGES -->
      {#if type === 'web'}
        <div style="max-width: {maxWidth}px;" class="mockup-window bg-base-300 w-full">
          <div
            style="max-width: {width}px; max-height: {height}px; aspect-ratio: {aspectRatio};"
            class="bg-white border-2 border-base-300"
          >
            {#each [images[index]] as src (index)}
              <LazyImage {src} alt="työpöytä esikatselu" />
            {/each}
          </div>
        </div>
      {/if}
      <!-- PHONE IMAGES -->
      {#if type === 'phone'}
        <div
          style="max-width: {maxWidth}px;"
          class="border-textGray border-2 rounded-2xl bg-black p-2 w-full"
        >
          <div
            style="max-width: {width}px; max-height: {height}px; aspect-ratio: {aspectRatio};"
            class="overflow-hidden rounded-sm w-full"
          >
            {#each [images[index]] as src (index)}
              <LazyImage {src} alt="mobiili esikatselu" />
            {/each}
          </div>
        </div>
      {/if}
      <Button text=">" hideArrow={true} onClick={next} style="ml-2" />
    </div>
    <!-- DOTS -->
    <div class="flex flex-row m-3">
      {#each images as image, i}
        <div
          class="h-8 w-8 flex justify-center items-center cursor-pointer"
          on:click={() => (index = i)}
        >
          <div
            class={clsx(
              'rounded-full',
              images[index] === image ? 'h-4 w-4 bg-textDark' : 'h-2 w-2 bg-textGray',
              'transition-all'
            )}
          />
        </div>
      {/each}
    </div>
  </div>
{/if}
