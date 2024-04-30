<script>
  import { ITEM_CATEGORY_BY_ID } from '$lib/enums';

  const categories = Object.entries(ITEM_CATEGORY_BY_ID)
    .map(([id, name]) => ({ name, id }))
    .sort((a, b) => parseInt(a.id) > parseInt(b.id));
</script>

<h1>Item Categories</h1>
<ul>
  {#each categories as category}
    <li>
      <a href="/items/category/{category.id}">{category.name}</a>
    </li>
  {/each}
</ul>
