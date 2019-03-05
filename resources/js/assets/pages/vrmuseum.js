export type ResponsiveImage = {|
    src: string,
    srcSetObject: ?{ [string]: string },
|};

export const vrmuseumHeroImage = require('../files/360-vr_0314_1-opt.png');

export const vrmuseumEasy: ResponsiveImage = {
    src: require('../files/33p-1.png'),
    srcSetObject: {
        '178w': require('../files/33p-1-178x300.png'),
        '200w': require('../files/33p-1-200x337.png'),
        '400w': require('../files/33p-1-400x673.png'),
        '600w': require('../files/33p-1-600x1010.png'),
        '609w': require('../files/33p-1-609x1024.png'),
        '768w': require('../files/33p-1-768x1292.png'),
        '800w': require('../files/33p-1-800x1346.png'),
        '1200w': require('../files/33p-1-1200x2019.png'),
    },
};

export const vrmuseumSharing: ResponsiveImage = {
    src: require('../files/34p_1-609x1024.png'),
    srcSetObject: {
        '178w': require('../files/34p_1-178x300.png'),
        '200w': require('../files/34p_1-200x337.png'),
        '400w': require('../files/34p_1-400x673.png'),
        '600w': require('../files/34p_1-600x1010.png'),
        '609w': require('../files/34p_1-609x1024.png'),
        '768w': require('../files/34p_1-768x1292.png'),
        '800w': require('../files/34p_1-800x1346.png'),
        '1200w': require('../files/34p_1-1200x2019.png'),
        '1737w': require('../files/34p_1.png'),
    }
};


export const keimyungUniversity: ResponsiveImage = {
    src: require('../files/계명대.png'),
    srcSetObject: {
        '200w': require('../files/계명대-200x104.png'),
        '276w': require('../files/계명대.png'),
    },
};

export const sookmyungWomensUniversity: ResponsiveImage = {
    src: require('../files/숙대.png'),
    srcSetObject: {
        '200w': require('../files/숙대-200x104.png'),
        '276w': require('../files/숙대.png'),
    },
};

export const sahmyookUniversity: ResponsiveImage = {
    src: require('../files/삼육대원형.png'),
    srcSetObject: {
        '200w': require('../files/삼육대원형-200x104.png'),
        '276w': require('../files/삼육대원형.png'),
    },
};

export const universityLogos: Array<ResponsiveImage> = [
    keimyungUniversity,
    sookmyungWomensUniversity,
    sahmyookUniversity,
];

export const viewingOnIphoneX = require('../files/edit3.gif');

export const benefits: Array<ResponsiveImage> = [
    {
        src: require('../files/1.gif'),
    },
    {
        src: require('../files/41_2-1-1024x573.png'),
        srcSetObject: {
            '200w': require('../files/41_2-1-200x112.png'),
            '300w': require('../files/41_2-1-300x168.png'),
            '400w': require('../files/41_2-1-400x224.png'),
            '600w': require('../files/41_2-1-600x336.png'),
            '768w': require('../files/41_2-1-768x430.png'),
            '800w': require('../files/41_2-1-800x448.png'),
            '1024w': require('../files/41_2-1-1024x573.png'),
            '1200w': require('../files/41_2-1-1200x672.png'),
        },
    },
    {
        src: require('../files/3-1024x576.jpg'),
        srcSetObject: {
            '200w': require('../files/3-200x113.jpg'),
            '300w': require('../files/3-300x169.jpg'),
            '400w': require('../files/3-400x225.jpg'),
            '600w': require('../files/3-600x338.jpg'),
            '768w': require('../files/3-768x432.jpg'),
            '800w': require('../files/3-800x450.jpg'),
            '1024w': require('../files/3-1024x576.jpg'),
            '1200w': require('../files/3-1200x675.jpg'),
        },
    },
    {
        src: require('../files/4-1024x576.jpg'),
        srcSetObject: {
            '200w': require('../files/4-200x113.jpg'),
            '300w': require('../files/4-300x169.jpg'),
            '400w': require('../files/4-400x225.jpg'),
            '600w': require('../files/4-600x338.jpg'),
            '768w': require('../files/4-768x432.jpg'),
            '800w': require('../files/4-800x450.jpg'),
            '1024w': require('../files/4-1024x576.jpg'),
            '1200w': require('../files/4-1200x675.jpg'),
        }
    },
];

export const mobileCardboard: ResponsiveImage = {
    src: require('../files/41p.png'),
    srcSetObject: {
        '200w': require('../files/41p-200x144.png'),
        '300w': require('../files/41p-300x217.png'),
        '400w': require('../files/41p-400x289.png'),
        '600w': require('../files/41p-600x433.png'),
        '768w': require('../files/41p-768x554.png'),
        '800w': require('../files/41p-800x577.png'),
        '1024w': require('../files/41p-1024x739.png'),
        '1200w': require('../files/41p-1200x866.png'),
        '2832w': require('../files/41p.png'),
    },
};

export const hmd: ResponsiveImage = {
    src: require('../files/41p_2.png'),
    srcSetObject: {
        '200w': require('../files/41p_2-200x148.png'),
        '300w': require('../files/41p_2-300x222.png'),
        '400w': require('../files/41p_2-400x297.png'),
        '600w': require('../files/41p_2-600x445.png'),
        '768w': require('../files/41p_2-768x569.png'),
        '800w': require('../files/41p_2-800x593.png'),
        '1024w': require('../files/41p_2-1024x759.png'),
        '1200w': require('../files/41p_2-1200x890.png'),
        '2832w': require('../files/41p_2.png'),
    },
};

export const artEducation: ResponsiveImage = {
    src: require('../files/samsung-gear-vr-headset4-class-810x456.png'),
    srcSetObject: {
        '200w': require('../files/samsung-gear-vr-headset4-class-810x456-200x113.png'),
        '300w': require('../files/samsung-gear-vr-headset4-class-810x456-300x169.png'),
        '400w': require('../files/samsung-gear-vr-headset4-class-810x456-400x225.png'),
        '600w': require('../files/samsung-gear-vr-headset4-class-810x456-600x338.png'),
        '768w': require('../files/samsung-gear-vr-headset4-class-810x456-768x432.png'),
        '800w': require('../files/samsung-gear-vr-headset4-class-810x456-800x450.png'),
        '810w': require('../files/samsung-gear-vr-headset4-class-810x456.png'),
    },
};


export const culturalData: ResponsiveImage = {
    src: require('../files/35p-1024x576.png'),
    srcSetObject: {
        '200w': require('../files/35p-200x113.png'),
        '300w': require('../files/35p-300x169.png'),
        '400w': require('../files/35p-400x225.png'),
        '600w': require('../files/35p-600x338.png'),
        '768w': require('../files/35p-768x432.png'),
        '800w': require('../files/35p-800x450.png'),
        '1024w': require('../files/35p-1024x576.png'),
        '1200w': require('../files/35p-1200x675.png'),
        '1920w': require('../files/35p.png'),
    },
};


