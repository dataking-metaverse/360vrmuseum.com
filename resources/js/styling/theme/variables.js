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
    arrowLeft: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIzMiIgdmlld0JveD0iMCAwIDIwIDMyIj4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPHBhdGggZD0iTTM0LTh2NDhoLTQ4Vi04eiIvPgogICAgICAgIDxwYXRoIHN0cm9rZT0iIzY2NiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjMiIGQ9Ik0xOCAzMEwyIDE2IDE4IDIiLz4KICAgIDwvZz4KPC9zdmc+Cg==',
    arrowRight: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIzMiIgdmlld0JveD0iMCAwIDIwIDMyIj4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPHBhdGggZD0iTS0xNCA0MFYtOGg0OHY0OHoiLz4KICAgICAgICA8cGF0aCBzdHJva2U9IiM2NjYiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIzIiBkPSJNMiAybDE2IDE0TDIgMzAiLz4KICAgIDwvZz4KPC9zdmc+Cg==',

    // pages

    // components
    components: {

        navigationBar: {
            background: colors.basic.darkPurple,
            fontSize: rem(1.5),
            height: rem(8.2),
        }

    },

    zIndexes: {
        confirm: 777,
    },
};

export default variables;
