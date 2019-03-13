import React from "react";
import {Container, Row, Col, media} from "styled-bootstrap-grid";
import styled from "styled-components";
import {themeVar} from "../../styling/theme/functions";
import {Link} from "react-router-dom";

import type {DecoratedProps, RouteProps} from "./navigationBarDecorators";


type Props = {

};

type LinksProps = {
    routes: Array<RouteProps>,
};



const Root = styled.div`
    background-color: ${themeVar('components.navigationBar.background')};
    font-size: ${themeVar('components.navigationBar.fontSize')};
    letter-spacing: .1rem;
`;

const CustomContainer = styled.div`
    
`;

const FilledRow = styled(Row)`
    height: ${themeVar('components.navigationBar.height')};
`;

const LeftCol = styled(Col)`
    display: flex;
    align-items: center;
`;

const RightCol = styled(Col)`
    display: flex;
    align-items: center;
    justify-content: flex-end;
`;

const Logo = styled.img``;

const Item = styled(Link)`
    position: relative;
    display: flex;
    align-items: center;
    height: ${themeVar('components.navigationBar.height')};
    margin-right: 4rem;
    color: #e5e5e5;
    text-decoration: none;
    padding-bottom: 1rem;
    
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
        transition: ${themeVar('transitionDuration')};
    }
    
    ${props => props.active && '&:before,'}
    &:hover:before {
        opacity: 1;
    }
`;

function Links(props: LinksProps) {
    return props.routes.map(({name, title, to}) => (
        <Item key={name} to={to}>{title}</Item>
    ));
}

function DesktopNavigationBar(props: Props & DecoratedProps) {
    return (
        <Root>
            <Container>
                <FilledRow>
                    <LeftCol col="2">
                        <Logo src={props.logo} />
                    </LeftCol>
                    <RightCol col="10">
                        <Links routes={props.routes} />
                    </RightCol>
                </FilledRow>
            </Container>
        </Root>
    );
}

export default DesktopNavigationBar;
