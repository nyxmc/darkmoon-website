/** @type {import("tailwindcss").Config} */
export default {
    content: ["./src/**/*.{html,js,svelte,ts}"],
    theme: {
        extend: {}
    },
    plugins: [
        require("daisyui"),
        require("tailwindcss-golden-ratio"),
    ],
    daisyui: {
        themes: [
            {
                darkmoon: {
                    "primary": "#55017e",
                    "secondary": "#240335",
                    "accent": "#691ba1",
                    "neutral": "#fcfcfd",
                    "base-100": "#0d0920",
                    "info": "#054a6c",
                    "success": "#098a60",
                    "warning": "#b48618",
                    "error": "#a83939",
                },
            }
        ],
    },
}

