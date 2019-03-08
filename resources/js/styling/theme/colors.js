const basic = {

    // bootstraps default
    blue: '#007bff',
    indigo: '#6610f2',
    pink: '#e83e8c',
    red: '#dc3545',
    orange: '#fd7e14',
    yellow: '#ffc107',
    green: '#28a745',
    teal: '#20c997',
    cyan: '#17a2b8',
    grayDark: '#343a40',
    primary: '#007bff',
    secondary: '#6c757d',
    success: '#28a745',
    info: '#17a2b8',
    warning: '#ffc107',
    danger: '#dc3545',
    light: '#f8f9fa',
    dark: '#343a40',

    purple: '#530d5e',
    darkerPurple: '#3d2b3b',
    darkPurple: '#1f101f',
    white: '#ffffff',
    black: '#000000',
    gray: '#747474',
    whisper: '#ededed',
    whiteSmoke: '#fbfafb',
};

const grayscale = {
    '100': '#f8f9fa',
    '200': '#e9ecef',
    '300': '#dee2e6',
    '400': '#ced4da',
    '500': '#adb5bd',
    '600': '#747474',
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
            background: basic.white,
        },

    },

    // pages


    // components

};

export default colors;
