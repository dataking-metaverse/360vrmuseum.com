import React from "react";
import * as R from "ramda";
import {Container, Row, Col, media} from "styled-bootstrap-grid";
import styled from "styled-components";
import {Link} from "react-router-dom";
import {connect} from "react-redux";

import {themeVar} from "../../styling/theme/functions";
import {clearUser} from "../../redux/actionBuilders/global"

import type {DecoratedProps, RouteProps} from "./navigationBarDecorators";


type LinksProps = {
    routes: Array<RouteProps>,
};

type LogoutFormProps = {

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

const LogoLink = styled(Link)`
    position: relative;
    display: block;
    
    > svg {
        display: block;
        width: 11.3rem;
    }
`;

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
        transition: opacity ${themeVar('transitionDuration')};
    }
    
    ${props => props.active && '&:before,'}
    &:hover:before {
        opacity: 1;
    }
`;

const Submit = styled.button`
    position: relative;
    display: flex;
    align-items: center;
    height: ${themeVar('components.navigationBar.height')};
    margin-right: 4rem;
    color: #e5e5e5;
    text-decoration: none;
    padding-bottom: 1rem;
    background-color: transparent;
    border: none;
    font-size: 1em;
    font-family: inherit;
    padding-left: 0;
    cursor: pointer;
    
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

function Logo(props: LogoProps) {
    return (
        <LogoLink to={props.to}>
            {props.logo}
        </LogoLink>
    );
}

const LogoutButton = R.compose(
    connect(
        R.applySpec({
            axios: R.prop('axios'),
            submitRoute: R.path(['app', 'routes', 'api.auth.logout']),
            logoutRoute: R.applySpec({
                name: R.path(['config', 'navigationBar', 'logout']),
                title: R.path(['lang', 'navigation', 'logout', 'title']),
                to: R.path(['app', 'routes', 'logout']),
            }),
        }),
        R.applySpec({clearUser}),
    )
)(function(props: LogoutFormProps) {
    const {axios, submitRoute, logoutRoute, clearUser} = props;

    async function onSubmit(event) {
        event.preventDefault();
        const response = await axios.post(submitRoute);
        const success = R.path(['data', 'success'])(response);
        if (success) { clearUser(); }
    }

    return (
        <React.Fragment>
            <form onSubmit={onSubmit}>
                <Submit type="submit">{logoutRoute.title}</Submit>
            </form>
        </React.Fragment>
    );
});

function Links(props: LinksProps) {
    return props.routes.map(({name, title, to}) => (
        <Item key={name} to={to}>{title}</Item>
    ));
}

function DesktopNavigationBar(props: DecoratedProps) {
    const {loginRoute, user} = props;
    return (
        <Root>
            <Container>
                <FilledRow>
                    <LeftCol col="2">
                        <Logo to={props.homeRoute} logo={props.logo} />
                    </LeftCol>
                    <RightCol col="10">
                        <Links routes={props.routes} />
                        {/*{!user && <Item to={loginRoute.to}>{loginRoute.title}</Item>}*/}
                        {/*{user && <LogoutButton />}*/}
                    </RightCol>
                </FilledRow>
            </Container>
        </Root>
    );
}

export default DesktopNavigationBar;
