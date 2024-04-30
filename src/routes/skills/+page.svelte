<script>
  import Skills from '$lib/json/skills';
  import { COST_TYPE_BY_ID, MAGIC_ATTRIBUTE_BY_ID, WEAPON_ATTRIBUTE_BY_ID } from '$lib/enums';

  const skills = Object.values(Skills).map(skill => {
    let detail = skill.detail;
    const attribute = skill.weaponAttribute > -1 ?
      WEAPON_ATTRIBUTE_BY_ID[skill.weaponAttribute] :
      MAGIC_ATTRIBUTE_BY_ID[skill.magicAttribute];

    if (!attribute) console.log(skill);
    detail = detail.replace('<cost>', skill.cost);
    detail = detail.replace('<cost_type>', COST_TYPE_BY_ID[skill.costType]);
    detail = detail.replace('<attribute>', attribute);

    return { ...skill, detail };
  })
</script>

<h1>Skills List</h1>
<ul>
  {#each skills as skill}
    <li>
      <span class="id">{skill.id}</span> - <span class="name">{skill.name}</span>: {skill.detail}
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
