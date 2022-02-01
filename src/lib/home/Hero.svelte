<script lang="ts">
  import { breakpoints } from '$lib/static/breakpoints';
  import clsx from 'clsx';
  import * as animateScroll from 'svelte-scrollto';
  import { fade, fly, slide } from 'svelte/transition';

  let toggleCoder: boolean = false;
  let toggleDesigner: boolean = false;

  let windowWith: number;

  let images: string[] = ['raivo.png', 'miettii.png', 'suunnittelee2.png'];

  //type position = 'left' | 'middle' | 'right'

  let index = 1;
  const toggleIndex = (newIndex: number) => {
    index = newIndex;
    if (newIndex === 0) {
      // LEFT
    } else if (newIndex === 2) {
      // RIGHT
    } else {
      // MIDDLE
    }
    //newIndex = (newIndex + 1) % images.length;
    console.log('index', newIndex);
  };

  /* EI TOIMI */
  const previous = () => {
    index = (index - 1) % images.length;
  };

  let image: string = 'miettii.png';
  const handleImage = () => {
    if (windowWith < breakpoints.lg) {
      image = 'miettii.png';
      return;
    }
    if (toggleCoder) {
      image = 'raivo.png';
    } else if (toggleDesigner) {
      image = 'suunnittelee2.png';
    } else {
      image = 'miettii.png';
    }
  };

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
</script>

<svelte:window bind:innerWidth={windowWith} />

<div id="hero" class="flex flex-col justify-center items-center pb-[60px] p-5">
  <h1 class="mb-10 text-center">
    Vuokraa<br /><span class="mark gradient">Full Stack</span> -koodari projektiisi!
  </h1>
  <div class={clsx('flex justify-center items-center flex-wrap')}>
    <!-- PÄÄKUVA -->
    <div
      in:fade={{ duration: 300 }}
      class={clsx(
        'flex flex-col justify-center items-center text-center my-3 w-10/12',
        'lg:px-7 lg:w-1/3 lg:order-2'
      )}
    >
      {#each [images[index]] as src (index)}
        <img class="stack max-h-[500px]" {src} alt="muotokuva" />
      {/each}
      <h3 class="text-primary mt-4">ARTTU ISOPAHKALA</h3>
      <p>Ohjelmistokehittäjä | Web-sovellukset | Android</p>
    </div>
    <!-- VASEN PUOLI -->
    <div
      in:fly={{ x: -200, duration: 500, delay: 300 }}
      on:mouseenter={() => ((toggleCoder = true), handleImage(), toggleIndex(0))}
      on:mouseleave={() => ((toggleCoder = false), handleImage(), toggleIndex(1))}
      on:click={() => animateScroll.scrollTo({ element: '#service-web', offset: -60 })}
      class={clsx(
        'flex flex-col my-3 transition-opacity duration-300 cursor-pointer',
        'lg:min-h-[350px] lg:w-1/3 lg:order-1',
        toggleDesigner ? 'lg:opacity-30' : ''
      )}
    >
      <h3>Web -ja mobiilikehitys</h3>
      <p>
        Kädet savessa koodaaminen on ydinosaamistani. Työpöydälläni rakentuvat sekä kuvankauniit
        käyttöliittymät, että älykkäät ja nykyaikaiset taustapalvelut.
      </p>
      {#if toggleCoder && windowWith > breakpoints.lg}
        <div
          class="mockup-code mt-5 transition-opacity duration-300"
          in:slide={{ duration: 300 }}
          out:slide={{ duration: 300 }}
        >
          <pre data-prefix=">">
            <code in:typewriter={{ delay: 300 }}>console.log("Hello world!");</code>
          </pre>
          <pre data-prefix=">" class="text-success">
            <code in:fade={{ duration: 0, delay: 1300 }}>Hello world!</code>
          </pre>
        </div>
      {/if}
    </div>
    <!-- OIKEA PUOLI -->
    <div
      in:fly={{ x: 200, duration: 500, delay: 300 }}
      on:mouseenter={() => ((toggleDesigner = true), handleImage())}
      on:mouseleave={() => ((toggleDesigner = false), handleImage())}
      on:click={() => animateScroll.scrollTo({ element: '#service-design', offset: -60 })}
      class={clsx(
        'flex flex-col justify-start my-3 transition-opacity duration-300 cursor-pointer',
        'lg:min-h-[350px] lg:w-1/3 lg:order-3',
        toggleCoder ? 'lg:opacity-30' : ''
      )}
    >
      <h3>Ohjelmistojen suunnittelu</h3>
      <p>
        Muunnan liiketoimintasi kehitystarpeen tai idean tekniseen muotoon, suunnittelen
        ominaisuuksille tai ohjelmistolle nykyaikaisen teknisen ratkaisun sekä taiteilen
        käyttäjäystävälliset UI/UX-suunnitelmat.
      </p>
      {#if toggleDesigner && windowWith > breakpoints.lg}
        <div
          class="mockup-code mt-5 transition-opacity duration-300"
          in:slide={{ duration: 300 }}
          out:slide={{ duration: 300 }}
        >
          <pre data-prefix="1">
            <code in:typewriter={{ delay: 300 }}>&#123;</code>
          </pre>
          <pre data-prefix="2">
            <code in:typewriter={{ delay: 300 }}>display: flex;</code>
          </pre>
          <pre data-prefix="3">
            <code in:typewriter={{ delay: 300 }}>&#125;</code>
          </pre>
          <pre class="text-warning" data-prefix=">">
            <code in:typewriter={{ delay: 1000 }}>&#128293; &#128293; &#128293;</code>
          </pre>
        </div>
      {/if}
    </div>
  </div>
</div>
