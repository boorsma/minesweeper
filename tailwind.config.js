module.exports = {
    purge: ['./src/**/*.tsx', './public/index.html'],
    theme: {
        extend: {},
    },
    variants: {
        extend: {},
    },
    darkMode: 'media',
    plugins: [
        require('@tailwindcss/aspect-ratio'),
    ],
}
