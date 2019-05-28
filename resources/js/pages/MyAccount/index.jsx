import React from "react";
import styled from "styled-components";
import {Container} from "styled-bootstrap-grid";

import page from "../../decorators/page";
import AccountInformation from "./AccountInformation";
import ViewHistory from "./ViewHistory";
import Suggestions from "./Suggestions/index";


type Props = {|

|};

const Root = styled.div`
    padding-top: 10.2rem;
    padding-bottom: 10.2rem;
`;

@page('my-account')
export default class MyAccount extends React.PureComponent<Props> {
    render() {
        return (
            <Root>
                <Container>
                    <AccountInformation />
                    <ViewHistory />
                    <Suggestions />
                </Container>
            </Root>
        );
    }
}
