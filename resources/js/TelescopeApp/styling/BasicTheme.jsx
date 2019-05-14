import {createGlobalStyle} from "styled-components";
import * as R from "ramda";

const font = R.path(['theme', 'font']);
const fontSize = R.path(['theme', 'fontSize']);
const color = R.path(['theme', 'color']);
const BasicStyle = createGlobalStyle`
*,
*::before,
*::after {
  box-sizing: border-box;
}

html {
    font-size: .625rem;
}

html, body {
    border: none;
    padding: 0;
    margin: 0;
}

body {
    font-family: ${font};
    font-size: ${fontSize}rem;
    color: ${color};
}
`;

export default BasicStyle;
