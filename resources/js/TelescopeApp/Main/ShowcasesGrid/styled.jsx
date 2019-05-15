import styled from "styled-components";
import * as R from "ramda";

const half = R.divide(R.__, 2);

const gutterWidth = R.path(['theme', 'showcasesGrid', 'gutterWidth']);
const gutterWidthHalf = R.pipe(gutterWidth, half);

export const Root = styled.div`
    margin-left: -${gutterWidthHalf}rem;
    margin-right: -${gutterWidthHalf}rem;
    overflow: hidden;
`;

const posterWidth = R.path(['theme', 'showcasesGrid', 'poster', 'width']);
const posterHeight = R.path(['theme', 'showcasesGrid', 'poster', 'height']);
const backgroundImage = R.ifElse(R.has('src'), R.prop('src'), R.always("''"));
const activeBorderColor = R.path(['theme', 'showcasesGrid', 'poster', 'activeBorderColor']);
const activeBorderWidth = R.path(['theme', 'showcasesGrid', 'poster', 'activeBorderWidth']);
const abw = activeBorderWidth; // alias
export const Poster = styled.div`
    display: inline-block;
    width: ${posterWidth}rem;
    height: ${posterHeight}rem;
    background-image: url(${backgroundImage});
    background-size: cover;
    background-position: 50% 50%;
    margin-left: ${gutterWidthHalf}rem;
    margin-right: ${gutterWidthHalf}rem;
    margin-bottom: ${gutterWidth}rem;
    ${({active}) => !active && '//'} box-shadow: inset ${abw}rem ${abw}rem 0 ${activeBorderColor}, inset -${abw}rem -${abw}rem 0 ${activeBorderColor};
`;
