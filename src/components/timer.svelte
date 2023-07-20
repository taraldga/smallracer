<script lang="ts">
    import { afterUpdate } from "svelte";
    import Timeinterval from "./timeinterval.svelte";
    export let startTime: number = 0;
    export let displayMilliseconds = true;
    let time = 0;
    let interval: any;


    const startTimer = () => {
        interval = setInterval(() => {
            time = ( Date.now() - startTime );
        }, 10);
    }

    const stopTimer = () => {
        clearInterval(interval);
    }
    $: if (startTime !== 0) {
        startTimer();
    } else {
        stopTimer();
    }
</script>

<div>
    <Timeinterval time={time} displayMilliseconds={displayMilliseconds} />    
</div>
