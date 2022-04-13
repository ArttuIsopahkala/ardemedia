<script>
  import Blog from '$lib/blog/Blog.svelte';
  import Category from '$lib/blog/Category.svelte';
  import LikeButton from '$lib/blog/LikeButton.svelte';
  import Container from '$lib/common/Container.svelte';
  import Divider from '$lib/common/Divider.svelte';
  import LazyImage from '$lib/common/LazyImage.svelte';
  import ROUTES from '$lib/static/routes';

  export let title;
  export let categories;
  export let created;
  export let updated;
  export let thumbnail;
  export let description;
</script>

<svelte:head>
  <title>{title} | Arde Media</title>
  <meta name="description" content={description} />
</svelte:head>

<Blog>
  <Container style="max-w-2xl">
    <div class="bg-base-100 p-5 bg-none shadow-md text-textDark">
      <LazyImage
        style="object-contain max-h-[400px] w-full"
        src={thumbnail ? '/thumbnails/' + thumbnail : '/laptop.jpg'}
        alt="blogipostauksen kansikuva"
      />
      <h1 class="py-5 normal-case text-3xl md:text-4xl">{title}</h1>
      <h4 class="mb-1">
        Julkaistu: <span class="font-normal">{new Date(created).toLocaleDateString('fi-FI')}</span>
      </h4>
      {#if updated}
        <h4 class="mb-1">
          Päivitetty: <span class="font-normal"
            >{new Date(updated).toLocaleDateString('fi-FI')}</span
          >
        </h4>
      {/if}
      <Divider />
      <div class="blog-content">
        <slot />
      </div>
      <!-- Ending section -->
      <div class="flex flex-wrap mt-5">
        {#each categories as category}
          <Category {category} />
        {/each}
      </div>
      <div class="block xl:hidden">
        <LikeButton />
      </div>
      <h3 class="text-primary"><Divider>Kirjoittaja</Divider></h3>
      <div class="flex flex-col items-center md:items-start md:flex-row">
        <LazyImage
          style="object-contain w-[200px] h-[200px] mb-5 md:mr-5"
          src="/miettii.png"
          alt="avatar"
        />
        <div>
          <p>
            Moro, mä oon Arttu Isopahkala! Olen Full Stack -ohjelmistokehittäjä ja Arde Median
            yrittäjä. Asun tällä hetkellä Tampereella ja tarjoan ohjelmisto-osaamistani muille
            yrityksille web- ja mobiilisovelluskehityksen parissa.
          </p>
          <div class="flex flex-col">
            <p class="mt-5">
              &#128587;<a href={ROUTES.about} class="ml-2 link">Lisätietoa minusta</a>
            </p>
            <p class="">
              &#128232;<a href={ROUTES.contact} class="ml-2 link">Lähetä minulle viesti</a>
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="flex justify-end mt-5 xl:hidden">
      <a href={ROUTES.blog} class="link text-textDark">Kaikki postaukset →</a>
    </div>
  </Container>
  <div class="sticky h-fit top-[50px] hidden xl:block">
    <LikeButton />
  </div>
</Blog>

<style>
  :global(.blog-content::first-letter) {
    float: left;
    font-weight: 700;
    font-size: 58px;
    line-height: 62px;
    padding-right: 6px;
  }
  :global(.blog-content code) {
    max-width: 150px; /* min width of code block */
    display: block;
  }
  :global(.blog-content pre) {
    margin-bottom: 20px !important;
  }
  :global(.blog-content .collapse) {
    margin-bottom: 20px;
  }
  :global(.blog-title) {
    text-transform: none;
    margin-bottom: 10px;
  }
  :global(.blog-content blockquote) {
    background: #f9f9f9;
    border-left: 10px solid #ccc;
    margin: 1.5em 10px;
    padding: 1em 10px 0.1em 10px;
    quotes: '\201C''\201D''\2018''\2019';
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 40px;
    margin-inline-end: 40px;
  }
  :global(.blog-content mark) {
    padding: 0.2em;
    background-color: #fcf8e3;
  }
  :global(.blog-content hr) {
    color: #f29700;
    margin-top: 40px;
    margin-bottom: 40px;
  }
  :global(.blog-content p) {
    margin-bottom: 20px;
  }
  :global(.blog-content img) {
    margin: 10px auto;
  }
  :global(.blog-content caption) {
    display: flex;
    justify-content: center;
    font-style: italic;
  }
  :global(.blog-content table, th, td) {
    border: 1px solid #dee2e6;
    padding: 10px;
  }
  :global(.list) {
    display: block;
    list-style-type: disc;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start: 40px;
  }
</style>
