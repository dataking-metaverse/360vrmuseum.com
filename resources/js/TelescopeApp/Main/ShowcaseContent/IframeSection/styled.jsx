import styled from "styled-components";
import * as R from "ramda";


const height = R.path(['theme', 'showcaseContent', 'iframeSection', 'height']);
const marginBottom = R.path(['theme', 'showcaseContent', 'iframeSection', 'marginBottom']);
export const Iframe = styled.iframe`
    position: relative;
    display: block;
    border: 0;
    margin: 0;
    margin-bottom: ${marginBottom}rem;
    padding: 0;
    width: 100%;
    height: ${height}rem;
`;
