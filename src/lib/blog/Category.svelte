<script lang="ts">
  import ROUTES from '$lib/static/routes';

  export let category: string;
</script>

<a
  href={ROUTES.categories + '/' + category}
  class="px-2 py-1 mr-2 mb-2 bg-neutral text-xs text-neutral-content font-bold uppercase hover:text-primary"
  >{category}</a
>
