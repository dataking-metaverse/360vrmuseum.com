import styled from "styled-components";
import * as R from "ramda";

import {topBorder} from "../../styling/mixins";


export const Root = styled.div`
    position: relative;
    ${topBorder}
`;

const nameFontSize = R.path(['theme', 'museumShowcases', 'name', 'fontSize']);
const nameLineHeight = R.path(['theme', 'museumShowcases', 'name', 'lineHeight']);
const nameMarginBottom = R.path(['theme', 'museumShowcases', 'name', 'marginBottom']);
const nameMarginTop = R.path(['theme', 'museumShowcases', 'name', 'marginTop']);
export const Name = styled.div`
    font-size: ${nameFontSize}rem;
    line-height: ${nameLineHeight};
    margin-bottom: ${nameMarginBottom}rem;
    margin-top: ${nameMarginTop}rem;
`;
