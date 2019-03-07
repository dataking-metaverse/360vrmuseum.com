import React from "react";
import * as R from "ramda";
import {connect} from "react-redux";
import styled from "styled-components";
import {Container, Row, Col, media} from "styled-bootstrap-grid";

import makeSrcset from "../../../helpers/makeSrcset";
import IntroImage from "./IntroImage";
import SectionRow from "../components/SectionRow";
import Title from "../components/Title";
import Intro from "../components/Intro";

import type {ResponsiveImage} from "../../../assets";
import FadeInComponent from "../../../components/FadeInComponent";

type Props = {
    text: {
        title: string,
        intro: string,
    },
    image: ResponsiveImage,
};

const LeftCol = styled(Col)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
`;

const RightCol = styled(Col)`
    display: flex;
    align-items: center;
    text-align: center;
`;

const TextWrap = styled.div`
    text-align: center;
    padding-left: 1.5rem;
    padding-right: 1.5rem;
    
    ${media.md`
        width: 48rem;
        max-width: 100%;
        text-align: left;
    `}
`;

function IntroEasy(props: Props) {
    const {text, image} = props;
    return (
        <Container>
            <SectionRow>
                <LeftCol md="7" xl="6">
                    <TextWrap>
                        <FadeInComponent>
                            <Title dangerouslySetInnerHTML={{__html: text.title}} />
                        </FadeInComponent>
                        <FadeInComponent delay={200}>
                            <Intro dangerouslySetInnerHTML={{__html: text.intro}} />
                        </FadeInComponent>
                    </TextWrap>
                </LeftCol>
                <RightCol md="5" xl="6">
                    <FadeInComponent delay={400}>
                        <IntroImage
                            src={image.src}
                            srcSet={makeSrcset(image.srcSetObject)}
                        />
                    </FadeInComponent>
                </RightCol>
            </SectionRow>
        </Container>
    );
}

export default R.compose(
    connect(R.applySpec({
        text: R.path(['lang', 'pages', 'vrmuseum', 'introEasy']),
        image: R.path(['assets', 'vrmuseum', 'vrmuseumEasy']),
    }))
)(IntroEasy);
