import React, {useEffect, useRef} from "react";
import * as R from "ramda";

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

import type {ComponentType} from "react";
import type {Showcase} from "../../types";

type Props = {|
    activeShowcase: Showcase,
|};

export default function ShowcaseContent(props: Props) {
    const showcase = useShowcase();
    const scrollableRef = useRef();

    useEffect(() => {
        const scrollable: ComponentType<Scrollable> | void = scrollableRef.current;
        if (R.is(React.Component, scrollable)) {
            scrollable.scrollToTop();
        }
    }, [showcase]);

    if (!showcase) { return null; }
    return (
        <Root>
            <Scrollable ref={scrollableRef}>
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
