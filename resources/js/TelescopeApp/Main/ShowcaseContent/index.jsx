import React, {useEffect, useRef} from "react";
import * as R from "ramda";

import useShowcase from "../../hooks/useShowcase";
import HR from "../../components/HR";
import Container from "../../components/Container";
import Scrollable from "../../components/Scrollable";
import {
    Root,
    Content,
} from "./styled";
import CloseButtonSection from "./CloseButtonSection";
import IframeSection from "./IframeSection";
import InformationDivider from "./InformationDivider";
import InformationSection from "./InformationSection";
import ImagesSection from "./ImagesSection";
import RelatedSection from "./RelatedSection";

import type {Node} from "react";
import type {Showcase, ReactRef} from "../../types";
import YouTubeVideo from "./InformationSection/YouTubeVideo";

type Props = {|  |};

type ScrollableRef = ReactRef<Scrollable>;

const jumpToTop = R.pipe<[ScrollableRef], null, ?Scrollable, any>(
    R.prop('current'),
    R.when(
        R.is(Scrollable),
        R.invoker(0, 'jumpToTop')
    ),
    R.always(null)
);

export default function ShowcaseContent(props: Props): Node | null {
    const showcase: Showcase = useShowcase();
    const scrollableRef: ScrollableRef = useRef(null);

    useEffect(() => {
        jumpToTop(scrollableRef);
    }, [showcase]);

    if (!showcase) { return null; }
    return (
        <Root>
            <Scrollable ref={scrollableRef}>
                <Content>
                    <Container>
                        <HR.Black />
                        <CloseButtonSection />
                    </Container>
                    <IframeSection />
                    <Container>
                        <InformationDivider>
                            <ImagesSection />
                            <InformationSection />
                        </InformationDivider>
                        <HR.LightGrey />
                        <br />
                        <RelatedSection />
                    </Container>
                </Content>
            </Scrollable>
        </Root>
    );
};
