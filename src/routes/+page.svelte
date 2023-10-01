<script>
    import heroBackground from "$lib/assets/hero-background.jpeg";
    import Logo from "$lib/components/Logo.svelte";
</script>

<div class="hero min-h-screen" style={`background-image: url(${heroBackground})`}>
    <div class="hero-overlay bg-opacity-30 bg-base-100"></div>
    <div class="hero-content text-center">
        <div class="max-w-md">
            <div class="grid grid-cols-1 grid-rows-2">
                <Logo />
                <h1 class="text-4xl font-bold">Welcome, traveller, to the Dark Moon SMP.</h1>
            </div>
            <p class="mb-5">
                Before you can start your journey and create your character,
                we ask of you that you fill some questions in order for us to get to know you better
                and to check if you are a good fit for our community.
            </p>
            <button class="btn btn-primary">Get Started</button>
        </div>
    </div>
</div>