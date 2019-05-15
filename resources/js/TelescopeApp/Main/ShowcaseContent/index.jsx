import React from "react";

import useShowcase from "../../hooks/useShowcase";
import Scrollable from "../../components/Scrollable";
import {
    Root,
    Content,
} from "./styled";
import CloseButtonSection from "./CloseButtonSection";
import IframeSection from "./IframeSection";
import InformationSection from "./InformationSection";
import ImagesSection from "./ImagesSection";

import type {Showcase} from "../../types";

type Props = {|
    activeShowcase: Showcase,
|};

export default function ShowcaseContent(props: Props) {
    const showcase = useShowcase();
    if (!showcase) { return null; }
    return (
        <Root>
            <Scrollable>
                <Content>
                    <CloseButtonSection />
                    <IframeSection />
                    <InformationSection />
                    <ImagesSection />
                </Content>
            </Scrollable>
        </Root>
    );
}
