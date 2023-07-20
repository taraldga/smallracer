<script lang="ts">
  export let time = 0;
  export let displayMilliseconds = true;
</script>

<div class="flex">
  {#if time == 0}
    <p>N/A</p>
  {:else}
    <p>
      {Math.floor(time / (1000 * 60 * 60))
        .toString()
        .padStart(2, "0")}:
    </p>
    <p>
      {Math.floor((time / (1000 * 60)) % 60)
        .toString()
        .padStart(2, "0")}:
    </p>
    <p>
      {Math.floor((time / 1000) % 60)
        .toString()
        .padStart(2, "0")}
    </p>
    {#if displayMilliseconds}
      <p>
        .{Math.floor((time % 1000) / 10)
          .toString()
          .padStart(2, "0")}
      </p>
    {/if}
  {/if}
</div>
