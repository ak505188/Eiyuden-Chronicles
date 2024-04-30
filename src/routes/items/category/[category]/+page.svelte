<script>
  export let data;

  const items = data.items;
  const name = data.name;
</script>

<h1>Items: {name}, {items.length} Total</h1>
<ul>
  {#each items as item }
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
