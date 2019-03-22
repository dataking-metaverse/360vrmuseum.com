import React, {useState, useEffect} from "react";
import {createGlobalStyle} from "styled-components";
import {media} from "styled-bootstrap-grid";
import * as R from "ramda";
import noSSR from "../decorators/noSSR";


const sansSerif = R.path(['theme', 'variables', 'fontFamily', 'base']);

const color = R.pipe(
    R.append(R.__, ['theme', 'variables', 'colors', 'basic']),
    R.path
);

const width = R.path(['width']);

const Style = createGlobalStyle`

body:after {
    content: 'xs : 0 - 575px (now: ${width}px)';
    position: fixed;
    bottom: 0;
    right: 0;
    color: ${color('white')};
    font-size: 16px;
    padding: 4px 8px;
    margin: 10px;
    background-color: ${color('blue')};
    font-family: ${sansSerif};
    z-index: 100000000;
    opacity: 1;
    transition: opacity .2s;
    
    &:hover {
        opacity: .2;
    }
    
    ${media.sm`
        content: 'sm : 576px - 767px (now: ${width}px)';
        background-color: ${color('indigo')};
    `}
    
    ${media.md`
        content: 'md : 768px - 991px (now: ${width}px)';
        background-color: ${color('pink')};
    `}
    
    ${media.lg`
        content: 'lg : 992px - 1199px (now: ${width}px)';
        background-color: ${color('orange')};
    `}
    
    ${media.xl`
        content: 'xl : 1200px -  (now: ${width}px)';
        background-color: ${color('red')};
    `}
}

`;


function DebugBreakpoints() {
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        const updateWidth = () => setWidth(window.innerWidth);
        window.addEventListener('resize', updateWidth);
        return () => window.removeEventListener('resize', updateWidth);
    });

    return <Style width={width} />;
}

export default R.compose(
    noSSR,
)(DebugBreakpoints);
