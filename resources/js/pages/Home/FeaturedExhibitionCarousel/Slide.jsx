import React from "react";
import styled from "styled-components";
import * as R from "ramda";


type Props = {
    backgroundImage: string,
    title: string,
    subtitle: string,
};

const Root = styled.div`
    position: relative;
    height: 30rem;
`;

const Image = styled.div`
    position: relative;
    height: 100%;
    background-image: url(${R.path(['backgroundImage'])});
    background-size: cover;
    background-position: 50% 50%;
    margin-left: 1.5rem;
    margin-right: 1.5rem;
`;

export default class Slide extends React.Component<Props> {
    render() {
        return (
            <Root>
                <Image backgroundImage={this.props.backgroundImage} />
            </Root>
        );
    }
}
