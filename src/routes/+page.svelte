<script>
    import Logo from "$lib/components/Logo.svelte";
    import Hero from "$lib/components/Hero.svelte";
</script>

<Hero>
    <div class="max-w-md">
        <div class="grid grid-cols-1 grid-rows-2">
            <Logo width="w-24"/>
            <h1 class="text-4xl font-bold">Welcome, traveller, to the Dark Moon SMP.</h1>
        </div>
        <p class="mb-5">
            Before you can start your journey and create your character,
            we ask of you that you fill some questions in order for us to get to know you better
            and to check if you are a good fit for our community.
        </p>
        <button class="btn btn-primary">
            <a href="/sign-up">Get Started</a>
        </button>
    </div>
</Hero>