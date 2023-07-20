<script type="ts">
    
    let name = ""
    let description = ""

    const createRace = () => {
        let newRace = {
            name: name,
            description: description
        }
        
    }
</script>

<div class="flex justify-center">
    <!-- <a href="/race"><Tilbake til løp</a> -->
    <div class="flex flex-col w-96">
        <h1 class="text-xl">Lag nytt løp</h1>
        <div class="my-2 flex flex-col">
            <label for="racename">Race name</label>
            <input bind:value={name} id="racename" type="text" class="input input-bordered input-primary my-2">
        </div>
        <div class="my-2 flex flex-col">
            <label for="racedescription">Race Description</label>
            <textarea bind:value={description} id="racedescription" class="textarea textarea-primary my-2" />
        </div>
        <button on:click={createRace} class="btn btn-primary my-2">Create new race</button>
    </div>
</div>