import {createGlobalStyle} from "styled-components";

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
`;

export default BasicStyle;
