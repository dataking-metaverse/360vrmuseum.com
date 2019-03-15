import React from "react";
import styled from "styled-components";
import {themeVar} from "../../../styling/theme/functions";


const black = themeVar('colors.basic.black');
const ShowcaseSectionTitle = styled.h2`
    color: ${black};
    margin: 0;
    padding-top: 1rem;
    padding-bottom: 1rem;
    font-size: 2rem;
`;

export default ShowcaseSectionTitle;
