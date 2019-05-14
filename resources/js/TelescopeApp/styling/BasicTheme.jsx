import {createGlobalStyle} from "styled-components";
import * as R from "ramda";

const font = R.path(['theme', 'font']);
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
}
`;

export default BasicStyle;
