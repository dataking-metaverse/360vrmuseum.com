const containerWidth: number = 144.6;
const themeRed = '#a73030';

const theme = {

    // baisc
    width: 192,
    height: 108,

    // Menu
    container: {
        width: containerWidth,
    },

    // Scrollable
    scrollable: {
        height: 192,
    },

    // ShowcaseMenu
    showcaseMenu: {
        widthFull: containerWidth,
        widthCollapse: 30,
    },

    // Header
    header: {
        height: 9.9,
        marginBottom: 10,
    },

    // Logo
    logo: {
        width: 16.8,
        height: 2.6,
    },

    // MuseumShowcases
    museumShowcases: {
        borderTop: {
            height: .4,
            color: '#d8d8d8',
        },
        name: {
            fontSize: 2.5,
            lineHeight: 1.5,
            marginBottom: 6.7,
            marginTop: .6,
        },
    },

    showcasesGrid: {
        gutterWidth: 8.2,
        poster: {
            width: 30,
            height: 40,
            activeBorderWidth: 1.3,
            activeBorderColor: themeRed,
        }
    },

    // components
    toggleButton: {
        width: 4.8,
        arrow: {
            width: 3.2,
            height: 2,
        },
    },

};

export default theme;
