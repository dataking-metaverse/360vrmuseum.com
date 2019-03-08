import React from "react";
import * as R from "ramda";
import {connect} from "react-redux";
import styled, {withTheme} from "styled-components";
import {Container, Row, Col, media} from "styled-bootstrap-grid";

import makeSrcset from "../../../helpers/makeSrcset";
import IntroImage from "./IntroImage";
import SectionRow from "../components/SectionRow";
import PercentageBar from "../components/PercentageBar";
import Title from "../components/Title";
import Intro from "../components/Intro";

import type {ResponsiveImage} from "../../../assets/pages/vrmuseum";
import buildFadeComponent from "../../../helpers/buildFadeComponent";


type PercentageBarType = {
    title: string,
    percentage: number,
};

type Props = {
    text: {
        title: string,
        intro: string,
    },
    image: ResponsiveImage,
    imageSet: { [string]: string },
    percentageBars: {|
        comparee: PercentageBarType,
        comparer: PercentageBarType,
    |},
    theme: {},
};


const LeftCol = styled(Col)`
    text-align: center;
`;


const RightCol = styled(Col)`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
`;

const TextWrap = styled.div`
    max-width: 100%;
    padding-left: 1.5rem;
    padding-right: 1.5rem;
    text-align: center;
    
    ${media.md`
        width: 48rem;
        text-align: left;
    `}
`;

const PercentageBarWrap = buildFadeComponent('div')``;

function IntroSharing(props: Props) {
    const {text} = props;
    const {comparee, comparer} = props.percentageBars;
    const purple = R.path(['variables', 'colors', 'basic', 'purple'])(props.theme);
    return (
        <Container>
            <SectionRow>
                <LeftCol md="5" xl="6" order="1" mdOrder="0">
                    <IntroImage src={props.image.src} srcSet={makeSrcset(props.srcSetObject)} />
                </LeftCol>
                <RightCol md="7" xl="6" order="0" mdOrder="1">
                    <TextWrap>
                        <Title delay={200} dangerouslySetInnerHTML={{__html: text.title}} />
                        <Intro delay={400} dangerouslySetInnerHTML={{__html: text.intro}} />
                        <br />
                        <PercentageBarWrap delay={600}>
                            <PercentageBar {...comparee} barColor="rgba(96,64,104,.7)" />
                            <PercentageBar {...comparer} barColor={purple} />
                        </PercentageBarWrap>
                    </TextWrap>
                </RightCol>
            </SectionRow>
        </Container>
    );
}

export default R.compose(
    connect(R.applySpec({
        text: R.path(['lang', 'pages', 'vrmuseum', 'introSharing']),
        image: R.path(['assets', 'vrmuseum', 'vrmuseumSharing']),
        percentageBars: R.path(['lang', 'pages', 'vrmuseum', 'introSharing', 'percentageBars']),
    })),
    withTheme,
)(IntroSharing);
