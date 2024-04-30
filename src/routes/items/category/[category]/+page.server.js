import { error } from '@sveltejs/kit';
import items from '$lib/json/items.json';
import { ITEM_CATEGORY_BY_ID } from '$lib/enums';

export function load({ params }) {
  const category_id = params.category;
  const category_name = ITEM_CATEGORY_BY_ID[category_id];

	if (!category_name) throw error(404);

	const category_items = Object.values(items).filter(item => item.itemCategory == category_id);

	return {
    items: category_items,
    name: category_name
	};
}
