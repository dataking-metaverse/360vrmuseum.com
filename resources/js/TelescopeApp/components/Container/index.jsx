import React from "react";
import * as R from "ramda";
import styled from "styled-components";


type Props = {  };

const containerWidth = R.path(['theme', 'container', 'width']);
const Root = styled.div`
    position: relative;
    margin: auto;
    width: ${containerWidth}rem;
`;

export default function Container(props: Props) {
    return <Root {...props} />
};
