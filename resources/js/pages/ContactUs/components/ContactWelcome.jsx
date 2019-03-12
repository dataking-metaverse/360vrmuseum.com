import React from "react";
import * as R from "ramda";
import styled from "styled-components";
import {Container, media} from "styled-bootstrap-grid";
import {connect} from "react-redux";

import faded from "../../../helpers/faded";

type Props = {
    text: Array<string>,
    backgroundImage: string,
};

const Root = styled.div`
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

const WelcomeText = faded('p')`
    position: relative;
    text-align: center;
    font-size: 5.1rem;
    font-weight: bold;
    line-height: 2;
    color: white;
    
    ${media.xs`
        font-size: 2.8rem;
    `}
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
        text: [text1, text2],
        backgroundImage,
    } = props;
    return (
        <Root backgroundImage={backgroundImage.src}>
            <BackgroundOverlayWrapper>
                <BackgroundOverlay />
            </BackgroundOverlayWrapper>
            <WelcomeText>
                {text1}
                <br/>
                {text2}
            </WelcomeText>
        </Root>
    );
}


export default R.compose(
    connect(R.applySpec({
        backgroundImage: R.path(['assets', 'contactUs', 'backgroundImage']),
        text: R.path(['lang', 'pages', 'contact-us', 'welcome', 'text']),
    }))
)(ContactWelcome);
