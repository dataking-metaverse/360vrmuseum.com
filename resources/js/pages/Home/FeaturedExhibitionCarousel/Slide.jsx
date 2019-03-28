import React from "react";
import styled from "styled-components";
import * as R from "ramda";

import type {Node} from "react";


type Props = {
    children: Node,
};

const Root = styled.div`
    display: block;
    padding-left: ${R.prop('padding')};
    padding-right: ${R.prop('padding')};
`;


export default function Slide(props: Props) {
    const {padding = '.85rem'} = props;
    return (
        <Root padding={padding}>
            {props.children}
        </Root>
    );
}
