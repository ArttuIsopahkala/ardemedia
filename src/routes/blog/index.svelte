<script context="module">
  export async function load({fetch}) {
    const response = await fetch('https://dev.to/api/articles?username=mdbootstrap')
    const posts = await response.json();
    return {
      props: {
        posts
      }
    }
  }
</script>
<script>
  export let posts
</script>

<svelte:head>
  <title>Blogi | Arde Media</title>
  <!-- Poista kun otetaan käyttöön -->
  <meta name="robots" content="none">
</svelte:head>

<section>
  <h1>Blog</h1>
  <ul>
    {#each posts as post}
      <li>
        <a href={`/blog/${post.id}`}>{post.title}</a>
      </li>
    {/each}
  </ul>
</section>