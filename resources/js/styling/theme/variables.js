import colors from "./colors";
import {rem} from "./functions";


const variables = {

    // globals
    transitionDuration: '.4s',

    // theme
    colors,
    fontSize: {
        root: rem(.625), // 10px
        body: rem(1.6), // 16px
    },
    fontFamily: {
        base: '"Noto Sans", sans-serif, Arial, Calibri',
    },

    // pages

    // components
    components: {

        navigationBar: {
            background: colors.basic.darkPurple,
            color: colors.basic.white,
            fontSize: rem(1.5),
            height: rem(8.2),
        }

    },

};

export default variables;
