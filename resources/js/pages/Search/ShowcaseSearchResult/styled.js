import styled from "styled-components";
import {Link as RouterLink} from "react-router-dom";

export const Root = styled.div`
    margin-top: 6.5rem;
`;

export const Title = styled.div`
    color: rgb(51, 51, 51);
    font-size: 1.8rem;
    line-height: 2.7rem;
    font-weight: 700;
    margin-bottom: 2.5rem;
`;

export const Subtitle = styled.div`
    margin-bottom: 2rem;
    color: #747474;
    font-size: 1.3rem;
    font-weight: 400;  
`;

export const Details = styled.div`
    font-size: 1.2rem;
    border-top: 1px solid rgba(0,0,0,.11);
    border-bottom: 1px solid rgba(0,0,0,.11);
    padding-top: 1rem;
    padding-bottom: 1rem;
    color: rgb(116, 116, 116);
`;

export const Link = styled(RouterLink)`
    color: #333;
    text-decoration: none;
    transition: color .4s;
    &:hover {
        color: #777777;
    }
`;
