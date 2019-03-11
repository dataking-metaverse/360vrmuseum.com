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

`;

export default BasicOverridingStyle;
