import React from "react";
import * as R from "ramda";
import styled from "styled-components";
import {Container} from "styled-bootstrap-grid";
import {connect} from "react-redux";

import Button from "../../../components/Button";
import faded from "../../../helpers/faded";


type Props = {|
    text: {|
        toMainPage: string,
        toContactPage: string,
    |},
|};

const Root = styled(Container)`
    text-align: center;
    margin-bottom: 10rem;
`;

const Inner = faded('div')``;

const Spacer = styled.span`
    //

    &:before {
        content: ' ';
        display: inline-block;
        font-size: 1rem;
        width: 3rem;
    }
`;

function PageLinks(props: Props) {
    const {text} = props;
    return (
        <Root>
            <Inner delay={1000}>
                <Button type="primary">{text.toMainPage}</Button>
                <Spacer>&nbsp;</Spacer>
                <Button type="secondary">{text.toContactPage}</Button>
            </Inner>
        </Root>
    );
}

export default R.compose(
    connect(R.applySpec({
        text: R.path(['lang', 'pages', 'vrmuseum', 'pageLinks']),
    })),
)(PageLinks);
