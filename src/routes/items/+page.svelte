<script>
  import items from '$lib/json/items';
</script>

<h1>Items List</h1>
<p>You can sort by category <a href="/items/category">here</a>.</p>
<ul>
  {#each Object.values(items) as item}
    <li>
      <span class="id">{item.id}</span> - <span class="name">{item.name}</span>: {item.detail}
    </li>
  {/each}
</ul>

<style>
  ul {
    list-style-type: none;
    padding-left: 0;
  }

  span.name {
    font-weight: 600;
  }
</style>
