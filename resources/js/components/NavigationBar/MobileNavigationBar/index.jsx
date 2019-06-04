import React, {useState, useEffect} from "react";
import SlideComponent from "~/components/SlideComponent";

import type {DecoratedProps, RouteProps} from "../navigationBarDecorators";
import useRoute from "~/hooks/useRoute";
import useLangPath from "~/hooks/useLangPath";
import {BurgerButton, Header, LogoLink, Item} from "./styled";
import Links from "./Links";
import AuthButtons from "./AuthButtons";


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
