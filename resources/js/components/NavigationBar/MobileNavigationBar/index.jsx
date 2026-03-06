import React, {useEffect} from "react";
import SlideComponent from "~/components/SlideComponent";
import * as R from "ramda";
import {withRouter} from "react-router";

import useBooleanState from "~/hooks/useBooleanState";
import useRoute from "~/hooks/useRoute";
import useLangPath from "~/hooks/useLangPath";
import useReduxState from "~/hooks/useReduxState";
import useNavRoutes from "../useNavRoutes";
import AuthButtons from "./AuthButtons";
import Links from "./Links";
import SeardchWidget from "./SeardchWidget";
import {
    BurgerButton,
    Header,
    LogoLink,
    Item,
} from "./styled";

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
    const [navOpen,, setNotNavOpen, toggleNavOpen] = useBooleanState(false);
    const routes = useNavRoutes();
    const myAccountRoute = useRoute('my-account');
    const homeRoute = useRoute('home');
    const logo = useLogo();
    const lang = useLangPath(['navigation', 'my-account']);

    useEffect(() => {
        setNotNavOpen();
    }, [location.href]);

    return (
        <React.Fragment>
            <Header>
                <LogoLink to={homeRoute}>
                    {logo}
                </LogoLink>
                <BurgerButton onClick={toggleNavOpen} />
            </Header>
            <SlideComponent open={navOpen}>
                <SeardchWidget onSubmitFinished={setNotNavOpen} />
                <div onClick={setNotNavOpen}>
                    <Links routes={routes} />
                    <Item to={myAccountRoute}>{lang.title}</Item>
                    <AuthButtons />
                </div>
            </SlideComponent>
        </React.Fragment>
    );
}

export default withRouter(MobileNavigationBar);
