import * as R from "ramda";
import styled from "styled-components";

import half from "../../functions/half";

const gutterWidth = R.path(['theme', 'showcasesGrid', 'gutterWidth']);
const gutterWidthHalf = R.pipe(gutterWidth, half);

const lightGrey = R.path(['theme', 'colors', 'lightGrey']);
export const Root = styled.div`
    position: relative;
    display: inline-block;
    vertical-align: top;
    padding-left: ${gutterWidthHalf}rem;
    padding-right: ${gutterWidthHalf}rem;
    padding-bottom: ${gutterWidth}rem;

    &:after {
        content: '';
        position: absolute;
        bottom: ${gutterWidth}rem;
        right: 0;
        height: 100%;
        width: .2rem;
        margin-left: -.1rem;
        margin-right: -.1rem;
        background-color: ${lightGrey};
    }
`;

const posterWidth = R.path(['theme', 'showcasePoster', 'width']);
const posterHeight = R.path(['theme', 'showcasePoster', 'height']);
const backgroundImage = R.ifElse(R.has('src'), R.prop('src'), R.always("''"));
const activeBorderColor = R.path(['theme', 'showcasePoster', 'activeBorderColor']);
const activeBorderWidth = R.path(['theme', 'showcasePoster', 'activeBorderWidth']);
const abw = activeBorderWidth; // alias
export const Poster = styled.div`
    width: ${posterWidth}rem;
    height: ${posterHeight}rem;
    background-image: url(${backgroundImage});
    background-size: cover;
    background-position: 50% 50%;
    ${({active}) => !active && '//'} box-shadow: inset ${abw}rem ${abw}rem 0 ${activeBorderColor}, inset -${abw}rem -${abw}rem 0 ${activeBorderColor};
`;
