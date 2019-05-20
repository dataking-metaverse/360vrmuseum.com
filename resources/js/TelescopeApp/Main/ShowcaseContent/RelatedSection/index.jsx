import React from "react";
import * as R from "ramda";
import styled from "styled-components";

import SectionTitle from "../../../components/SectionTitle";
import ImageGrid, {Image} from "../../../components/ImageGrid";
import useRelatedShowcases from "../../../hooks/useRelatedShowcases";
import useReduxAction from "../../../hooks/useReduxAction";

import type {StatelessComponent} from "react";
import {updateShowcase as updateShowcaseAction} from "../../../redux/actionCreators";

type Props = {||};

type ShowcaseThumbLinksProps = {||};

const paddingBottom = R.path(['theme', 'showcaseContent', 'relatedSection', 'paddingBottom']);
const Root = styled.div`
    padding-bottom: ${paddingBottom}rem;
`;

const ShowcaseThumbLinks: StatelessComponent<ShowcaseThumbLinksProps> = (props: Props) => {
    const updateShowcase = useReduxAction(updateShowcaseAction);
    const relatedShowcases = useRelatedShowcases();
    const images = relatedShowcases.map((showcase: Showcase, index: number) => (
        <Image
            key={index}
            src={showcase.list_of_images[0]}
            onClick={() => updateShowcase(showcase)}
        />
    ));
    return ( <ImageGrid>{images}</ImageGrid> );
};

const RelatedSection: StatelessComponent<Props> = props => (
    <Root>
        <SectionTitle>국립중앙박물관의 다른 전시</SectionTitle>
        <ShowcaseThumbLinks />
    </Root>
);

export default RelatedSection;
