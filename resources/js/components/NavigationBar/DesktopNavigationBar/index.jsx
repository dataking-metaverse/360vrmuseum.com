import React from "react";
import * as R from "ramda";
import {Container} from "styled-bootstrap-grid";

import useRoute from "../../../hooks/useRoute";
import useReduxState from "../../../hooks/useReduxState";
import useNavRoutes from "../useNavRoutes";
import AuthButtons from "./AuthButtons";
import Links from "./Links";
import Logo from "./Logo";
import {
    Root,
    FilledRow,
    LeftCol,
    RightCol,
} from "./styled";

type Props = {|

|};

const useLogo = R.pipe(
    useReduxState,
    R.path(['assets', 'logo'])
);

export default function DesktopNavigationBar(props: Props) {
    const homeRoute = useRoute('home');
    const logo = useLogo();
    const routes = useNavRoutes();
    return (
        <Root>
            <Container>
                <FilledRow>
                    <LeftCol col="2">
                        <Logo to={homeRoute} logo={logo} />
                    </LeftCol>
                    <RightCol col="10">
                        <Links routes={routes} />
                        <AuthButtons />
                    </RightCol>
                </FilledRow>
            </Container>
        </Root>
    );
}
