import type ResponsiveImage from "../../types/ResponsiveImage";

export const backgroundImage: ResponsiveImage = {
    src: require('../files/contactUs/contactus_background.png'),
};

export const partnership: ResponsiveImage = {
    microsoft: {
        src: require('../files/contactUs/microsoft-logo.png'),
        srcSetObject: {
            '200w': require('../files/contactUs/microsoft-logo-200x104.png'),
            '276w': require('../files/contactUs/microsoft-logo.png'),
        },
    },

    sbck: {
        src: require('../files/contactUs/sbck-logo.png'),
        srcSetObject: {
            '200w': require('../files/contactUs/sbck-logo-200x104.png'),
            '276w': require('../files/contactUs/sbck-logo.png'),
        },
    },
    matterport: {
        src: require('../files/contactUs/matterport-logo.png'),
        srcSetObject: {
            '200w': require('../files/contactUs/matterport-logo-200x104.png'),
            '276w': require('../files/contactUs/matterport-logo.png'),
        },
    },

    nationalMuseum: {
        src: require('../files/contactUs/national_museum-logo.png'),
        srcSetObject: {
            '200w': require('../files/contactUs/national_museum-logo-200x104.png'),
            '276w': require('../files/contactUs/national_museum-logo.png'),
        },
    },

    gonjuMuseum: {
        src: require('../files/contactUs/gonju_museum-logo.png'),
        srcSetObject: {
            '200w': require('../files/contactUs/gonju_museum-logo-200x104.png'),
            '276w': require('../files/contactUs/gonju_museum-logo.png'),
        },
    },

    chuncheonMuseum: {
        src: require('../files/contactUs/chuncheon_museum-logo.png'),
        srcSetObject: {
            '200w': require('../files/contactUs/chuncheon_museum-logo-200x104.png'),
            '276w': require('../files/contactUs/chuncheon_museum-logo.png'),
        },
    },

    jejuMuseum: {
        src: require('../files/contactUs/jeju_museum-logo.png'),
        srcSetObject: {
            '200w': require('../files/contactUs/jeju_museum-logo-200x104.png'),
            '276w': require('../files/contactUs/jeju_museum-logo.png'),
        },
    },

    sookmyung: {
        src: require('../files/contactUs/sookmyung-logo.png'),
        srcSetObject: {
            '200w': require('../files/contactUs/sookmyung-logo-200x104.png'),
            '276w': require('../files/contactUs/sookmyung-logo.png'),
        },
    },

    sahmyook: {
        src: require('../files/contactUs/sahmyook-logo.png'),
        srcSetObject: {
            '200w': require('../files/contactUs/sahmyook-logo-200x104.png'),
            '276w': require('../files/contactUs/sahmyook-logo.png'),
        },
    },

    keimyung: {
        src: require('../files/contactUs/keimyung-logo.png'),
        srcSetObject: {
            '200w': require('../files/contactUs/keimyung-logo-200x104.png'),
            '276w': require('../files/contactUs/keimyung-logo.png'),
        },
    },
};
