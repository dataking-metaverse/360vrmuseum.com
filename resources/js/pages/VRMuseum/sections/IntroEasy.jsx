import React from "react";
import * as R from "ramda";
import {connect} from "react-redux";
import styled from "styled-components";
import {Container, Row, Col} from "styled-bootstrap-grid";

import makeSrcset from "../../../helpers/makeSrcset";
import IntroImage from "./IntroImage";
import SectionRow from "../components/SectionRow";
import Title from "../components/Title";
import Intro from "../components/Intro";

import type {ResponsiveImage} from "../../../assets";


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
    text-align: center;
`;

const TextWrap = styled.div`
    width: 48rem;
`;

function IntroEasy(props: Props) {
    const {text, image} = props;
    return (
        <Container>
            <SectionRow>
                <LeftCol xl="5">
                    <TextWrap>
                        <Title dangerouslySetInnerHTML={{__html: text.title}} />
                        <Intro dangerouslySetInnerHTML={{__html: text.intro}} />
                    </TextWrap>
                </LeftCol>
                <RightCol xl="7">
                    <IntroImage
                        src={image.src}
                        srcSet={makeSrcset(image.srcSetObject)}
                    />
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
