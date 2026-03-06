import React from "react";
import styled from "styled-components";
import * as R from "ramda";

import half from "../../../functions/half";
import MiddleSpan from "../../../components/MiddleSpan";
import {topBorder} from "../../../styling/mixins";

import type {ComponentType, Node} from "react";

const path = R.pipe(
    R.concat(['theme', 'showcaseContent', 'informationSection']),
    R.path,
);

const marginBottom = path(['marginBottom']);
export const Root = styled.div`
    margin-bottom: ${marginBottom}rem;
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

const showcaseDetailsMarginBottom = path(['showcaseDetails', 'marginBottom']);
export const ShowcaseDetails = styled.div`
    margin-bottom: ${showcaseDetailsMarginBottom}rem;
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
const DetailPointComponent: ComponentType<{children: Node}> = ({children}) => ( <DetailPoint><MiddleSpan>{children}</MiddleSpan></DetailPoint> );
export const IsPerformingAvailable = DetailPointComponent;
export const IsConversationAvailable = DetailPointComponent;
export const IsPaidExhibition = DetailPointComponent;


export const Description = (() => {
    const fontSize = path(['description', 'fontSize']);
    const lineHeight = path(['description', 'lineHeight']);
    const marginBottom = path(['description', 'marginBottom']);
    return styled.div`
        font-size: ${fontSize}rem;
        line-height: ${lineHeight};
        margin-bottom: ${marginBottom}rem;
        white-space: pre-wrap;
    `;
})();

export const AdditionalInformationTitle = (() => {
    const fontSize = path(['additionalInformationTitle', 'fontSize']);
    const color = path(['additionalInformationTitle', 'color']);
    return styled.div`
        font-size: ${fontSize}rem;
        color: ${color};
    `;
})();

export const AdditionalInformation = (() => {
    const fontSize = path(['additionalInformation', 'fontSize']);
    return styled.div`
        font-size: ${fontSize}rem;
        
        span[style*='font-size:'] {
            font-size: ${fontSize}rem !important;
        }
    `;
})();
