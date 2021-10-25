const defaultTheme = require('tailwindcss/defaultTheme');

const colors = require('tailwindcss/colors');

module.exports = {
    important: true,
    // Active dark mode on class basis
    darkMode: "class",
    purge: {
        content: ["./Pages/**/*.jsx", "./Shared/**/*.jsx"],
        // These options are passed through directly to PurgeCSS
    },
    theme: {
        extend: {
            backgroundImage: (theme) => ({
                check: "url('/icons/check.svg')",
            }),
        },
    },
    variants: {
        extend: {
            backgroundColor: ["checked"],
            borderColor: ["checked"],
            inset: ["checked"],
            zIndex: ["hover", "active"],
        },
    },
    plugins: [],
    future: {
        purgeLayersByDefault: true,
    },
};
