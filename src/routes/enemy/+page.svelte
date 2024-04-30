<script>
  import enemies from '$lib/json/enemies';
</script>

<h1>Enemies List</h1>
<ul>
{#each Object.entries(enemies) as [id, enemy]}
  <li>
    <a href="/enemy/{id}">{enemy.name} - {enemy.id}</a>
  </li>
{/each}
</ul>
