<script lang="ts">
    export let currentStep: number;
    export let steps = [
        "Answer some questions",
        "Choose your race",
        "Create your character",
        "Review",
    ];
</script>

<ul class="navbar-center steps steps-horizontal">
    {#each steps.keys() as i}
        {#if i <= currentStep}
            <li class="step step-primary">{steps[i]}</li>
        {:else}
            <li class="step">{steps[i]}</li>
        {/if}
    {/each}
</ul>