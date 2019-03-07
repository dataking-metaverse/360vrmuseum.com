import React from "react";
import {Container} from "styled-bootstrap-grid";
import {connect} from "react-redux";
import * as R from "ramda";
import styled from "styled-components";

import Title from "../components/Title";
import Intro from "../components/Intro";

import type {ResponsiveImage} from "../../../assets";
import makeSrcset from "../../../helpers/makeSrcset";
import FadeInComponent from "../../../components/FadeInComponent";


type Props = {
    text: {|
        title: string,
        intro: string,
    |},
    image: ResponsiveImage,
};

const Root = styled.div`
    position: relative;
    width: 97rem;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 5rem;
    text-align: center;
`;

const Image = styled.img`
    width: 100rem;
    max-width: 100%;
`;

function CulturalData(props: Props) {
    const {text, image} = props;
    return (
        <Root>
            <FadeInComponent>
                <Title dangerouslySetInnerHTML={{__html: text.title}} />
            </FadeInComponent>
            <FadeInComponent delay={200}>
                <Intro>{text.intro}</Intro>
            </FadeInComponent>
            <FadeInComponent delay={400}>
                <Image src={image.src} srcSet={makeSrcset(image.srcSetObject)} />
            </FadeInComponent>
        </Root>
    );
}

export default R.compose(
    connect(R.applySpec({
        text: R.path(['lang', 'pages', 'vrmuseum', 'culturalData']),
        image: R.path(['assets', 'vrmuseum', 'culturalData']),
    })),
)(CulturalData);
