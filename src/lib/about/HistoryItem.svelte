<script lang="ts">
  export let role: string;
  export let year: string;
  export let company: string;
</script>

<div class="flex flex-col">
  <h4 class="mt-2">{role}</h4>
  <p>{year}</p>
  <p>{company}</p>
</div>
