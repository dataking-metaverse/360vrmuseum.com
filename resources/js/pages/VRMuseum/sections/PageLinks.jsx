import React from "react";
import * as R from "ramda";
import styled from "styled-components";
import {Container} from "styled-bootstrap-grid";
import {connect} from "react-redux";
import {Link} from "react-router-dom";

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
    const {text, homeRoute, contactUsRoute} = props;
    return (
        <Root>
            <Inner delay={1000}>
                <Link to={homeRoute}>
                    <Button type="primary">{text.toMainPage}</Button>
                </Link>
                <Spacer>&nbsp;</Spacer>
                <Link to={contactUsRoute}>
                    <Button type="secondary">{text.toContactPage}</Button>
                </Link>
            </Inner>
        </Root>
    );
}

export default R.compose(
    connect(R.applySpec({
        homeRoute: R.path(['app', 'routes', 'home']),
        contactUsRoute: R.path(['app', 'routes', 'contact-us']),
        text: R.path(['lang', 'pages', 'vrmuseum', 'pageLinks']),
    })),
)(PageLinks);
