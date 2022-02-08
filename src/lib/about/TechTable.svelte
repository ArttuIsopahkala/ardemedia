<script lang="ts">
  let items = [
    { label: 'Alustat', value: 'NodeJS, JVM, Android' },
    { label: 'Ohjelmointikielet', value: 'JavaScript / TypeScript, Java' },
    {
      label: 'Viitekehykset & Kirjastot',
      value: 'React, GWT, Svelte, Java EE, Material-UI, TailwindCSS'
    },
    { label: 'Testaus', value: 'Jest, JUnit, AVA, PHPUnit' },
    { label: 'Tietokannat', value: 'MySQL, DynamoDB' },
    { label: 'Pilvipalvelut', value: 'AWS (Amazon Web Services), Firebase' },
    {
      label: 'Automaatio ja infra',
      value: 'CircleCI, GitHub Actions, Jboss EAP, Serverless'
    },
    {
      label: 'Jonkin verran pyöritellyt',
      value: 'PHP, Jenkins, Terraform, Python, Flutter, Dart, ML (SkLearn)'
    }
  ];
</script>

<div class="overflow-x-auto shadow-lg">
  <table class="table w-full table-zebra">
    <tbody>
      {#each items as item}
        <tr>
          <th class="whitespace-pre-wrap">{item.label}</th>
          <td class="whitespace-pre-wrap">{@html item.value}</td>
        </tr>
      {/each}
    </tbody>
  </table>
</div>
