import styled from "styled-components";
import * as R from "ramda";

import type {Theme} from "styled-components";


const widthFull = R.path<string, number>(['theme', 'showcaseMenu', 'widthFull']);
const widthCollapse = R.path<string, number>(['theme', 'showcaseMenu', 'widthCollapse']);
const width = R.ifElse<[Theme], number, number>(
    R.prop('show'),
    widthFull,
    widthCollapse
);
export const Root = styled.div`
    height: 100vh;
    width: ${width}rem;
`;

const headerHeight = R.path(['theme', 'header', 'height']);
const headerMarginBottom = R.path(['theme', 'header', 'marginBottom']);
export const Header = styled.div`
    position: relative;
    height: ${headerHeight}rem;
    margin-bottom: ${headerMarginBottom}rem;
`;

const logoWidth = R.path(['theme', 'logo', 'width']);
const logoHeight = R.path(['theme', 'logo', 'height']);
export const Logo = styled.img`
    position: absolute;
    bottom: 0;
    left: 0;
    width: ${logoWidth}rem;
    height: ${logoHeight}rem;
`;
