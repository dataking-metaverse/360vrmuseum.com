import React from "react";
import * as R from "ramda";
import {connect} from "react-redux";
import styled from "styled-components";


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
    padding-top: 50rem;
    color: #ffffff;
    text-align: center;
`;
const Title = styled.h1``;
const Subtitlte = styled.div``;

function Hero(props: Props) {
    const {text} = props;
    return (
        <Root image={props.image}>
            <TitleWrapper>
                <Title>{text.title}</Title>
                <Subtitlte dangerouslySetInnerHTML={{__html: text.subtitle}} />
            </TitleWrapper>
        </Root>
    );
}

export default R.compose(
    connect(R.applySpec({
        image: R.path(['assets', 'vrmuseumHeroImage']),
        text: R.path(['lang', 'pages', 'vrmuseum', 'hero'])
    })),
)(Hero);
