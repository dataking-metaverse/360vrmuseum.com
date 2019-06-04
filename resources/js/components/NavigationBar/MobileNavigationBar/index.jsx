import React, {useState, useEffect} from "react";
import SlideComponent from "~/components/SlideComponent";
import * as R from "ramda";
import {withRouter} from "react-router";

import useRoute from "~/hooks/useRoute";
import useLangPath from "~/hooks/useLangPath";
import useReduxState from "~/hooks/useReduxState";
import {BurgerButton, Header, LogoLink, Item} from "./styled";
import Links from "./Links";
import AuthButtons from "./AuthButtons";
import useNavRoutes from "../useNavRoutes";

type Props = {|
    location: {
        href: string,
    },
|};

const useLogo = R.pipe(
    useReduxState,
    R.path(['assets', 'logo'])
);

function MobileNavigationBar(props: Props) {
    const {location} = props;
    const [navOpen, setNavOpen] = useState(false);
    const routes = useNavRoutes();
    const myAccountRoute = useRoute('my-account');
    const homeRoute = useRoute('home');
    const logo = useLogo();
    const lang = useLangPath(['navigation', 'my-account']);

    useEffect(() => {
        setNavOpen(false);
    }, [location.href]);

    return (
        <React.Fragment>
            <Header>
                <LogoLink to={homeRoute}>
                    {logo}
                </LogoLink>
                <BurgerButton onClick={() => setNavOpen(!navOpen)} />
            </Header>
            <SlideComponent open={navOpen} onClick={() => setNavOpen(false)}>
                <Links routes={routes} />
                <Item to={myAccountRoute}>{lang.title}</Item>
                <AuthButtons />
            </SlideComponent>
        </React.Fragment>
    );
}

export default withRouter(MobileNavigationBar);
