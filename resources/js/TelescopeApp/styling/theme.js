const font = "'Noto Sans KR', sans-serif, Arial, Calibri";
const containerWidth: number = 144.6;
const themeRed = '#a73030';
const themeRedText = '#a63333';
const themeBlackText = '#414141';
const lightGrey = '#d8d8d8';
const buttonWidth = 4.8;

const theme = {

    // baisc
    font,
    fontSize: 2.5,
    color: themeBlackText,
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

    // ShowcaseContent
    showcaseContent: {
        width: 101.2,
        closeButtonSection: {
            marginButtom: 6.2,
        },
        iframeSection: {
            height: 45,
            marginBottom: 5.8,
        },
        informationSection: {
            marginBottom: 6.8,
            paddingLeft: 24.3,
            engTitle: {
                color: themeRedText,
                fontSize: 2.2,
                marginBottom: 2.8,
            },
            korTitle: {
                color: themeBlackText,
                fontSize: 3.5,
                marginBottom: 7.7,
            },
            museumName: {
                color: themeBlackText,
                fontSize: 2,
                marginBottom: 1.8,
            },
            dateAndStatistics: {
                marginBottom: 2.3,
            },
            datePeriod: {
                color: themeBlackText,
                fontSize: 2.5,
            },
            statistics: {
                color: themeBlackText,
                fontSize: 2,
            },
            statisticsItem: {
                marginRight: 3,
            },
            hr: {
                marginBottom: 2,
            },
            showcaseDetails: {
                marginBottom: 7.8,
            },
            detailPoint: {
                marginRight: 3.6,
                fontSize: 2,
                dotColor: lightGrey,
                dotWidth: 2.4,
                dotMarginRight: .7,
            },
            description: {
                fontSize: 2.5,
                marginBottom: 6.8,
            },
            additionalInformationTitle: {
                color: themeRedText,
                fontSize: 2.5,
            },
            additionalInformation: {
                fontSize: 2,
            },
        },
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
        },
    },

    // components
    toggleButton: {
        width: buttonWidth,
        arrow: {
            width: 3.2,
            height: 2,
        },
    },

    closeButton: {
        width: buttonWidth,
        cross: {
            width: 2.45,
            height: 2.45,
        },
    },

    // mixins
    topBorder: {
        height: .4,
        color: lightGrey,
    },

};

export default theme;
