import React from "react";
import * as R from "ramda";
import {connect} from "react-redux";
import styled from "styled-components";
import {Container, media} from "styled-bootstrap-grid";

import Title from "../components/Title";
import Intro from "../components/Intro";
import makeSrcset from "../../../helpers/makeSrcset";

import type {ResponsiveImage} from "../../../assets";
import FadeInComponent from "../../../components/FadeInComponent";
import {percentage} from "../../../styling/theme/functions";
import buildFadeComponent from "../../../helpers/buildFadeComponent";


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
    max-width: 100%;
    margin: auto;
    margin-bottom: 3rem;
    
    ${media.md`
        padding: 0 3rem 3rem;
    `}
`;

const LogoWrapper = buildFadeComponent('div')`
    margin-bottom: 8rem;
`;

const UniversityLogoWrap = styled.a`
    position: relative;
    width: 18rem;
    display: inline-block;
    
    &:before {
        content: '';
        position: relative;
        display: block;
        padding-top: ${percentage(9.4 * 100 / 18 )};
    }
`;

const UniversityLogo = styled.img`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
`;

const ViewingOnIphoneX = buildFadeComponent('img')`
    width: 61.2rem;
    max-width: 100%;
`;


const UniversityLogos = R.compose(
    connect(R.applySpec({
        logos: R.path(['assets', 'vrmuseum', 'universityLogos']),
        links: R.path(['config', 'pages', 'home', 'appreciate', 'universityLinks'])
    })),
)(function UniversityLogos(props: UniversityLogosProps) {
    return props.logos.map(({src, srcSetObject}, index) => (
        <UniversityLogoWrap
            key={index}
            href={props.links[index]}
            target="_blank"
        >
            <UniversityLogo
                src={src}
                srcSet={makeSrcset(srcSetObject)}
            />
        </UniversityLogoWrap>
    ));
});

function Appreciate(props: Props) {
    const {text} = props;
    return (
        <ContainerCenter>
            <Wrapper>
                <Title dangerouslySetInnerHTML={{__html: text.title}} />
                <Intro delay={200} dangerouslySetInnerHTML={{__html: text.intro}} />
            </Wrapper>
            <LogoWrapper delay={400}>
                <UniversityLogos />
            </LogoWrapper>
                <ViewingOnIphoneX delay={600} src={props.viewingOnIphoneX} />
        </ContainerCenter>
    );
}

export default R.compose(
    connect(R.applySpec({
        text: R.path(['lang', 'pages', 'vrmuseum', 'appreciate']),
        viewingOnIphoneX: R.path(['assets', 'vrmuseum', 'viewingOnIphoneX']),
    })),
)(Appreciate);
