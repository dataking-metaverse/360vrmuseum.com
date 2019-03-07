import React from "react";
import * as R from "ramda";
import {connect} from "react-redux";
import styled from "styled-components";
import {Container} from "styled-bootstrap-grid";

import Title from "../components/Title";
import Intro from "../components/Intro";
import makeSrcset from "../../../helpers/makeSrcset";

import type {ResponsiveImage} from "../../../assets";
import FadeInComponent from "../../../components/FadeInComponent";


type Props = {
    text: {|
        title: string,
        intro: string,
    |},
    viewingOnIphoneX: string,
};

type UniversityLogosProps = {
    logos: Array<ResponsiveImage>,
    links: Array<string>,
};

const ContainerCenter = styled(Container)`
    text-align: center;
`;


const Wrapper = styled.div`
    width: 100rem;
    margin: auto;
    padding: 0 3rem 3rem;
    margin-bottom: 3rem;
`;

const LogoWrapper = styled.div`
    margin-bottom: 8rem;
`;

const UniversityLogo = styled.img`
    width: 18rem;
    height: 9.4rem;
`;

const ViewingOnIphoneX = styled.img`
    max-width: 61.2rem;
`;


const UniversityLogos = R.compose(
    connect(R.applySpec({
        logos: R.path(['assets', 'vrmuseum', 'universityLogos']),
        links: R.path(['config', 'pages', 'home', 'appreciate', 'universityLinks'])
    })),
)(function UniversityLogos(props: UniversityLogosProps) {
    return props.logos.map(({src, srcSetObject}, index) => (
        <a
            key={index}
            href={props.links[index]}
            target="_blank"
        >
            <UniversityLogo
                src={src}
                srcSet={makeSrcset(srcSetObject)}
            />
        </a>
    ));
});

function Appreciate(props: Props) {
    const {text} = props;
    return (
        <ContainerCenter>
            <Wrapper>
                <FadeInComponent>
                    <Title dangerouslySetInnerHTML={{__html: text.title}} />
                </FadeInComponent>
                <FadeInComponent delay={200}>
                    <Intro dangerouslySetInnerHTML={{__html: text.intro}} />
                </FadeInComponent>
            </Wrapper>
            <FadeInComponent delay={400}>
                <LogoWrapper>
                    <UniversityLogos />
                </LogoWrapper>
            </FadeInComponent>
            <FadeInComponent delay={600}>
                <ViewingOnIphoneX src={props.viewingOnIphoneX} />
            </FadeInComponent>
        </ContainerCenter>
    );
}

export default R.compose(
    connect(R.applySpec({
        text: R.path(['lang', 'pages', 'vrmuseum', 'appreciate']),
        viewingOnIphoneX: R.path(['assets', 'vrmuseum', 'viewingOnIphoneX']),
    })),
)(Appreciate);
