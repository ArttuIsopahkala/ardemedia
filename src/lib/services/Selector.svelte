<script lang="ts">
  import { page } from '$app/stores';
  import Button from '$lib/Button.svelte';
import Divider from '$lib/Divider.svelte';
  import clsx from 'clsx';
  import type { ServiceType } from 'src/routes/services.svelte';
  import { text } from 'svelte/internal';

  console.log($page.url.href);
  console.log($page.url.hash);
  console.log($page.url.host);
  console.log($page.url.hostname);
  console.log($page.url.origin);
  console.log($page.url.search);
  console.log($page.url.username);

  export let selectedService: ServiceType = '#development';
</script>

<div class="flex gap-4 pl-5 pt-7">
  <Button
    text="Ohjelmistokehitys"
    outlined={selectedService !== '#development'}
    secondary={true}
    onClick={() => (selectedService = '#development')}
  />
  <Button
    text="Ohjelmistojen suunnittelu"
    outlined={selectedService !== '#design'}
    secondary={true}
    onClick={() => (selectedService = '#design')}
  />
  <!-- <Button
    text="Videoeditointi"
    outlined={selectedService !== '#video'}
    onClick={() => (selectedService = '#video')}
  /> -->
</div>
<div class="divider before:bg-primary after:bg-primary opacity-50"/>