import React from "react";
import * as R from "ramda";

import useLangPath from "~/hooks/useLangPath";
import Showcase from "~/models/Showcase";
import {
    Root,
    Detail,
    Type as TypeAttr,
    Title,
    Subtitle,
    PresentedBy,
    Period,
    LinkShadow,
    LinkText,
} from "./styled";
import Image from "./Image";

export type Type = 'thumbnail' | 'poster';
type Props = {|
    showcase: Showcase,
    type: Type,
|};

const getDetail = R.pipe(
    R.prop('props'),
    R.applySpec({
        typeAttr: R.prop('type'),
        mainTitle: R.prop('main_title'),
        presentedBy: R.prop('presented_by'),
        date: R.prop('date'),
    })
);

const splitTitle = R.o(R.map(R.trim), R.split("\n"));

export default function ShowcaseCard(props: Props) {
    const {showcase, type} = props;
    const linkText = useLangPath(['common', 'quickView']);
    const detail = getDetail(showcase);
    const showcaseRoute = showcase.route();
    const [title, subtitle] = splitTitle(detail.mainTitle);
    return (
        <Root>
            <Image showcase={showcase} type={type} />
            <Detail>
                <TypeAttr>{detail.typeAttr}</TypeAttr>
                <Title>{title}</Title><br />
                <Subtitle>{subtitle}&nbsp;</Subtitle>
                <PresentedBy>{detail.presentedBy}</PresentedBy>
                <Period>{detail.date}</Period>
            </Detail>
            <LinkShadow to={showcaseRoute}><LinkText>{linkText}</LinkText></LinkShadow>
        </Root>
    );
};

ShowcaseCard.defaultProps = {
    type: 'thumbnail',
};
