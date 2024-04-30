import { error } from '@sveltejs/kit';
import enemies from '$lib/json/enemies.json';

export function load({ params }) {
	const enemy = enemies[params.id];

	if (!enemy) throw error(404);

	return {
		enemy
	};
}
