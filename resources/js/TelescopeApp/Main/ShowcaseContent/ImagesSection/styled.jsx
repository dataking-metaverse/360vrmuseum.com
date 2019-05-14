import styled from "styled-components";
import * as R from "ramda";


const half = R.divide(R.__, 2);
const minus = R.multiply(-1);
const minusHalf = R.o(half, minus);

const gutterWidth = R.path(['theme', 'showcaseContent', 'imagesSection', 'gutterWidth']);
const gutterWidthHalf = R.pipe(gutterWidth, half);
const gutterWidthMinusHalf = R.pipe(gutterWidth, minusHalf);
export const Root = styled.div`
    margin-left: ${gutterWidthMinusHalf}rem;
    margin-right: ${gutterWidthMinusHalf}rem;
`;

const width = R.path(['theme', 'showcaseContent', 'imagesSection', 'images', 'width']);
const height = R.path(['theme', 'showcaseContent', 'imagesSection', 'images', 'height']);
export const Image = styled.div`
    display: inline-block;
    vertical-align: top;
    width: ${width}rem;
    height: ${height}rem;
    background-image: url(${R.prop('src')});
    background-size: cover;
    margin: ${gutterWidthHalf}rem;
`;
