import React from "react";
import * as R from "ramda";
import {connect} from "react-redux";
import styled, {withTheme} from "styled-components";
import {Container, Row, Col} from "styled-bootstrap-grid";

import makeSrcset from "../../../helpers/makeSrcset";
import IntroImage from "./IntroImage";
import SectionRow from "../components/SectionRow";
import PercentageBar from "../components/PercentageBar";
import Title from "../components/Title";
import Intro from "../components/Intro";

import type {ResponsiveImage} from "../../../assets/pages/vrmuseum";
import FadeInComponent from "../../../components/FadeInComponent";


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
    width: 48rem;
`;

function IntroSharing(props: Props) {
    const {text} = props;
    const {comparee, comparer} = props.percentageBars;
    const purple = R.path(['variables', 'colors', 'basic', 'purple'])(props.theme);
    return (
        <Container>
            <SectionRow>
                <LeftCol xl="7">
                    <FadeInComponent>
                        <IntroImage src={props.image.src} srcSet={makeSrcset(props.srcSetObject)} />
                    </FadeInComponent>
                </LeftCol>
                <RightCol xl="5">
                    <TextWrap>
                        <FadeInComponent delay={200}>
                            <Title dangerouslySetInnerHTML={{__html: text.title}} />
                        </FadeInComponent>
                        <FadeInComponent delay={400}>
                            <Intro dangerouslySetInnerHTML={{__html: text.intro}} />
                        </FadeInComponent>
                        <br />
                        <FadeInComponent delay={600}>
                            <div>
                                <PercentageBar {...comparee} barColor="rgba(96,64,104,.7)" />
                                <PercentageBar {...comparer} barColor={purple} />
                            </div>
                        </FadeInComponent>
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
