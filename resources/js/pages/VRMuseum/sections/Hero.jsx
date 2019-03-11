import React, {useState, useEffect} from "react";
import * as R from "ramda";
import {connect} from "react-redux";
import styled from "styled-components";
import {Container, media} from "styled-bootstrap-grid";

import FadeInComponent from "../../../components/FadeInComponent";
import faded from "../../../helpers/faded";


type Props = {
    image: string,
    text: {
        title: string,
        subtitle: string,
    },
};

const image = R.path(['image']);
const Root = styled.div`
    height: 57rem;
    background-image: url(${image});
    background-position: 50% 50%;
    background-size: cover;
    
    ${media.sm`
        height: 84rem;
    `}
    
    ${media.lg`
        height: 144rem;
    `}
`;


const TitleWrapper = faded('div')`
    position: relative;
    top: .1rem;
    color: #ffffff;
    text-align: center;
    
    ${media.sm`
        top: 4.8rem;
    `}
    
    ${media.lg`
        top: 16.8rem;
    `}
`;

const Title = styled.h1`
    font-size: 4rem;
    margin: 0;
    padding: .67em 0;
    
    
    ${media.sm`
        font-size: 5.4rem;
    `}
    
    ${media.lg`
        font-size: 7.6rem;
    `}
`;
const Subtitlte = styled.div`
    font-size: 1.2rem;
    width: 49rem;
    max-width: 100%;
    margin: auto;
    
    ${media.lg`
        font-size: 1.8rem;
        width: 74rem;
    `}
`;

function Hero(props: Props) {

    const [transactionIn, setIn] = useState(false);

    useEffect(() => {
        window.setTimeout(() => setIn(true), 10000);
    });

    const {text} = props;
    return (
        <Root image={props.image}>
            <Container>
                <TitleWrapper>
                    <Title>{text.title}</Title>
                    <Subtitlte dangerouslySetInnerHTML={{__html: text.subtitle}} />
                </TitleWrapper>
            </Container>
        </Root>
    );
}

export default R.compose(
    connect(R.applySpec({
        image: R.path(['assets', 'vrmuseum', 'vrmuseumHeroImage']),
        text: R.path(['lang', 'pages', 'vrmuseum', 'hero'])
    })),
)(Hero);
