import React from "react";
import * as R from "ramda";
import {connect} from "react-redux";
import styled, {withTheme} from "styled-components";
import {Container, Row, Col, media} from "styled-bootstrap-grid";

import makeSrcset from "../../../helpers/makeSrcset";
import SectionRow from "../components/SectionRow";
import Title from "../components/Title";
import Intro from "../components/Intro";

import type {ResponsiveImage} from "../../../assets/pages/vrmuseum";
import faded from "../../../helpers/faded";


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
    
    > img {
        margin-left: 1.5rem;
        margin-right: 1.5rem;
    }
`;

const TextWrap = styled.div`
    padding-left: 1.5rem;
    padding-right: 1.5rem;
    
    ${media.sm`
        padding-left: 0;
        padding-right: 0;
    `}
    
    ${media.md`
        width: 48rem;
        margin-left: auto;
        margin-right: 5rem;
    `}
    
`;

const Image = faded('img')`
    max-width: 90%;
`;

function ArtEducation(props: Props) {
    const {text} = props;
    return (
        <Container>
            <SectionRow justifyContent="center">
                <LeftCol sm="10" xl="6">
                    <TextWrap>
                        <Title dangerouslySetInnerHTML={{__html: text.title}} />
                        <Intro delay={200} className="mb-4" dangerouslySetInnerHTML={{__html: text.intro}} />
                    </TextWrap>
                </LeftCol>
                <RightCol sm="10" xl="6">
                    <Image delay={400} src={props.image.src} srcSet={makeSrcset(props.srcSetObject)} />
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
