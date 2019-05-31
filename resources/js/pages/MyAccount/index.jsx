import React from "react";
import styled from "styled-components";
import {Container, media} from "styled-bootstrap-grid";
import {connect} from "react-redux";
import * as R from "ramda";

import page from "../../decorators/page";
import AccountInformation from "./AccountInformation";
import ViewHistory from "./ViewHistory";
import Suggestions from "./Suggestions/index";
import {Redirect} from "react-router";


type Props = {|

|};

const Root = styled.div`
    padding-top: 10.2rem;
    padding-bottom: 10.2rem;
`;

const Row1 = styled.div`

  ${media.sm`
        display: table;
        width: 100%;
    
        > * {
            display: table-cell;
        }
  `}
`;

Row1.Col1 = styled.div`
    //

    ${media.sm`
        width: 39.6rem;
    `}
    
`;

Row1.Col2 = styled.div`
    //
    
    ${media.sm`
        padding-left: 5.4rem;
    `}
`;

@connect(R.applySpec({
    user: R.prop('user'),
    homeRoute: R.path(['app', 'routes', 'home']),
}), R.always({}))
@page('my-account')
export default class MyAccount extends React.PureComponent<Props> {
    render() {
        const {user, homeRoute} = this.props;
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
}
