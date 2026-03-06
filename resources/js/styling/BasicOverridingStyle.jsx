import {createGlobalStyle} from "styled-components";

import {themeVar} from "./theme/functions";

import type {ComponentType} from "react";


const BasicOverridingStyle: ComponentType<{}> = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Noto+Sans:400,700');

html, body {
    position: relative;
    margin: 0;
    padding: 0;
    border: 0;
}

html {
    font-size: ${themeVar('fontSize.root')};
}

body {
    background-color: ${themeVar('colors.theme.body.background')};
    color: ${themeVar('colors.theme.body.color')};
    font-size: ${themeVar('fontSize.body')};
    font-family: ${themeVar('fontFamily.base')}
}

:focus { outline: none; }

hr {
    border: none;
    border-top: 1px solid rgba(0,0,0,.11);
    margin-top: 1.5rem;
    margin-bottom: 1.5rem;
}

`;

export default BasicOverridingStyle;
