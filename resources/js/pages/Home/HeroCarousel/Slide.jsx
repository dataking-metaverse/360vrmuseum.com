import React from "react";
import styled from "styled-components";
import * as R from "ramda";
import {connect} from "react-redux";

import {themeVar} from "../../../styling/theme/functions";

import Button from "../../../components/Button";

import type {ResponsiveImage} from "../../../types";
import {Link} from "react-router-dom";


type Props = {
    index: number,
    image: ResponsiveImage,
    title: string,
    subtitle: string,
    quickView: string,
    active: boolean,
    path: string,
};

const Root = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 52rem;
    max-height: 80vh;
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

// NOTE : this h1 tag is for SEO purpose, so this should be shown instead of the H2Title when the slide is the first one
const H1Title = styled.h1`
    color: ${themeVar('colors.basic.white')};
    font-size: 4rem;
    line-height: 1.25;
    max-width: 100%;
`;

const H2Title = styled.h2`
    color: ${themeVar('colors.basic.white')};
    font-size: 4rem;
    line-height: 1.25;
    max-width: 100%;
`;

const Subtitle = styled.div`
    color: ${themeVar('colors.basic.white')};
    margin-bottom: 5rem;
`;


function Slide(props: Props) {
    const Title = props.index === 0 ? H1Title : H2Title;
    return (
        <Root backgroundImage={props.image.src} active={props.active}>
            <Fade active={props.active} style={{ maxWidth: '100%'}}>
                <Title dangerouslySetInnerHTML={{__html: props.title}} />
                <Subtitle>{props.subtitle}</Subtitle>
                <Link to={props.path}>
                    <Button size="small" type="whiteBorder">
                        {props.quickView}
                    </Button>
                </Link>
            </Fade>
        </Root>
    );
}

export default R.compose(
    connect(
        R.applySpec({
            quickView: R.path(['lang', 'common', 'quickView']),
        }),
        R.always({})
    )
)(Slide);
