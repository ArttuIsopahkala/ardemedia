<script lang="ts" context="module">
  export interface ImageCombo {
    web?: string;
    phone?: string;
  }
</script>

<script lang="ts">
  import Button from '$lib/common/Button.svelte';
  import Phone from '$lib/common/Phone.svelte';
  import clsx from 'clsx';
  import LazyImage from './LazyImage.svelte';

  export let images: ImageCombo[] = [];

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
  <div class="flex flex-col justify-center items-center">
    <div class="flex flex-row justify-center items-center">
      <Button text="<" hideArrow={true} onClick={previous} style="mr-2"/>
      {#each [images[index]] as combo (index)}
        <!-- DESKTOP IMAGES -->
        {#if combo.web}
          <div class="mockup-window bg-base-300">
            <div class="flex justify-center bg-white border-2 border-base-300">
              <div class="min-w-[300px] min-h-[210px]">
                <LazyImage src={combo.web} alt="työpöytä esikatselu" style={`object-cover`} />
              </div>
            </div>
          </div>
        {/if}
        <!-- PHONE IMAGES -->
        {#if combo.phone}
          <Phone>
            <LazyImage
              src={combo.phone}
              alt="mobiili esikatselu"
              style={`h-[450px] min-h-[450px] w-[250px] min-w-[250px]`}
            />
          </Phone>
        {/if}
      {/each}
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
