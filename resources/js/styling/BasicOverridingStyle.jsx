import {createGlobalStyle} from "styled-components";

import {themeVar} from "./theme/functions";

import type {ComponentType} from "react";


const BasicOverridingStyle: ComponentType<{}> = createGlobalStyle`

html, body {
    position: relative;
    margin: 0;
    padding: 0;
    border: 0;
}

html {
    font-size: ${themeVar('rootFontSize')};
}

body {
    font-size: ${themeVar('bodyFontSize')}
}

`;

export default BasicOverridingStyle;
