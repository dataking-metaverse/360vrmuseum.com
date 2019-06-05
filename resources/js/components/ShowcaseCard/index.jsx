import React from "react";
import {Row, Col} from "styled-bootstrap-grid";

import useLangPath from "~/hooks/useLangPath";
import Showcase from "~/models/Showcase";
import {
    Root,
    Type as TypeAttr,
    Title,
    PresentedBy,
    Period,
    Impression,
    ViewDetails,
    DetailWrapper,
} from "./styled";
import Image from "./Image";

export type Type = 'thumbnail' | 'poster';
type Props = {|
    showcase: Showcase,
    type: Type,
|};

export default function ShowcaseCard(props: Props) {
    const {showcase, type} = props;
    const text = useLangPath(['pages', 'home', 'specialExhibition']);
    const impressionsText = useLangPath(['common', 'impressions']);
    const {
        type: typeAttr,
        main_title: mainTitle,
        location,
        presented_by: presentedBy,
        date,
        statistics,
    } = showcase.props;
    const showcaseRoute = showcase.route();
    return (
        <Root>
            <Image showcase={showcase} type={type} />
            <DetailWrapper>
                <TypeAttr>{typeAttr}</TypeAttr>
                <Title>{mainTitle}</Title>
                <PresentedBy>{location}{', '}{presentedBy}</PresentedBy>
                <Period>{date}</Period>
                <hr />
                <Row>
                    <Col col={6}>
                        <Impression>{impressionsText} {statistics.impressions}</Impression>
                    </Col>
                    <Col col={6} className="text-right">
                        <ViewDetails to={showcaseRoute}>{text.viewDetails}{' >'}</ViewDetails>
                    </Col>
                </Row>
            </DetailWrapper>
        </Root>
    );
};

ShowcaseCard.defaultProps = {
    type: 'thumbnail',
};
