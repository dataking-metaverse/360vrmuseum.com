// reference: https://www.npmjs.com/package/styled-bootstrap-grid

// TODO : this should be removed and all the usage of this should be switched to be using ThemeContent from "styled-bootstrap-grid"

const gridTheme = {
    breakpoints: {
        xl: 1200,
        lg: 992,
        md: 768,
        sm: 576,
        xs: 575,
    },
    row: {

    },
    col: {

    },
    container: {
        padding: 30,
        maxWidth: {
            xl: 1480, // default 1140
            lg: 960,
            md: 991, // default 720
            sm: 767, // default 540
            xs: 540,
        }
    },
};
export default gridTheme;
