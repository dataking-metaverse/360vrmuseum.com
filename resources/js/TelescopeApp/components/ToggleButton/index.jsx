import React from "react";
import styled from "styled-components";
import * as R from "ramda";

const minusHalf = R.divide(R.__, -2);

const width = R.path(['theme', 'toggleButton', 'width']);
const height = R.path(['theme', 'toggleButton', 'width']);
const arrowWidth = R.path(['theme', 'toggleButton', 'arrow', 'width']);
const arrowHeight = R.path(['theme', 'toggleButton', 'arrow', 'height']);
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
        width: ${arrowWidth}rem;
        height: ${arrowHeight}rem;
        margin-left: ${R.pipe(arrowWidth, minusHalf)}rem;
        margin-top: ${R.pipe(arrowHeight, minusHalf)}rem;
        background-image: url(${R.prop('src')});
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
