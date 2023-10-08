<script lang="ts">
    import type { Power } from "$lib/types";
    export let power: Power;
</script>

<div>
    <span class="font-bold">{power.name}</span>
    <p>{power.description}</p>
</div>