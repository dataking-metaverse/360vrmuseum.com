import styled from "styled-components";
import * as R from "ramda";


const width = R.path(['theme', 'showcaseContent', 'width']);
export const Root = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    width: ${width}rem;
    height: 100vh;
`;

const headerHeight = R.path(['theme', 'header', 'height']);
const headerMarginBottom = R.path(['theme', 'header', 'marginBottom']);
const marginTop = R.converge(R.add, [headerHeight, headerMarginBottom]);
export const Content = styled.div`
    margin-top: ${marginTop}rem;
    overflow: hidden;
`;
