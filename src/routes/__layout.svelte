<script>
  import '../app.css';
  import Header from '$lib/header/Header.svelte';
  import Footer from '$lib/footer/Footer.svelte';
</script>

<div class="w-full bg-background">
  <Header />
  <main class="flex flex-col mt-[60px]">
    <slot />
  </main>
  <Footer />
</div>
