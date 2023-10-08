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
                    "primary": "rgb(57, 53, 72)",
                    "secondary": "rgb(44, 38, 55)",
                    "accent": "#55017e",
                    "neutral": "#fcfcfd",
                    "base-100": "rgb(33, 27, 36)",
                    "info": "#054a6c",
                    "success": "#098a60",
                    "warning": "#b48618",
                    "error": "#a83939",
                },
            }
        ],
    },
}

