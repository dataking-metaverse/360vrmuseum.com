import React from "react";
import styled from "styled-components";
import * as R from "ramda";
import {flexMiddle, flexCenter} from "../../../styling/theme/mixins";


type Props = {
    backgroundImage: string,
    title: string,
    subtitle: string,
};

const Root = styled.div`
    ${flexMiddle()}
    ${flexCenter()}
    position: relative;
    height: 44rem;
    background-image: ${R.path(['backgroundImage'])};
    background-size: cover;
    background-position: 50% 50%;
`;

const Title = styled.h2`

`;

const Subtitle = styled.div`

`;


export default class Slide extends React.Component<Props> {
    render() {
        return (
            <Root backgroundImage={this.props.backgroundImage}>
                <Title>{this.props.title}</Title>
                <Subtitle>{this.props.subtitle}</Subtitle>
            </Root>
        );
    }
}
