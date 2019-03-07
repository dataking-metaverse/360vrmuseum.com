import React, {useState, useEffect} from "react";
import * as R from "ramda";
import {connect} from "react-redux";
import styled from "styled-components";

import FadeInComponent from "../../../components/FadeInComponent";


type Props = {
    image: string,
    text: {
        title: string,
        subtitle: string,
    },
};

const image = R.path(['image']);
const Root = styled.div`
    height: 144rem;
    background-image: url(${image});
    background-position: 50% 50%;
    background-size: cover;
`;


const TitleWrapper = styled.div`
    padding-top: 16.8rem;
    color: #ffffff;
    text-align: center;
`;
const Title = styled.h1`
    font-size: 7.6rem;
`;
const Subtitlte = styled.div`
    font-size: 1.8rem;
`;

function Hero(props: Props) {

    const [transactionIn, setIn] = useState(false);

    useEffect(() => {
        window.setTimeout(() => setIn(true), 10000);
    });

    const {text} = props;
    return (
        <Root image={props.image}>
            <FadeInComponent>
                <TitleWrapper>
                    <Title>{text.title}</Title>
                    <Subtitlte dangerouslySetInnerHTML={{__html: text.subtitle}} />
                </TitleWrapper>
            </FadeInComponent>
        </Root>
    );
}

export default R.compose(
    connect(R.applySpec({
        image: R.path(['assets', 'vrmuseum', 'vrmuseumHeroImage']),
        text: R.path(['lang', 'pages', 'vrmuseum', 'hero'])
    })),
)(Hero);
