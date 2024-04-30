<script>
  import Bestiary from '$lib/json/bestiary';

  const dlcIds = {
    0: true,
    31: false,
    41: false,
    51: false
  }

  $: bestiary = Bestiary
    .filter(entry => entry.isBoss)
    .filter(entry => dlcIds[entry.dlcID]);
</script>

<h1>Bestiary</h1>
<h2>DLC Ids to Show</h2>
<label>
  0
  <input type="checkbox" bind:checked={dlcIds[0]}>
</label>
<label>
  31
  <input type="checkbox" bind:checked={dlcIds[31]}>
</label>
<label>
  41
  <input type="checkbox" bind:checked={dlcIds[41]}>
</label>
<label>
  51
  <input type="checkbox" bind:checked={dlcIds[51]}>
</label>
<ul>
  {#each bestiary as enemy}
    <li>
      <details>
        <summary>{enemy.name}</summary>
        <div>
        <h3>Weaknesses</h3>
        <p>{enemy.weakness}</p>
        <h3>Location</h3>
        <p>{enemy.area}</p>
        <h3>Description</h3>
        <p>{enemy.description}</p>
        <aside><a href="/enemy/{enemy.id}">More Info</a></aside>
        </div>
      </details>
    </li>
  {/each}
</ul>

<style>
  ul {
    list-style-type: none;
    padding-left: 0;
  }

  ul li h3, ul li p {
    margin: 0;
  }

  ul details div {
    padding: 1rem;
  }
</style>
