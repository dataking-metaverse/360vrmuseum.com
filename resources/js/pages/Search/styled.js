import styled from "styled-components";
import {themeVar} from "~/styling/theme/functions";

const backgroundColor = themeVar(['colors', 'grayscale', '100']);
export const Root = styled.div`
    padding-top: 7.6rem;
    min-height: 80vh;
    background-color: ${backgroundColor};
`;

export const Title = styled.div`
    font-size: 2rem;
    margin-bottom: 4rem;
    font-weight: normal;
    line-height: normal;
    letter-spacing: normal;
    color: #666666;
`;
