const basic = {
    purple: '#530d5e',
    darkPurple: '#1f101f',
    white: '#ffffff',
    black: '#000000',
    gray: '#747474',
    whiteSmoke: '#f4f4f4',
};

const grayscale = {
    '100': '#f8f9fa',
    '200': '#e9ecef',
    '300': '#dee2e6',
    '400': '#ced4da',
    '500': '#adb5bd',
    '600': '#54595f',
    '700': '#494949',
    '800': '#3b3b3b',
    '900': '#333333',
};



const colors = {

    // color basic
    basic,
    grayscale,

    // font
    // e.g. success, danger, info, link etc.
    font: {
        secondary: grayscale['700'],
        white: basic.white,
        link: basic.purple,

        headerColor: grayscale['600'],
    },

    // theme
    theme: {

        // body
        body: {
            color: grayscale['900'],
            background: basic.whiteSmoke,
        },

    },

    // pages

    // components

};

export default colors;
