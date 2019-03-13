import React, {useState} from "react";
import styled from "styled-components";
import {media} from "styled-bootstrap-grid";

import {themeVar} from "../../styling/theme/functions";

import Burger from "./Burger";
import type {DecoratedProps, RouteProps} from "./navigationBarDecorators";
import {Link} from "react-router-dom";


type LinksProps = {
    routes: Array<RouteProps>,
};

const Header = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: ${themeVar('components.navigationBar.height')};
    background-color: ${themeVar('components.navigationBar.background')};
    letter-spacing: .1rem;
    user-select: none;
    
    ${media.md`
        padding-left: 3rem;
        padding-right: 3rem;
    `}
`;

const Image = styled.img`
    display: block;
`;

const BurgerButton = styled(Burger)`
    display: block;
    width: 3.5rem;
    height: 3.5rem;
    cursor: pointer;
`;

const Item = styled(Link)`
    display: block;
    background-color: ${themeVar('components.navigationBar.background')};
    color: ${themeVar('colors.basic.white')};
    padding: 1.4rem 3rem;
    text-decoration: none !important;
    font-size: 1.2rem;
    line-height: 1;
    border-top: 1px solid rgba(234,234,234,.37);
    transition: background-color ${themeVar('transitionDuration')};
    
    ${props => props.active && 'background-color: #3d2b3b;'}
    &:hover {
        background-color: #3d2b3b;
    }
`;


function Links(props: LinksProps) {
    return props.routes.map(({name, title, to}: RouteProps) => (
        <Item key={name} to={to}>{title}</Item>
    ));
}

export default function MobileNavigationBar(props: DecoratedProps) {
    const [navOpen, setNavOpen] = useState(false);
    return (
        <React.Fragment>
            <Header>
                <Image src={props.logo} />
                <BurgerButton onClick={() => setNavOpen(!navOpen)} />
            </Header>
            <SlideComponent open={navOpen}>
                <Links routes={props.routes} />
            </SlideComponent>
        </React.Fragment>
    );
}
