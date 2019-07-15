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
import {Header, Logo} from "../ShowcaseMenu/styled";
import {scopeLogo} from "../../assets";
import useReduxAction from "../../hooks/useReduxAction";
import {emptyShowcase as emptyShowcaseAction} from "../../redux/actionCreators";

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
    const emptyShowcase = useReduxAction(emptyShowcaseAction);

    useEffect(() => {
        jumpToTop(scrollableRef);
    }, [showcase]);

    if (!showcase) { return null; }
    return (
        <Root>
            <Scrollable ref={scrollableRef}>
                <Content>
                    <Container>
                        <Header>
                            <Logo
                                src={scopeLogo}
                                onClick={emptyShowcase}
                            />
                        </Header>
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
                        <Footer />
                    </Container>
                </Content>
            </Scrollable>
        </Root>
    );
};
