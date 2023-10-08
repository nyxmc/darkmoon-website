<svelte:head>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"
            integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8=" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/94/three.min.js"
            integrity="sha256-NGC9JEuTWN4GhTj091wctgjzftr+8WNDmw0H8J5YPYE=" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/gh/InventivetalentDev/MineRender@1.4.6/dist/skin.min.js"></script>

    <script src="/skinrender.js"></script>
</svelte:head>

<script lang="ts">
    import Hero from "$lib/components/Hero.svelte";
    import Logo from "$lib/components/Logo.svelte";
    import Steps from "$lib/components/Steps.svelte";

    import type {ActionData, PageData} from './$types';
    import {writable} from "svelte/store";
    import type {Writable} from "svelte/store";
    import {onMount, setContext} from "svelte";
    import RegistrationForm from "$lib/components/content/RegistrationForm.svelte";
    import RaceSelection from "$lib/components/content/RaceSelection.svelte";
    import type {Race} from "$lib/types";

    export let form: ActionData;
    export let data: PageData;

    let mounted = false;
    onMount(() => mounted = true);

    $: if (mounted && form?.invalid) {
        document.querySelector(`[name=${form?.invalid}]`)?.animate(
            {
                opacity: [0, 1], // [ from, to ]
                color: ["#fff", "#000"], // [ from, to ]
            },
            2000,
        );
    }

    let step = 1;
    const nextStep = () => step += 1;

    $: if (mounted && form?.success) {
        nextStep();
        form.success = false;
        form.invalid = undefined;
    }

    let current: Writable<Race> = writable(data.races[0]);
    let currentTimeout: NodeJS.Timeout | undefined = undefined;
    let currentSkin: number = 0;
    setContext("current", current);

    $: $current, mounted && (() => {
        const changeSkin = () => {
            const nextSkin = $current.skin_urls[currentSkin++ % $current.skin_urls.length]
            const event = new CustomEvent("RenderSkin", {detail: { url: nextSkin }});
            document.dispatchEvent(event);

            if ($current.skin_urls.length == 1) {
                currentTimeout = undefined;
                return;
            }

            currentTimeout = setTimeout(changeSkin, 5000);
        };

        if (!currentTimeout) {
            changeSkin();
        }
    })();
</script>

<div class="navbar bg-base-100">
    <div class="flex-1">
        <Logo width="w-12"/>
    </div>
    <Steps currentStep={step}/>
</div>

<Hero>
    <div class="max-w-full">
        {#if step === 0}
            <RegistrationForm />
        {/if}

        {#if step === 1}
            <RaceSelection data={data.races} />
        {/if}

        {#if step === 3}
            <h2 class="text-3xl text-center">Thank you for your application!</h2>
            <p class="text-center">We will review your application and get back to you as soon as possible. Check your
                ticket for progress.</p>
        {/if}

        {#if step < 0}
            <button class="btn btn-accent" on:click={nextStep}>Next</button>
        {/if}
    </div>
</Hero>
