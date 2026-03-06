import styled from "styled-components";
import {media} from "styled-bootstrap-grid";
import {Link} from "react-router-dom";

import {themeVar} from "~/styling/theme/functions";
import Burger from "../Burger";


export const Header = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: ${themeVar('components.navigationBar.height')};
    background-color: ${themeVar('components.navigationBar.background')};
    letter-spacing: .1rem;
    user-select: none;
    padding-left: 1rem;
    padding-right: 1rem;
    
    ${media.md`
        padding-left: 3rem;
        padding-right: 3rem;
    `}
`;

export const LogoLink = styled(Link)`
    //
    
    > svg {
        display: block;
        width: 11.3rem;
    }
`;

export const BurgerButton = styled(Burger)`
    display: block;
    width: 3.5rem;
    height: 3.5rem;
    cursor: pointer;
`;

export const Item = styled(Link)`
    display: block;
    background-color: ${themeVar('components.navigationBar.background')};
    color: ${themeVar('colors.basic.white')};
    padding: 1.4rem 3rem;
    text-decoration: none !important;
    font-size: 1.2rem;
    line-height: 1;
    border-top: 1px solid rgba(234,234,234,.37);
    transition: background-color ${themeVar('transitionDuration')};
    
    ${({active}) => active && 'background-color: #3d2b3b;'}
    &:hover {
        background-color: #3d2b3b;
    }
`;

export const Submit = styled.button`
    display: block;
    width: 100%;
    text-align: left;
    background-color: ${themeVar('components.navigationBar.background')};
    color: ${themeVar('colors.basic.white')};
    padding: 1.4rem 3rem;
    text-decoration: none !important;
    font-size: 1.2rem;
    line-height: 1;
    border: none;
    border-top: 1px solid rgba(234,234,234,.37);
    transition: background-color ${themeVar('transitionDuration')};
    font-family: inherit;
    cursor: pointer;
    
    ${({active}) => active && 'background-color: #3d2b3b;'}
    &:hover {
        background-color: #3d2b3b;
    }
`;
