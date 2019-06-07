import React from "react";
import styled from "styled-components";
import {Container, media} from "styled-bootstrap-grid";
import {Redirect} from "react-router";
import * as R from "ramda";

import page from "~/decorators/page";
import useReduxState from "~/hooks/useReduxState";
import AccountInformation from "./AccountInformation";
import Suggestions from "./Suggestions";
import ViewHistory from "./ViewHistory";
import {
    Root,
    Row1,
} from "./styled";


type Props = {|

|};


const useHomeRoute = R.o(R.path(['app', 'routes', 'home']), useReduxState);

function MyAccount(props: Props) {
    const {user} = useReduxState();
    const homeRoute = useHomeRoute();
    if (!user) { return (<Redirect to={homeRoute} />) }
    return (
        <Root>
            <Container>
                <Row1>
                    <Row1.Col1>
                        <AccountInformation />
                    </Row1.Col1>
                    <Row1.Col2>
                        <ViewHistory />
                    </Row1.Col2>
                </Row1>
                <Suggestions />
            </Container>
        </Root>
    );
}

export default page('my-account')(MyAccount);
