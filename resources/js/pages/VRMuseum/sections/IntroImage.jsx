import React from "react";
import {media} from "styled-bootstrap-grid";

import faded from "../../../helpers/faded";


const IntroImage = faded('img')`
    width: 50%;
    
    ${media.md`
        width: auto;
        max-width: 100%;
    `}
    
    ${media.xl`
        max-width: 56%;
    `}
`;

export default IntroImage;
