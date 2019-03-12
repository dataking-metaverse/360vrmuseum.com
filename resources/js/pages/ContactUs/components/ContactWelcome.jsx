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
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    padding: 23rem 0;
    margin-bottom: 10rem;
    background-image: url(${R.prop('backgroundImage')});
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    transition: background 3s,border .3s,border-radius .3s,box-shadow .3s;
    background-color: #1f101f;
    margin-bottom: 25rem;
`;

const WelcomeText = styled.p`
    position: relative;
    text-align: center;
    font-size: 5.1rem;
    font-weight: bold;
    line-height: 2
    color: white;
`;

const BackgroundOverlayWrapper = styled.div`
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    position: absolute;
    background-color: #150216;
    opacity: .65;
    transition: background .3s,border-radius .3s,opacity .3s;
`;

const BackgroundOverlay = styled.div`
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    position: absolute;
    transition: background .3s,border-radius .3s,opacity .3s;
    opacity: .5;
`;


function ContactWelcome(props: Props) {
    const {
        contactUsText1 = '360°VR Museum 고객지원에',
        contactUsText2 = '오신 것을 환영합니다',
        backgroundImage,
    } = props;
    return (
        <Root backgroundImage={backgroundImage.src}>
                <BackgroundOverlayWrapper>
                    <BackgroundOverlay/>
                </BackgroundOverlayWrapper>
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
