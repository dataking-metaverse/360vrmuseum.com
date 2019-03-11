import React from "react";
import {Container} from "styled-bootstrap-grid";
import {connect} from "react-redux";
import * as R from "ramda";
import styled from "styled-components";
import {media} from "styled-bootstrap-grid";

import Title from "../components/Title";
import Intro from "../components/Intro";

import type {ResponsiveImage} from "../../../assets";
import makeSrcset from "../../../helpers/makeSrcset";
import FadeInComponent from "../../../components/FadeInComponent";
import {percentage} from "../../../styling/theme/functions";
import faded from "../../../helpers/faded";


type Props = {
    text: {|
        title: string,
        intro: string,
    |},
    image: ResponsiveImage,
};

const Wrap = styled.div`
    position: relative;
    max-width: 100%;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 5rem;
    text-align: center;
    
    ${media.sm`
        width: ${percentage(1000 / 12)};
    `}
    
    ${media.md`
        width: ${percentage(80)};
    `}
    
    ${media.xl`
        width: 97rem;
    `}
`;

const Image = faded('img')`
    width: 100rem;
    max-width: 100%;
`;

function CulturalData(props: Props) {
    const {text, image} = props;
    return (
        <Container>
            <Wrap>
                <Title dangerouslySetInnerHTML={{__html: text.title}} />
                <Intro delay={200}>{text.intro}</Intro>
                <Image delay={400} src={image.src} srcSet={makeSrcset(image.srcSetObject)} />
            </Wrap>
        </Container>
    );
}

export default R.compose(
    connect(R.applySpec({
        text: R.path(['lang', 'pages', 'vrmuseum', 'culturalData']),
        image: R.path(['assets', 'vrmuseum', 'culturalData']),
    })),
)(CulturalData);
