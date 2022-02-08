<script lang="ts" context="module">
  export interface ServiceTech {
    title?: string;
    techs: string;
  }
</script>

<script lang="ts">
  export let title: string = '';
  export let techs: ServiceTech[] = [];
</script>

{#if title}
  <h4 class="mb-2 text-primary">{title}</h4>
{/if}
{#each techs as tech}
  {#if tech.title}
    <p class="text-textDark font-semibold text-sm">{tech.title}</p>
  {/if}
  <span class="mb-3">{tech.techs}</span>
{/each}
