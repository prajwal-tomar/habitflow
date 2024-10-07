/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class',
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    light: '#3F72AF',
                    dark: '#DBE2EF',
                },
                secondary: {
                    light: '#112D4E',
                    dark: '#F9F7F7',
                },
                background: {
                    light: '#FFFFFF',
                    dark: '#112D4E',
                },
            },
        },
    },
    plugins: [],
}