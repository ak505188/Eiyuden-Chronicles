<script>
  export let data;

  const enemy = data.enemy;
  const stats = enemy.stats.normal;

</script>

<h1>{enemy.name}</h1>
<div>
  <ul class="stats">
    <li>
      <h2>HP</h2>
      <div>{stats.hp}</div>
    </li>
    <li>
      <h2>MP</h2>
      <div>{stats.mp}</div>
    </li>
    <li>
      <h2>PWR</h2>
      <div>{stats.physicalAttack}</div>
    </li>
    <li>
      <h2>MGC</h2>
      <div>{stats.magicalAttack}</div>
    </li>
    <li>
      <h2>DEX</h2>
      <div>{stats.technique}</div>
    </li>
    <li>
      <h2>SPD</h2>
      <div>{stats.speed}</div>
    </li>
    <li>
      <h2>PD</h2>
      <div>{stats.physicalDefense}</div>
    </li>
    <li>
      <h2>MD</h2>
      <div>{stats.magicalDefense}</div>
    </li>
    <li>
      <h2>LUK</h2>
      <div>{stats.luck}</div>
    </li>
    <li>
      <h2>Armor</h2>
      <div>{stats.armor}</div>
    </li>
  </ul>
</div>
<details>
  <summary>Enemy JSON</summary>
  <pre>{JSON.stringify(enemy, null, 2)}</pre>
</details>

<style>
  ul.stats {
    display: grid;
    grid-template-columns: repeat(10, 1fr);
    list-style-type: none;
    padding-left: 0;
    margin: 0;
    border: 2px solid black;
  }

  ul.stats li {
    box-shadow: 0 0 0 1px black;
    padding: .5rem;
  }

  ul.stats li h2 {
    font-size: 1rem;
    margin: 0;
  }

  @media (max-width: 640px) {
    ul.stats {
      grid-template-columns: repeat(5, 1fr);
    }
  }
</style>
