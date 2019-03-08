import React from "react";
import styled from "styled-components";
import {Container, Row, Col, media} from "styled-bootstrap-grid";
import * as R from "ramda";
import {connect} from "react-redux";

import SectionRow from "../components/SectionRow";
import makeSrcset from "../../../helpers/makeSrcset";

import type {ResponsiveImage} from "../../../assets";
import Title from "../components/Title";
import {themeVar} from "../../../styling/theme/functions";
import FadeInComponent from "../../../components/FadeInComponent";
import buildFadeComponent from "../../../helpers/buildFadeComponent";

type CaseType = {
    title: string,
    description: string,
};

type ImagePreProps = {|
    text: string,
    image: ResponsiveImage,
|};

type Props = {|
    mobileCardboardImage: ResponsiveImage,
    hmdImage: ResponsiveImage,
    text: {
        title: string,
        cases: Array<CaseType>,
    },
|};

type CaseProps = CaseType;

const ImagePreRoot = buildFadeComponent('div')`
    position: relative;
    padding-left: 1.5rem;
    padding-right: 1.5rem;
    
    ${media.sm`
        padding-left: 0;
        padding-right: 0;    
    `}
`;

const ImagePrePre = styled.pre`
    position: absolute;
    font-family: inherit;
`;

const Image = styled.img`
    max-width: 100%;
`;

const RightCol = styled(Col)`
    display: flex;
    align-items: center;
`;

const TextWrap = styled.div`
    padding-left: 1.5rem;
    padding-right: 1.5rem;
    
    ${media.sm`
        padding-left: 0;
        padding-right: 0;
    `}
    
    ${media.xl`
        padding-left: 4rem;
        padding-right: 4rem;
    `}
`;

const CaseWrap = buildFadeComponent('div')`
    position: relative;
    margin-bottom: 1rem;
    font-size: 1.8rem;
    max-width: 100%;
    color: ${themeVar('colors.grayscale.600')};
    
    ${media.xl`
        width: 45rem;
    `}
`;

const CaseTitle = styled.div`
    font-weight: bold;
    margin-bottom: 1rem;
`;

const CaseDescription = styled.div`
`;

function ImagePre(props: ImagePreProps) {
    const {image} = props;
    return (
        <ImagePreRoot>
            <ImagePrePre>{props.text}</ImagePrePre>
            <Image src={image.src} srcSet={makeSrcset(image.srcSetObject)} />
        </ImagePreRoot>
    );
}

function Case(props: CaseProps) {
    return (
        <CaseWrap>
            <CaseTitle>{props.title}</CaseTitle>
            <CaseDescription>{props.description}</CaseDescription>
        </CaseWrap>
    );
}

function Discover(props: Props) {
    const {text, mobileCardboardImage: mcImage, hmdImage} = props;
    return (
        <Container>
            <SectionRow justifyContent="center">
                <Col sm="10" md="6">
                    <ImagePre
                        text={'                 mobile                   cardboard'}
                        image={mcImage}
                    />
                    <ImagePre
                        text={'                    hmd'}
                        image={hmdImage}
                    />
                </Col>
                <RightCol sm="10" md="6">
                    <TextWrap>
                        <Title dangerouslySetInnerHTML={{__html: text.title }} />
                        {text.cases.map((item, index) => (
                            <Case
                                key={index}
                                {...item}
                            />
                        ))}
                    </TextWrap>
                </RightCol>
            </SectionRow>
        </Container>
    );
}


export default R.compose(
    connect(R.applySpec({
        text: R.path(['lang', 'pages', 'vrmuseum', 'discover']),
        mobileCardboardImage: R.path(['assets', 'vrmuseum', 'mobileCardboard']),
        hmdImage: R.path(['assets', 'vrmuseum', 'hmd']),
    }))
)(Discover);
