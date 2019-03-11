import React from "react";
import * as R from "ramda";
import styled from "styled-components";
import {Container} from "styled-bootstrap-grid";

const Root = styled(Container)`
    text-align: center;
    background-color: black;
    padding: 23rem 0;
    margin-bottom: 10rem;
`;

const WelcomeText = styled.p`
    text-align: center;
    font-size: 5.1rem;
    font-weight: bold;
    line-height: 2
    color: white;
`;

function ContactWelcome(props: Props) {
    const {
        contactUsText1= '360°VR Museum 고객지원에',
        contactUsText2= '오신 것을 환영합니다',
    } = props;

    return (
        <Root>
            <WelcomeText>
                {contactUsText1}
                <br/>
                {contactUsText2}
            </WelcomeText>
        </Root>
    );
}

export default R.compose(
    R.identity
)(ContactWelcome);
