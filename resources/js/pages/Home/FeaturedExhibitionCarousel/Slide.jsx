import React from "react";
import styled from "styled-components";
import * as R from "ramda";

import type {Node} from "react";


type Props = {
    children: Node,
};

const Root = styled.a`
    display: block;
    padding-left: .85rem;
    padding-right: .85rem;
`;


export default function Slide(props: Props) {
    return (
        <Root>
            {props.children}
        </Root>
    );
}
