<script lang="ts">
  import { page } from '$app/stores';
  import clsx from 'clsx';

  console.log($page.url.href)
  console.log($page.url.hash)
  console.log($page.url.host)
  console.log($page.url.hostname)
  console.log($page.url.origin)
  console.log($page.url.search)
  console.log($page.url.username)
</script>

<div class="tabs">
  <a
    class={clsx('tab tab-lifted', $page.url.hash == 'develop' ? 'tab-active' : '')}
    href="/services/develop"
  >
    Ohjelmistokehitys
  </a>
  <a
    class={clsx('tab tab-lifted', $page.url.hash == 'design' ? 'tab-active' : '')}
    href="/services/design"
  >
    Ohjelmistojen suunnittelu
  </a>
  <!-- <a class="tab tab-lifted" href="/services#video">Videoeditointi</a> -->
</div>
