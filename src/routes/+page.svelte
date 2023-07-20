<script lang="ts">
    import Timeinterval from "../components/timeinterval.svelte";
    import Timer  from "../components/timer.svelte";
    let startTime: number = 0;
    const now = new Date();
    const startOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate()).setHours(0, 0, 0, 0);

    let timeEntries: number[] = [];

    const startTimer = () => {
        startTime = Date.now();
    }
    const stopTimer = () => {
        startTime = 0;
    }
    const logTime = () => {
        const endTime = Date.now();
        const timeDiff = endTime - startTime;
        timeEntries = [timeDiff, ...timeEntries]
        // timeEntries.update(entries => [...entries, timeDiff]);
        console.log(timeEntries)
    }

</script>
<div class="flex justify-center">
    <div>
        <h1 class="font-bold text-3xl my-10">SimpleRacer</h1>
        
        <div class="my-5 flex justify-between">
            <div class="mx-5">
                <h2 class="font-bold text-xl">Start Time:</h2>
                <Timeinterval time={startTime !== 0 ? startTime - startOfDay : 0} />
            </div>
            <div class="mx-5">
                <h2 class="font-bold text-xl">Race time:</h2>
                <Timer startTime={startTime} />
            </div>
            <div class="mx-5">
                <h2 class="font-bold text-xl">Time of day:</h2>
                <Timer startTime={startOfDay} displayMilliseconds={false} />
            </div>
        </div>
        

        {#if startTime === 0}
            <button class="btn btn-success" on:click={startTimer}>Start Race</button>
        {:else}
            <button class="btn btn-warning" on:click={stopTimer}>Stop Race</button>
        {/if}

        <button class="btn btn-primary" on:click={logTime}>Log Time</button>
        <div>
            {#each timeEntries as timeEntry}
                <Timeinterval time={timeEntry} />  
            {/each}
        </div>
    </div>
</div>
