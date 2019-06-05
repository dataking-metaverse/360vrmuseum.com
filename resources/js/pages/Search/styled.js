import styled from "styled-components";
import {themeVar} from "~/styling/theme/functions";

const backgroundColor = themeVar(['colors', 'grayscale', '100']);
export const Root = styled.div`
    padding-top: 7.6rem;
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

export const MoreSearchTitle = styled.h2`
    font-size: 5.2rem;
    line-height: 1.3;
    margin: 0;
    margin-bottom: .5em;
`;

export const MoreSearchSubtitle = styled.div`
    color: #7a7a7a;
    margin: 0;
    padding: 0;
    font-size: 1.3rem;
`;
