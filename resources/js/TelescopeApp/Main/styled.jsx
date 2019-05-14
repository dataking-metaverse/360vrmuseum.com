import styled from "styled-components";
import * as R from "ramda";

const width = R.path(['theme', 'width']);
const height = R.path(['theme', 'height']);
export const Root = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: ${width}rem;
    height: ${height}rem;
    overflow: hidden;
`;

const containerWidth = R.path(['theme', 'container', 'width']);
export const Container = styled.div`
    position: relative;
    margin: auto;
    width: ${containerWidth}rem;
`;
