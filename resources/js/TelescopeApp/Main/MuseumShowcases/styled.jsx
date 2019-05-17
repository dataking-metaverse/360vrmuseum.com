import styled from "styled-components";
import * as R from "ramda";

import {topBorder} from "../../styling/mixins";
import half from "../../functions/half";

const gutterWidth = R.path(['theme', 'showcasesGrid', 'gutterWidth']);
const gutterWidthHalf = R.pipe(gutterWidth, half);

export const Root = styled.div`
    position: relative;
    display: inline-block;
    vertical-align: top;
    margin-left: ${gutterWidthHalf}rem;
    margin-right: ${gutterWidthHalf}rem;
    ${topBorder}
`;

const nameFontSize = R.path(['theme', 'museumShowcases', 'name', 'fontSize']);
const nameLineHeight = R.path(['theme', 'museumShowcases', 'name', 'lineHeight']);
const nameMarginBottom = R.path(['theme', 'museumShowcases', 'name', 'marginBottom']);
const nameMarginTop = R.path(['theme', 'museumShowcases', 'name', 'marginTop']);
export const Name = styled.div`
    position: relative;
    font-size: ${nameFontSize}rem;
    line-height: ${nameLineHeight};
    margin-bottom: ${nameMarginBottom}rem;
    margin-top: ${nameMarginTop}rem;
`;
