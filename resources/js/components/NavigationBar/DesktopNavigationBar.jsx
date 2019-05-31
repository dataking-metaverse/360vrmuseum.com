import React from "react";
import * as R from "ramda";
import {Container, Row, Col, media} from "styled-bootstrap-grid";
import styled from "styled-components";
import {Link} from "react-router-dom";
import {connect} from "react-redux";

import useRoute from "~/hooks/useRoute";
import {themeVar} from "../../styling/theme/functions";
import {clearUser} from "../../redux/actionBuilders/global"

import type {DecoratedProps, RouteProps} from "./navigationBarDecorators";
import User from "../../models/User";
import useLangPath from "../../hooks/useLangPath";


type LinksProps = {
    routes: Array<RouteProps>,
};

type LogoutFormProps = {

};

type AuthButtonsProps = {
    user: User,
    show: boolean,
    loginRoute: {|
        name: string,
        title: string,
        to: string,
    |}
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

const MyAccountItem = styled(Item)`
        padding-right: 0;
        margin-right: 0;
`;

const LogoutForm = styled.form`
    position: absolute;
    display: block;
    height: auto;
    top: 100%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: gray;
`;

const submitButtonBackgroundColor = themeVar(['colors', 'grayscale', '600']);
const submitButtonColor = themeVar(['colors', 'basic', 'white']);
const Submit = styled.button`
    position: relative;
    align-items: center;
    padding: 1rem 3rem;
    text-decoration: none;
    border: none;
    font-size: 1em;
    font-family: inherit;
    cursor: pointer;
    background-color: ${submitButtonBackgroundColor};
    color: ${submitButtonColor};
`;

const logoutButtonsWrapZIndex = themeVar(['zIndexes', 'logoutButtonsWrap']);
const LogoutButtonsWrap = styled.div`
    position: relative;
    z-index: ${logoutButtonsWrapZIndex};
    
    > ${LogoutForm} {
        display: none;
    }
    
    &:hover > ${LogoutForm} {
        display: block;
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
)(function LogoutButton(props: LogoutFormProps) {
    const {axios, submitRoute, logoutRoute, clearUser} = props;
    const myAccountRoute = useRoute('my-account');
    const myAccountTitle = useLangPath(['navigation', 'my-account', 'title']);

    async function onSubmit(event) {
        event.preventDefault();
        const response = await axios.post(submitRoute);
        const success = R.path(['data', 'success'])(response);
        if (success) { clearUser(); }
    }

    return (
        <LogoutButtonsWrap>
            <MyAccountItem to={myAccountRoute}>{myAccountTitle}</MyAccountItem>
            <LogoutForm onSubmit={onSubmit}>
                <Submit type="submit">{logoutRoute.title}</Submit>
            </LogoutForm>
        </LogoutButtonsWrap>
    );
});

function Links(props: LinksProps) {
    return props.routes.map(({name, title, to}) => (
        <Item key={name} to={to}>{title}</Item>
    ));
}

const AuthButtons = R.compose(
    connect(R.applySpec({
        user: R.prop('user'),
        show: R.path(['config', 'navigationBar', 'showAuth']),
        loginRoute: R.applySpec({
            name: R.path(['config', 'navigationBar', 'login']),
            title: R.path(['lang', 'navigation', 'login', 'title']),
            to: R.path(['app', 'routes', 'login']),
        }),
    }))
)(function AuthButtons(props: AuthButtonsProps) {
    const {user, show, loginRoute} = props;
    if (!show) { return null; }
    if (!user) { return <Item to={loginRoute.to}>{loginRoute.title}</Item>; }
    return <LogoutButton />;
});


function DesktopNavigationBar(props: DecoratedProps) {
    const {loginRoute, user, config} = props;
    const {authSwitch} = config;
    return (
        <Root>
            <Container>
                <FilledRow>
                    <LeftCol col="2">
                        <Logo to={props.homeRoute} logo={props.logo} />
                    </LeftCol>
                    <RightCol col="10">
                        <Links routes={props.routes} />
                        <AuthButtons />
                    </RightCol>
                </FilledRow>
            </Container>
        </Root>
    );
}

export default DesktopNavigationBar;
