import React from "react";
import styled from "styled-components";
import * as R from "ramda";
import {connect} from "react-redux";

import {themeVar} from "../../../styling/theme/functions";

import type ResponsiveImage from "../../../types/ResponsiveImage";
import Button from "../../../components/Button";
import faded from "../../../helpers/faded";


type Props = {
    image: ResponsiveImage,
    title: string,
    subtitle: string,
    linkText: string,
    active: boolean,
};

const Root = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 52rem;
    text-align: center;
    background-image: url(${R.prop('backgroundImage')});
    background-size: cover;
    background-position: 50% 50%;
    ${({active}) => active && 'z-index: 1;'}
`;

const Fade = styled.div`
    transform: ${({active}) => active ? 'translateY(0)' : 'translateY(3rem)'};
    opacity: ${({active}) => active ? '1' : '0'};
    transition-duration: .4s;
`;

const Title = styled.h2`
    color: ${themeVar('colors.basic.white')};
    font-size: 4rem;
    line-height: 1.25;
    width: 50rem;
    max-width: 100%;
`;

const Subtitle = styled.div`
    color: ${themeVar('colors.basic.white')};
    margin-bottom: 5rem;
`;


function Slide(props: Props) {
    return (
        <Root backgroundImage={props.image.src} active={props.active}>
            <Fade active={props.active}>
                <Title>{props.title}</Title>
                <Subtitle>{props.subtitle}</Subtitle>
                <Button size="small" type="whiteBorder">{props.linkText}</Button>
            </Fade>
        </Root>
    );
}

export default R.compose(
    connect(
        R.applySpec({
            linkText: R.path(['lang', 'pages', 'home', 'heroCarousel', 'linkText']),
        }),
        R.always({})
    )
)(Slide);
