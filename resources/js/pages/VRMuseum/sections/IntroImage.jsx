import React from "react";
import styled from "styled-components";
import {media} from "styled-bootstrap-grid";


const IntroImage = styled.img`
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
