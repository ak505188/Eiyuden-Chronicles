<script>
  import Encounters from '$lib/json/encounter_table.json';

  const encounters = Object.entries(Encounters).map(([id, area]) => {
    const groups = area.groups.map(group => {
      const enemies = new Array(6).fill(null);
      group.enemies.forEach(enemy => {
        enemies[enemy.row * 3 + enemy.column] = enemy;
      });
      return { ...group, enemies };
    });
    return { ...area, id, groups };
  });
</script>

<h1>Encounter Table</h1>
{#each encounters as encounter_set }
  <h2>{encounter_set.name} {encounter_set.id}</h2>
  <ul class="groups">
    {#each encounter_set.groups as group}
      <li>
        <ul class="enemies">
          {#each group.enemies as enemy}
            <li>
              {#if enemy}
                <a href="/enemy/{enemy.id}">{enemy.name}</a>
              {:else}
                <span>---</span>
              {/if}
            </li>
          {/each}
        </ul>
      </li>
    {/each}
  </ul>
{/each}

<style>
  ul.groups {
    list-style: none;
    padding-left: 0;
  }

  ul.enemies {
    display: grid;
    max-width: 450px;
    grid-template-columns: repeat(3, 1fr);
    list-style-type: none;
    padding-left: 0;
  }

  ul.groups > li:not(:last-child) {
    margin: 1rem 0;
  }
</style>
