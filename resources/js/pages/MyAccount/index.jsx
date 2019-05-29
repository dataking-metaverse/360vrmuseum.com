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

const Row1 = styled.div`
    display: table;
    width: 100%;

    > * {
        display: table-cell;
    }
`;

Row1.Col1 = styled.div`
    width: 39.6rem;
`;

Row1.Col2 = styled.div`
    padding-left: 5.4rem;
`;

@page('my-account')
export default class MyAccount extends React.PureComponent<Props> {
    render() {
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
}
