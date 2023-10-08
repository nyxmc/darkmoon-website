<script lang="ts">
    import Power from "$lib/components/specific/Power.svelte";
    import type {Race} from "$lib/types";
    import type {Writable} from "svelte/store";
    import {getContext} from "svelte";

    export let data: Race[];

    let current: Writable<Race> = getContext("current");
    let current_index: number = data.indexOf($current);

    const selectRace = (i: number) => {
        current_index = i;
        current.set(data[current_index]);

        setTimeout(() => {
            const event = new CustomEvent("RenderSkin", {detail: {url: $current.skin_urls[0]}});
            document.dispatchEvent(event);
        }, 10);
    }
</script>


<div class="join justify-center mb-5">
    {#each data.keys() as i}
        {#if i === current_index}
            <button class="join-item btn btn-primary btn-active">{i + 1}</button>
        {:else}
            <button class="join-item btn" on:click={() => selectRace(i)}>{i + 1}</button>
        {/if}
    {/each}
</div>

<section>
    <div class="flex w-full" id="race-card">
        <div class="grid flex-grow">
            <div id="skinrender"/>
        </div>

        <div class="divider divider-horizontal"></div>

        <div class="grid flex-grow">
            <div class="card w-96 bg-base-100 shadow-xl">
                <div class="card-body text-left">
                    <h2 class="card-title">{$current.name}</h2>
                    <p>{$current.description}</p>

                    <h3 class="font-bold text-xl">Stats</h3>

                    <div>
                        <span>Max weight</span>
                        <progress class="progress progress-accent w-56" value="10" max="30"></progress>

                        <span>Min weight</span>
                        <progress class="progress progress-accent w-56" value="10" max="30"></progress>
                    </div>

                    {#if $current.powers.length > 0}
                        <h3 class="font-bold text-xl">Powers</h3>

                        {#each $current.powers as power}
                            <Power {power}/>
                        {/each}
                    {/if}

                    <div class="card-actions mt-3">
                        <button class="btn btn-accent">Play as {$current.name}</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>