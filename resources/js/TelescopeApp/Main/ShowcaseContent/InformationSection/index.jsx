import React from "react";

import {
    Root,
    EngTitle,
    KorTitle,
    MuseumName,
    DateAndStatistics,
    DatePeriod,
    Statistics,
    StatisticsItem,
    Hr,
    IsPerformingAvailable,
    IsConversationAvailable,
    IsPaidExhibition,
} from "./styled";
import useShowcase from "../../../hooks/useShowcase";

import type {Node} from "react";
import type {Showcase} from "../../../types";

export default function InformationSection(props: Props): Node {
    const showcase: Showcase = useShowcase();
    const {statistics} = showcase;
    console.log(showcase);
    return (
        <Root>
            <EngTitle>{showcase.eng_title}</EngTitle>
            <KorTitle>{showcase.kor_title}</KorTitle>
            <MuseumName>{showcase.presented_by}</MuseumName>
            <DateAndStatistics>
                <DatePeriod>{showcase.date}</DatePeriod>
                <Statistics>
                    <StatisticsItem>조회 {statistics.impressions}</StatisticsItem>
                    <StatisticsItem>방문 {statistics.unique_visitors}</StatisticsItem>
                    <StatisticsItem>재방문 {statistics.visits}</StatisticsItem>
                </Statistics>
            </DateAndStatistics>
            <Hr />
            {showcase.is_performing && <IsPerformingAvailable>공연</IsPerformingAvailable>}
            {showcase.is_conversation && <IsConversationAvailable>강연</IsConversationAvailable>}
            {showcase.is_paid && <IsPaidExhibition>유료전시</IsPaidExhibition>}
        </Root>
    );
}
