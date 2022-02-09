<script lang="ts">
  import Footer from '$lib/footer/Footer.svelte';
  import Header from '$lib/header/Header.svelte';
  import { db } from '$lib/static/firebase';
  import { collection, getDocs } from 'firebase/firestore';
  import { onMount } from 'svelte';
  import '../app.css';
  import {
    availableDate,
    designPriceHour,
    designPricePerFeature,
    designPriceWithUI,
    devPrice,
    devPriceHigh
  } from './../store.js';

  onMount(() => {
    if (!$devPrice) {
      getDocs(collection(db, 'options'))
        .then((data) => {
          // Set service data to store
          const servicesData = data.docs.find((doc) => doc.id === 'services')?.data();
          devPrice.set(servicesData['devPrice']);
          devPriceHigh.set(servicesData['devPriceHigh']);
          designPriceHour.set(servicesData['designPriceHour']);
          designPricePerFeature.set(servicesData['designPricePerFeature']);
          designPriceWithUI.set(servicesData['designPriceWithUI']);

          // Set contact data to store
          const contactData = data.docs.find((doc) => doc.id === 'contact')?.data();
          availableDate.set(contactData['availableDate']);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  });
</script>

<!-- <GdprBanner/> -->
<div class="w-full h-auto">
  <Header />
  <!-- footer 330px + padding bottom 70px = 400px -->
  <main
    class="flex flex-col pt-[60px] bg-base-100 bg-[url('/bg-pattern.svg')] min-h-[calc(100vh-330px)]"
  >
    <slot />
  </main>
  <Footer />
</div>
