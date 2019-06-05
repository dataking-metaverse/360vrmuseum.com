import * as R from "ramda";
import {Link} from "react-router-dom";
import styled from "styled-components";
import {rgba} from "polished";

import {percentage, themeVar} from "~/styling/theme/functions";


export const Root = styled.div`
    background-color: white;
    border-radius: 0.4rem;
`;

export const Image = styled.div`
    position: relative;
    background-image: url(${R.prop('image')});
    background-size: cover;
    background-position: 50% 50%;

    &:before {
        content: '';
        display: block;
        padding-top: ${percentage(100 * 237 / 416)};
    }
    
    &:after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: ${rgba('#1f101f', .3)};
        opacity: 0;
        transition: opacity .4s;
    }
    
    &:hover:after {
        opacity: 1;
    }
`;

export const QuickView = styled(Link)`
    position: absolute;
    top: 50%;
    left: 50%;
    padding: 17% 0;
    letter-spacing: 1rem;
    font-weight: 500;
    color: #ffffff;
    cursor: pointer;
    transform: translate(-50%, -50%);
    text-decoration: none;
    transition: opacity .5s;
    z-index: 1;
    opacity: 0;
    &:hover {
        opacity: 1;
    }
`;

export const Type = styled.div`
    font-size: 1.3rem; 
    color: #4A0087;
    cursor: default;
`;

const titleLineHeight = 1.5;
export const Title = styled.h3`
    margin-top: .4em;
    min-height: ${titleLineHeight * 2}em;
    line-height: ${titleLineHeight};
    cursor: pointer;
    white-space: pre-wrap;
    font-size: .9em;
    
    &:first-line {
        font-size: initial;
    }
`;

export const PresentedBy = styled.div`
    font-size: 1.5rem;
    color: rgba(40, 40, 40, 0.91);
    margin-bottom: 1rem;
    cursor: default;
`;

export const Period = styled.div`
    color: rgb(153, 153, 153);
    font-size: 1.2rem;
    margin-bottom: 1rem;
    cursor: default;
`;

export const Impression = styled.span`
    font-size: 1.2rem;
    color: rgb(116, 116, 116);
    cursor: default;
`;

export const ViewDetails = styled(Link)`
    color: ${themeVar('colors.basic.purple')};
    font-size: 1.2rem;
    text-decoration: none;
    cursor: pointer;
    transition: all .5s;

    &:hover {
        transform: scale(1.1);
    }
`;

export const DetailWrapper = styled.div`
    padding: 1.5rem;
`;
