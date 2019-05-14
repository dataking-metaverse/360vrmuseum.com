import React from "react";
import styled from "styled-components";
import * as R from "ramda";

import {close} from "../../assets";

const minusHalf = R.divide(R.__, -2);

const width = R.path(['theme', 'closeButton', 'width']);
const height = R.path(['theme', 'closeButton', 'width']);
const crossWidth = R.path(['theme', 'closeButton', 'cross', 'width']);
const crossHeight = R.path(['theme', 'closeButton', 'cross', 'height']);
const ToggleButton = styled.div`
    position: relative;
    display: inline-block;
    width: ${width}rem;
    height: ${height}rem;
    
    &:before {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        width: ${crossWidth}rem;
        height: ${crossHeight}rem;
        margin-left: ${R.pipe(crossWidth, minusHalf)}rem;
        margin-top: ${R.pipe(crossHeight, minusHalf)}rem;
        background-image: url(${close});
        background-size: contain;
        background-position: 50% 50%;
        transform: rotate(${R.ifElse(
            R.prop('open'),
            R.always('0'),
            R.always('90deg'),
        )});
    }
`;

export default ToggleButton;
