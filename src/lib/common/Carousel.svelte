<script lang="ts">
  import Button from '$lib/common/Button.svelte';
  import Phone from '$lib/common/Phone.svelte';
  import clsx from 'clsx';
  import { blur, fade, fly, scale, slide } from 'svelte/transition';

  export let phoneImages: string[] = [];
  export let showPhone: boolean = true;
  export let height: number = 450;

  let index = 0;

  const next = () => {
    index = (index + 1) % phoneImages.length;
  };

  const previous = () => {
    if (index === 0) {
      index = phoneImages.length - 1;
    } else {
      index = (index - 1) % phoneImages.length;
    }
  };
</script>

{#if phoneImages.length > 0}
  <div class="flex flex-col justify-center items-center">
    <div class={`flex flex-row justify-center items-center gap-2`}>
      <Button text="<" onClick={previous} />
      {#if showPhone}
        <Phone>
          {#each [phoneImages[index]] as src (index)}
            <img
              class={`h-[450px] w-[250px]`}
              in:fade={{ duration: 100 }}
              {src}
              alt="preview"
            />
          {/each}
        </Phone>
      {:else}
        <div class="p-2 m-auto h-[{height}px]">
          <div class="overflow-hidden w-full h-full">
            {#each [phoneImages[index]] as src (index)}
              <img in:slide={{ duration: 100 }} {src} alt="preview" />
            {/each}
          </div>
        </div>
      {/if}

      <Button text=">" onClick={next} />
    </div>
    <div class="flex flex-row gap-3 m-3">
      {#each phoneImages as image, i}
        <div
          class="h-4 w-4 flex justify-center items-center cursor-pointer"
          on:click={() => (index = i)}
        >
          <div
            class={clsx(
              'rounded-full',
              phoneImages[index] === image ? 'h-4 w-4 bg-textDark' : 'h-2 w-2 bg-textGray',
              'transition-all'
            )}
          />
        </div>
      {/each}
    </div>
  </div>
{/if}
