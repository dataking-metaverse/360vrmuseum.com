import {Row, Col} from "styled-bootstrap-grid";
import {Link} from "react-router-dom";
import styled from "styled-components";

import {themeVar} from "../../../styling/theme/functions";

export const Root = styled.div`
    background-color: ${themeVar('components.navigationBar.background')};
    font-size: ${themeVar('components.navigationBar.fontSize')};
    letter-spacing: .1rem;
`;

export const CustomContainer = styled.div`
    
`;

export const FilledRow = styled(Row)`
    height: ${themeVar('components.navigationBar.height')};
`;

export const LeftCol = styled(Col)`
    display: flex;
    align-items: center;
`;

export const RightCol = styled(Col)`
    display: flex;
    align-items: center;
    justify-content: flex-end;
`;

export const LogoLink = styled(Link)`
    position: relative;
    display: block;
    
    > svg {
        display: block;
        width: 11.3rem;
    }
`;

export const Item = styled(Link)`
    position: relative;
    display: flex;
    align-items: center;
    height: ${themeVar('components.navigationBar.height')};
    margin-right: 4rem;
    color: #e5e5e5;
    text-decoration: none;
    
    &:last-child {
        padding-right: 0;
        margin-right: 0;
    }
    
    &:before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: .3rem;
        background-color: #e5e5e5;
        opacity: 0;
        transition: opacity ${themeVar('transitionDuration')};
    }
    
    ${props => props.active && '&:before,'}
    &:hover:before {
        opacity: 1;
    }
`;

export const MyAccountItem = styled(Item)`
        padding-right: 0;
        margin-right: 0;
`;

export const LogoutForm = styled.form`
    position: absolute;
    display: block;
    width: 100%;
    height: auto;
    top: 100%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: gray;
`;

const logoutButtonsWrapZIndex = themeVar(['zIndexes', 'logoutButtonsWrap']);
export const LogoutButtonsWrap = styled.div`
    position: relative;
    margin-right: 4rem;
    z-index: ${logoutButtonsWrapZIndex};
    
    > ${LogoutForm} {
        display: none;
    }
    
    &:hover > ${LogoutForm} {
        display: block;
    }
`;

const submitButtonBackgroundColor = themeVar(['colors', 'grayscale', '600']);
const submitButtonColor = themeVar(['colors', 'basic', 'white']);
export const Submit = styled.button`
    position: relative;
    width: 100%;
    align-items: center;
    padding-top: 1rem;
    padding-bottom: 1rem;
    text-decoration: none;
    border: none;
    font-size: 1em;
    font-family: inherit;
    cursor: pointer;
    background-color: ${submitButtonBackgroundColor};
    color: ${submitButtonColor};
`;
