import React from "react";
import styled, {keyframes} from "styled-components";
import * as R from "ramda";

import {themeVar} from "~/styling/theme/functions";

import type {Node} from "react";

type Props = {
    cover?: boolean,
    transparentBackground?: boolean,
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

const backgroundColor = R.ifElse(
    R.prop('transparentBackground'),
    R.always('transparent'),
    themeVar('colors.basic.white')
);

const spinning = keyframes`
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
`;

const Root = styled.div`
    background-color: ${backgroundColor};
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

function LoadingSpinner(props: Props): Node {
    if (props.hasOwnProperty('cover') && props.cover) { return ( <Cover {...props} /> ); }
    return ( <Normal {...props} /> );
}

LoadingSpinner.defaultProps = {
    transparentBackground: false,
};

export default LoadingSpinner;

