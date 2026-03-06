import styled from "styled-components";
import * as R from "ramda";

import type {ComponentType} from "react";
import half from "../../functions/half";

type ImageProps = {|
    src: string,
    onClick: () => void,
|};

const minus = R.multiply(-1);
const minusHalf = R.o(half, minus);

const gutterWidth = R.path(['theme', 'imageGrid', 'gutterWidth']);
const gutterWidthHalf = R.pipe(gutterWidth, half);
const gutterWidthMinusHalf = R.pipe(gutterWidth, minusHalf);
export const Root = styled.div`
    margin-left: ${gutterWidthMinusHalf}rem;
    margin-right: ${gutterWidthMinusHalf}rem;
`;

const width = R.path(['theme', 'imageGrid', 'image', 'width']);
const height = R.path(['theme', 'imageGrid', 'image', 'height']);
const getSrc = R.prop('src');
export const Image: ComponentType<ImageProps> = styled.div`
    display: inline-block;
    vertical-align: top;
    width: ${width}rem;
    height: ${height}rem;
    background-image: url(${getSrc});
    background-size: cover;
    margin: ${gutterWidthHalf}rem;
`;

Root.Image = Image;

export default Root;
