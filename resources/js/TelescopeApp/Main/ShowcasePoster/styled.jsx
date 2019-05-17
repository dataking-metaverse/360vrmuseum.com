import * as R from "ramda";
import styled from "styled-components";

const half = R.divide(R.__, 2);

const gutterWidth = R.path(['theme', 'showcasesGrid', 'gutterWidth']);
const gutterWidthHalf = R.pipe(gutterWidth, half);

const posterWidth = R.path(['theme', 'showcasePoster', 'width']);
const posterHeight = R.path(['theme', 'showcasePoster', 'height']);
const backgroundImage = R.ifElse(R.has('src'), R.prop('src'), R.always("''"));
const activeBorderColor = R.path(['theme', 'showcasePoster', 'activeBorderColor']);
const activeBorderWidth = R.path(['theme', 'showcasePoster', 'activeBorderWidth']);
const abw = activeBorderWidth; // alias
export const Root = styled.div`
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
