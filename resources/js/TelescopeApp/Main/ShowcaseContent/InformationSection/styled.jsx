import React from "react";
import styled from "styled-components";
import * as R from "ramda";

import MiddleSpan from "../../../components/MiddleSpan";
import {topBorder} from "../../../styling/mixins";

const path = R.pipe(
    R.concat(['theme', 'showcaseContent', 'informationSection']),
    R.path,
);

const half = R.divide(R.__, 2);

const marginBottom = path(['marginBottom']);
const paddingLeft = path(['paddingLeft']);
export const Root = styled.div`
    margin-bottom: ${marginBottom}rem;
    padding-left: ${paddingLeft}rem;
`;


export const EngTitle = (() => {
    const color = path(['engTitle', 'color']);
    const fontSize = path(['engTitle', 'fontSize']);
    const marginBottom = path(['engTitle', 'marginBottom']);
    return styled.div`
        color: ${color};
        font-size: ${fontSize}rem;
        margin-bottom: ${marginBottom}rem;    
    `;
})();

export const KorTitle = (() => {
    const color = path(['korTitle', 'color']);
    const fontSize = path(['korTitle', 'fontSize']);
    const marginBottom = path(['korTitle', 'marginBottom']);
    return styled.div`
        color: ${color};
        font-size: ${fontSize}rem;
        margin-bottom: ${marginBottom}rem;    
    `;
})();


export const MuseumName = (() => {
    const color = path(['museumName', 'color']);
    const fontSize = path(['museumName', 'fontSize']);
    const marginBottom = path(['museumName', 'marginBottom']);
    return styled.div`
        color: ${color};
        font-size: ${fontSize}rem;
        margin-bottom: ${marginBottom}rem;    
    `;
})();

const dateAndStatisticsMarginBottom = path(['dateAndStatistics', 'marginBottom']);
export const DateAndStatistics = styled.div`
    display: table;
    table-layout: fixed;
    width: 100%;
    margin-bottom: ${dateAndStatisticsMarginBottom}rem;
    
    > * {
        display: table-cell;
        width: 50%;
        vertical-align: bottom;
    }
`;

export const DatePeriod = (() => {
    const color = path(['datePeriod', 'color']);
    const fontSize = path(['datePeriod', 'fontSize']);
    return styled.div`
        color: ${color};
        font-size: ${fontSize}rem;
    `;
})();

export const Statistics = (() => {
    const color = path(['statistics', 'color']);
    const fontSize = path(['statistics', 'fontSize']);
    return styled.div`
        color: ${color};
        font-size: ${fontSize}rem;
        text-align: right;
    `;
})();

export const StatisticsItem = (() => {
    const marginRight = path(['statisticsItem', 'marginRight']);
    return styled.div`
        display: inline-block;
        margin-right: ${marginRight}rem;
        
        &:last-child { margin-right: 0; }
    `;
})();

const hrMarginBottom = path(['hr', 'marginBottom']);
export const Hr = styled.div`
    ${topBorder}
    margin-bottom: ${hrMarginBottom}rem;
`;

const DetailPoint = (() => {
    const marginRight = path(['detailPoint', 'marginRight']);
    const fontSize = path(['detailPoint', 'fontSize']);
    const dotColor = path(['detailPoint', 'dotColor']);
    const dotWidth = path(['detailPoint', 'dotWidth']);
    const dotMarginRight = path(['detailPoint', 'dotMarginRight']);
    return styled.div`
        display: inline-block;
        vertical-align: middle;
        margin-right: ${marginRight}rem;
        font-size: ${fontSize}rem;
        
        &:before {
            content: '';
            display: inline-block;
            vertical-align: middle;
            width: ${dotWidth}rem;
            height: ${dotWidth}rem;
            margin-right: ${dotMarginRight}rem;
            border-radius: ${R.pipe(dotWidth, half)}rem;
            background-color: ${dotColor};
        }
    `;
})();
export const IsPerformingAvailable = ({children}) => ( <DetailPoint><MiddleSpan>{children}</MiddleSpan></DetailPoint> );
export const IsConversationAvailable = ({children}) => ( <DetailPoint><MiddleSpan>{children}</MiddleSpan></DetailPoint> );
export const IsPaidExhibition = ({children}) => ( <DetailPoint><MiddleSpan>{children}</MiddleSpan></DetailPoint> );
