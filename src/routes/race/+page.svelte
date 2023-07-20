<script lang="ts">
  import { getRaces } from "../../util/store";

//   const races = getRaces();


</script>

<div>
  <h1 class="text-xl">Racecs</h1>

  {#each races as race}
    <li>{race.name}</li>
  {/each}
  <a href="/race/new">Create new race</a>
</div>
