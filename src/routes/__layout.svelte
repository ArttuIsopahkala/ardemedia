<script>
  import '../app.css';
  import Header from '$lib/header/Header.svelte';
  import Footer from '$lib/footer/Footer.svelte';
</script>

<div class="w-full bg-background">
  <Header />
  <main class="bg-success flex flex-col mt-[60px] px-5 xl:px-0">
    <slot />
  </main>
  <Footer />
</div>
