import * as R from "ramda";
import {Link} from "react-router-dom";
import styled from "styled-components";
import {rgba, ellipsis} from "polished";

import {percentage} from "~/styling/theme/functions";


export const Root = styled.div`
    position: relative;
    border-radius: 0.4rem;
    margin-bottom: 6rem;
    background-color: #ffffff;
    color: #666666;
`;

export const Detail = styled.div`
    padding: 1.8rem 2rem;
`;

export const Type = styled.div`
    font-size: 1.3rem;
    line-height: 1;
    cursor: default;
`;

export const Title = styled.h3`
    margin-top: .2rem;
    margin-bottom: 0;
    cursor: pointer;
    font-size: 1.7rem;
    font-weight: normal;
    line-height: normal;
    ${ellipsis('100%')}
`;

export const Subtitle = styled.h4`
    margin-top: 0;
    margin-bottom: 2.6rem;
    font-weight: normal;
    line-height: normal;
    ${ellipsis('100%')}
`;

export const PresentedBy = styled.div`
    font-size: 1.2rem;
    margin-bottom: .7rem;
    cursor: default;
`;

export const Period = styled.div`
    font-size: 1.2rem;
    margin-bottom: 1rem;
    cursor: default;
`;

export const LinkShadow = styled(Link)`
    position: absolute;
    display: flex;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;
    background-color: #1b1b1b;
    opacity: 0;
    transition: opacity .4s;
    text-decoration: none;
    z-index: 1;
    
    &:hover {
        opacity: 0.77;
    }
`;

export const LinkText = styled.div`
    color: #ffffff;
    letter-spacing: normal;
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
