<script>
  import '../app.css';
  import Header from '$lib/header/Header.svelte';
  import Footer from '$lib/footer/Footer.svelte';
</script>

<div class="w-full bg-background relative min-h-full h-auto">
  <Header />
  <main class="flex flex-col pt-[60px] pb-[400px]"> <!-- padding for footer -->
    <slot />
  </main>
  <Footer />
</div>
