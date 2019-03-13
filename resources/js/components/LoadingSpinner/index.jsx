import React from "react";
import styled, {keyframes} from "styled-components";

import {themeVar} from "../../styling/theme/functions";

import type {Node} from "react";

type Props = {
    cover: ?boolean,
};

const style = {
    spinner: {
        length: 5,
        width: .4,
    },
    normal: {
        paddingX: 3,
    }
};

const spinning = keyframes`
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
`;

const Root = styled.div`
    background-color: ${themeVar('colors.basic.white')};
    text-align: center;
    
    &:before {
        content: '';
        display: inline-block;
        width: ${style.spinner.length}rem;
        height: ${style.spinner.length}rem;
        border-width: ${style.spinner.width}rem;
        border-color: rgba(0,0,0,.3);
        border-top-color: rgba(0,0,0,.9);
        border-style: solid;
        border-radius: ${style.spinner.length}rem;
        animation: ${spinning} .8s linear Infinite;
    }
`;

const Cover = styled(Root)`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    
    &:before {
        position: absolute;
        top: 50%;
        left: 50%;
        margin: -${style.spinner.length / 2}rem;
    }
`;

const Normal = styled(Root)`
    position: relative;
    padding-top: ${style.normal.paddingX}rem;
    padding-bottom: ${style.normal.paddingX}rem;
`;

export default function LoadingSpinner(props: Props): Node {
    if (props.cover) { return ( <Cover /> ); }
    return ( <Normal /> );
}
