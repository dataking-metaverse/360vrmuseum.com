import React from "react";
import * as R from "ramda";
import {connect} from "react-redux";
import styled, {withTheme} from "styled-components";
import {Container, Row, Col} from "styled-bootstrap-grid";

import makeSrcset from "../../../helpers/makeSrcset";
import SectionRow from "../components/SectionRow";
import Title from "../components/Title";
import Intro from "../components/Intro";

import type {ResponsiveImage} from "../../../assets/pages/vrmuseum";
import FadeInComponent from "../../../components/FadeInComponent";


type Props = {
    text: {
        title: string,
        intro: string,
    },
    image: ResponsiveImage,
    imageSet: { [string]: string },
};


const LeftCol = styled(Col)`
    display: flex;
    align-items: center;
`;


const RightCol = styled(Col)`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
`;

const TextWrap = styled.div`
    width: 48rem;
    margin-left: auto;
    margin-right: 5rem;
`;

const Image = styled.img`
    max-width: 90%;
`;

function ArtEducation(props: Props) {
    const {text} = props;
    return (
        <Container>
            <SectionRow>
                <LeftCol xl="6">
                    <TextWrap>
                        <FadeInComponent>
                            <Title dangerouslySetInnerHTML={{__html: text.title}} />
                        </FadeInComponent>
                        <FadeInComponent delay={200}>
                            <Intro dangerouslySetInnerHTML={{__html: text.intro}} />
                        </FadeInComponent>
                    </TextWrap>
                </LeftCol>
                <RightCol xl="6">
                    <FadeInComponent delay={400}>
                    <Image src={props.image.src} srcSet={makeSrcset(props.srcSetObject)} />
                    </FadeInComponent>
                </RightCol>
            </SectionRow>
        </Container>
    );
}

export default R.compose(
    connect(R.applySpec({
        text: R.path(['lang', 'pages', 'vrmuseum', 'artEducation']),
        image: R.path(['assets', 'vrmuseum', 'artEducation']),
    })),
)(ArtEducation);
