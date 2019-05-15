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
    Description,
    ShowcaseDetails,
    IsPerformingAvailable,
    IsConversationAvailable,
    IsPaidExhibition,
    AdditionalInformationTitle,
    AdditionalInformation,
} from "./styled";
import useShowcase from "../../../hooks/useShowcase";

import type {Node} from "react";
import type {Showcase} from "../../../types";

type Props = {|

|};

export default function InformationSection(props: Props): Node {
    const showcase: Showcase = useShowcase();
    const {statistics} = showcase;
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
            <ShowcaseDetails>
                {showcase.is_performing && <IsPerformingAvailable>공연</IsPerformingAvailable>}
                {showcase.is_conversation && <IsConversationAvailable>강연</IsConversationAvailable>}
                {showcase.is_paid && <IsPaidExhibition>유료전시</IsPaidExhibition>}
            </ShowcaseDetails>
            <Description>{showcase.description}</Description>
            <AdditionalInformationTitle>전시 연계 프로그램</AdditionalInformationTitle>
            <AdditionalInformation dangerouslySetInnerHTML={{__html: showcase.guide_information}} />
        </Root>
    );
}
