<script lang="ts">
  import { breakpoints } from '$lib/static/breakpoints';
  import clsx from 'clsx';
  import { fade, fly, slide } from 'svelte/transition';
  import { onMount } from 'svelte';

  let pageLoaded = false;
  onMount(() => (pageLoaded = true));

  let windowWith: number;

  type ToggleType = 'left' | 'right' | null;
  let toggle: ToggleType = null;
  /*   const setToggle = (newToggle: ToggleType) => {
    toggle = newToggle;
    if (windowWith > breakpoints.lg) {
      if (newToggle === 'left') {
        image = 'raivo.png';
        return;
      }
      if (newToggle === 'right') {
        image = 'suunnittelee2.png';
        return;
      }
    }
    image = 'miettii.png';
  }; */

  let image: string = 'miettii.png';

  function typewriter(node, { speed = 5, delay = 0 }) {
    const valid = node.childNodes.length === 1 && node.childNodes[0].nodeType === Node.TEXT_NODE;

    if (!valid) {
      throw new Error(`This transition only works on elements with a single text node child`);
    }

    const text = node.textContent;
    const duration = text.length / (speed * 0.01);

    return {
      delay,
      duration,
      tick: (t) => {
        const i = Math.trunc(text.length * t);
        node.textContent = text.slice(0, i);
      }
    };
  }

  const handleMousemove = (event) => {
    if (event === null) {
      toggle = null;
      image = 'miettii.png';
      return;
    }

    let x = event.clientX;
    if (x < windowWith / 2) {
      toggle = 'left';
    }
    if (x >= windowWith / 2) {
      toggle = 'right';
    }
    if (windowWith > breakpoints.lg) {
      if (toggle === 'left') {
        image = 'raivo.png';
        return;
      }
      if (toggle === 'right') {
        image = 'suunnittelee2.png';
        return;
      }
    }
    image = 'miettii.png';
  };
</script>

<svelte:window bind:innerWidth={windowWith} />

<div id="hero" class="flex flex-col justify-center items-center pb-[50px]">
  <h1 class="mb-10 text-center text-3xl md:text-4xl xl:text-5xl">
    Vuokraa <span class="mark">Full Stack</span> -kehittäjä käyttöösi!
  </h1>
  <div
    on:mousemove={handleMousemove}
    on:mouseleave={() => handleMousemove(null)}
    class={clsx('flex justify-center items-center flex-wrap min-h-[500px] lg:py-10')}
  >
    {#if pageLoaded}
      <!-- PÄÄKUVA -->
      <div
        in:fade={{ duration: 300 }}
        class={clsx(
          'flex flex-col justify-center items-center text-center my-3 w-10/12',
          'lg:px-7 lg:w-1/3 lg:order-2'
        )}
      >
        <img class={clsx('max-h-[500px]')} src={image} alt="muotokuva" />
        <h2 class="text-primary mt-4">Arttu Isopahkala</h2>
        <p class="">Freelance Full Stack Developer</p>
      </div>

      <!-- VASEN PUOLI -->
      <div
        in:fly={{ x: -200, duration: 500, delay: 300 }}
        on:click={() =>
          document
            .getElementById('development')
            .scrollIntoView({ block: 'start', behavior: 'smooth' })}
        class={clsx(
          'flex flex-col my-3 transition-opacity duration-300 cursor-pointer',
          'lg:min-h-[350px] lg:w-1/3 lg:order-1',
          toggle === 'right' ? 'lg:opacity-30' : ''
        )}
      >
        <h2 class="portfolio-title">Ohjelmistokehittäjä</h2>
        <p>
          Kädet savessa koodaaminen on ydinosaamistani. Työpöydälläni rakentuvat sekä kuvankauniit
          käyttöliittymät että älykkäät ja tehokkaat taustapalvelut.
        </p>
        {#if toggle === 'left' && windowWith > breakpoints.lg}
          <div
            class="mockup-code mt-5 transition-opacity duration-300"
            in:slide={{ duration: 300 }}
            out:slide={{ duration: 300 }}
          >
            <pre data-prefix=">" class="flex">
        <code in:typewriter={{ delay: 300 }}>console.log("Hello world!");</code>
      </pre>
            <pre data-prefix=">" class="flex text-success">
        <code in:fade={{ duration: 0, delay: 1300 }}>Hello world!</code>
      </pre>
          </div>
        {/if}
      </div>
      <!-- OIKEA PUOLI -->
      <div
        in:fly={{ x: 200, duration: 500, delay: 300 }}
        on:click={() =>
          document.getElementById('design').scrollIntoView({ block: 'start', behavior: 'smooth' })}
        class={clsx(
          'flex flex-col justify-start my-3 transition-opacity duration-300 cursor-pointer',
          'lg:min-h-[350px] lg:w-1/3 lg:order-3',
          toggle === 'left' ? 'lg:opacity-30' : ''
        )}
      >
        <h2 class="portfolio-title">Ohjelmistojen suunnittelija</h2>
        <p>
          Muunnan kehitystarpeen tai idean tekniseen muotoon. Suunnittelen ohjelmistoille
          nykyaikaiset teknologiaratkaisut sekä taiteilen käyttäjäystävälliset UI-suunnitelmat.
        </p>
        {#if toggle === 'right' && windowWith > breakpoints.lg}
          <div
            class="mockup-code mt-5 transition-opacity duration-300"
            in:slide={{ duration: 300 }}
            out:slide={{ duration: 300 }}
          >
            <pre data-prefix="1" class="flex">
              <code in:typewriter={{ delay: 300 }}>&#123; display: flex; &#125;</code>
            </pre>
            <pre class="text-warning flex" data-prefix=">">
              <code in:typewriter={{ delay: 1000 }}>&#128293; &#128293; &#128293;</code>
            </pre>
          </div>
        {/if}
      </div>
    {/if}
  </div>
</div>
