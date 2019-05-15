import {createGlobalStyle} from "styled-components";
import * as R from "ramda";


// 3rd parties
import "react-image-lightbox/style.css";


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


//::-webkit-scrollbar {
//    width: 0px;  /* Remove scrollbar space */
//    background: transparent;  /* Optional: just make scrollbar invisible */
//}

body * {
    scrollbar-width: none;
}


`;

export default BasicStyle;
