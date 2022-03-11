<script lang="ts">
  import Icon, { IconType } from '$lib/common/Icon.svelte';

  export let url: string;
  export let icon: IconType = '';
  export let label: string;
</script>

<a rel="noreferrer nofollow noopener" href={url} target="_blank">
  <div class="flex flex-col items-center">
    <Icon type={icon} color="text-base-300" style="hover:text-textLight mb-1" />
    <span class="text-xs">{label}</span>
  </div>
</a>
