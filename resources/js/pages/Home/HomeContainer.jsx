import React from "react";
import styled from "styled-components";
import {Container} from "styled-bootstrap-grid";
import * as R from "ramda";

import type {Node} from "react";


type Props = {
    children: Node,
    containerProps: {},
};

const Root = styled.div`
    padding: 10rem 4.5rem;
`;

export default function HomeConatainer(props: Props) {
    return (
        <Root {...R.omit(['containerProps', 'children'])(props)}>
            <Container {...props.containerProps}>
                {props.children}
            </Container>
        </Root>
    );
}
