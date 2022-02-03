<script lang="ts">
  import '../app.css';
  import Header from '$lib/header/Header.svelte';
  import Footer from '$lib/footer/Footer.svelte';
  import { db } from '$lib/static/firebase';
  import { getDocs, collection } from 'firebase/firestore';
  import { onMount } from 'svelte';
  import {
    availableDate,
    devPrice,
    devPriceHigh,
    designPriceHour,
    designPricePerFeature,
    designPriceWithUI
  } from './../store.js';

  onMount(() => {
    // Ota käyttöön ennen julkaisua
    /* getDocs(collection(db, 'options'))
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
      }); */
  });
</script>

<div class="w-full bg-background relative min-h-full h-auto">
  <Header />
  <main class="flex flex-col pt-[60px] pb-[400px]">
    <!-- padding for footer -->
    <slot />
  </main>
  <Footer />
</div>
