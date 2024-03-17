/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
        screens: {
            xlg: {max: '1440.99px'},
            lg: {max: '1199.99px'},
            md: {max: '991.99px'},
            sm: {max: '767.99px'},
            xs: {max: '479.99px'},
        },
        extend: {
            fontFamily: {
                roboto: ['Roboto', 'sans-serif'],
            },
            gridTemplateRows: {
                '21': '1fr 2fr',
            }
        },
    },
    plugins: [],
}

