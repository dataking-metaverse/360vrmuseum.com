import styled from "styled-components";
import * as R from "ramda";


export const Root = styled.div`
    height: 100vh;
`;

const headerHeight = R.path(['theme', 'header', 'height']);
const headerMarginBottom = R.path(['theme', 'header', 'marginBottom']);
const marginTop = R.converge(R.add, [headerHeight, headerMarginBottom]);
export const Content = styled.div`
    margin-top: ${marginTop}rem;
    overflow: hidden;
`;
