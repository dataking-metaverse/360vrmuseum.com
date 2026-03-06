import React from "react";
import * as R from "ramda";

import Showcase from "../../models/Showcase";
import ShowcaseHelmet from "./ShowcaseHelmet";
import ShowcaseContext from "./ShowcaseContext";
import ShowcaseIframe from "./ShowcaseIframe";
import ShowcasetTitleInformation from "./ShowcasetTitleInformation";
import ShowcaseData from "./ShowcaseData";
import ShowcaseDescription from "./ShowcaseDescription";
import ShowcaseImages from "./ShowcaseImages";
import ShowcaseDetails from "./ShowcaseDetails";
import ShowcaseRelated from "./ShowcaseRelated";
import CommentSection from "./CommentSection";

type Props = {
    showcase: Showcase | void,
};

export default function ShowcasePage(props: Props) {
    const {showcase} = props;
    return (
        <ShowcaseContext.Provider value={showcase}>
            <ShowcaseHelmet />
            <ShowcaseIframe />
            <ShowcasetTitleInformation />
            <ShowcaseData />
            <ShowcaseDescription />
            <ShowcaseImages />
            <ShowcaseDetails />
            <ShowcaseRelated />
            <CommentSection />
        </ShowcaseContext.Provider>
    );
}
