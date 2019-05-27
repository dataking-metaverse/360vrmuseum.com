import styled from "styled-components";
import {themeColor} from "../../styling/theme/functions";

const paddingX = 2.3;
const paddingY = 2.4;

const rootBackgroundColor = themeColor('basic.whiteSmoke');
export const Root = styled.div`
    background-color: ${rootBackgroundColor};
    padding: ${paddingY}rem ${paddingX}rem;
    margin-bottom: 4.6rem;
`;

const headerColor = themeColor('grayscale.600');
export const Header = styled.div`
    font-size: 2rem;
    margin-bottom: 5.3rem;
    color: ${headerColor};
`;

const disableNoPadding = ({noPadding}) => (!noPadding && '//');
export const Body = styled.div`
    position: relative;
    ${disableNoPadding}margin-left: ${-paddingX}rem;
    ${disableNoPadding}margin-right: ${-paddingX}rem;
`;
