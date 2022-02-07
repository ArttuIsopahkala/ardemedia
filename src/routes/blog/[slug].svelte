<script context="module">
  export async function load({page, fetch}) {
    const response = await fetch(`https://dev.to/api/articles/${page.params.slug}`)
    const post = await response.json();
    return {
      props: {
        post
      }
    }
  }
</script>
<script >
  export let post
</script>

<svelte:head>
  <title>{post.title}</title>
  <!-- Poista kun otetaan käyttöön -->
  <meta name="robots" content="none">
</svelte:head>

<article>
  <h5>{post.title}</h5>
  {@html post.body_html}
</article>