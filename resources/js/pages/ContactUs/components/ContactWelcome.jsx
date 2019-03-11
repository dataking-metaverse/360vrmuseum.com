import React from "react";
import * as R from "ramda";
import styled from "styled-components";
import {Container} from "styled-bootstrap-grid";
import {connect} from "react-redux";

type Props = {
    contactUsText1: string,
    contactUsText2: string,
    backgroundImage: string,
};

const Root = styled(Container)`
    text-align: center;
    background-color: black;
    padding: 23rem 0;
    margin-bottom: 10rem;
    background-image: url(${R.prop('backgroundImage')});
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
        backgroundImage,
    } = props;
    return (
        <Root backgroundImage={backgroundImage.src}>
            <WelcomeText>
                {contactUsText1}
                <br/>
                {contactUsText2}
            </WelcomeText>
        </Root>
    );
}


export default R.compose(
    connect(R.applySpec({
        backgroundImage: R.path(['assets', 'contactUs', 'backgroundImage']),
    }))
)(ContactWelcome);
