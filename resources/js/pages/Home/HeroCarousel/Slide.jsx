import React from "react";
import styled from "styled-components";
import * as R from "ramda";


type Props = {
    backgroundImage: string,
};

const Root = styled.div`
    position: relative;
    height: 44rem;
    background-image: ${R.path(['backgroundImage'])};
    background-size: cover;
    background-position: 50% 50%;
`;


export default class Slide extends React.Component<Props> {
    render() {
        return (
            <Root backgroundImage={this.props.backgroundImage}>

            </Root>
        );
    }
}
