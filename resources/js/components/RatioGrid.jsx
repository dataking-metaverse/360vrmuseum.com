import React from "react";
import styled from "styled-components";
import * as R from "ramda";

import type {Node} from "react";

type Props = {
    children: Node,
    className: ?string,
    ratio: number,
};

const Root = styled.div`
    position: relative;
    
    &:after {
        content: '';
        display: block;
        padding-bottom: ${R.prop('ratio')};
    }
`;

const Inner = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
`;


export default function RatioGrid(props: Props) {
    const {ratio, children, ...restProps} = props;
    return (
        <Root {...restProps} ratio={`${ratio * 100}%`}>
            <Inner>
                {children}
            </Inner>
        </Root>
    );
}
