import styled from "styled-components";
import * as R from "ramda";


const gutterWidth = R.path(['theme', 'showcasesGrid', 'gutterWidth']);
const gutterWidthHalf = R.pipe(gutterWidth, R.divide(R.__, 2));

export const Root = styled.div`
    margin-left: -${gutterWidthHalf}rem;
    margin-right: -${gutterWidthHalf}rem;
`;

const posterWidth = R.path(['theme', 'showcasesGrid', 'poster', 'width']);
const posterHeight = R.path(['theme', 'showcasesGrid', 'poster', 'height']);
const backgroundImage = R.prop('src');
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
`;
