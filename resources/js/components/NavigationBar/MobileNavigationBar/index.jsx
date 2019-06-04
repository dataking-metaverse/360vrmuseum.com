import React, {useState, useEffect} from "react";
import styled from "styled-components";
import {media} from "styled-bootstrap-grid";
import {Link} from "react-router-dom";

import {themeVar} from "~/styling/theme/functions";
import SlideComponent from "~/components/SlideComponent";
import Burger from "../Burger";


import type {DecoratedProps, RouteProps} from "../navigationBarDecorators";
import * as R from "ramda";
import {connect} from "react-redux";
import {clearUser} from "~/redux/actionCreators/global";
import User from "~/models/User";
import useRoute from "~/hooks/useRoute";
import useLangPath from "~/hooks/useLangPath";



type LinksProps = {
    routes: Array<RouteProps>,
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

const Header = styled.div`
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

const LogoLink = styled(Link)`
    //
    
    > svg {
        display: block;
        width: 11.3rem;
    }
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
    
    ${({active}) => active && 'background-color: #3d2b3b;'}
    &:hover {
        background-color: #3d2b3b;
    }
`;

const Submit = styled.button`
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
        const success = R.path(['data', 'data', 'success'])(response);
        if (success) {
            clearUser();
        }
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
    return props.routes.map(({name, title, to}: RouteProps) => (
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

export default function MobileNavigationBar(props: DecoratedProps) {
    const {history, location, loginRoute, logoutRoute, user} = props;
    const [navOpen, setNavOpen] = useState(false);
    const myAccountRoute = useRoute('my-account');
    const myAccountTitle = useLangPath(['navigation', 'my-account', 'title']);

    useEffect(() => {
        setNavOpen(false);
    }, [location.href]);

    return (
        <React.Fragment>
            <Header>
                <LogoLink to={props.homeRoute}>
                    {props.logo}
                </LogoLink>
                <BurgerButton onClick={() => setNavOpen(!navOpen)} />
            </Header>
            <SlideComponent open={navOpen} onClick={() => setNavOpen(false)}>
                <Links routes={props.routes} />
                <Item to={myAccountRoute}>{myAccountTitle}</Item>
                <AuthButtons />
            </SlideComponent>
        </React.Fragment>
    );
}
