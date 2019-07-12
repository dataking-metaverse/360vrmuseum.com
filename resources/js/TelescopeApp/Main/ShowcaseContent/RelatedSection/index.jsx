import React from "react";
import * as R from "ramda";
import styled from "styled-components";

import SectionTitle from "../../../components/SectionTitle";
import ImageGrid, {Image as GridImage} from "../../../components/ImageGrid";
import useRelatedShowcases from "../../../hooks/useRelatedShowcases";
import useReduxAction from "../../../hooks/useReduxAction";

import {updateShowcase as updateShowcaseAction} from "../../../redux/actionCreators";
import type {Showcase} from "../../../types";

type Props = {||};

type ShowcaseThumbLinksProps = {|  |};

const paddingBottom = R.path(['theme', 'showcaseContent', 'relatedSection', 'paddingBottom']);
const Root = styled.div`
    padding-bottom: ${paddingBottom}rem;
`;

const Image = styled(GridImage)`
    width: 45rem;
    height: 25.1rem;
`;

function ShowcaseThumbLinks(props: ShowcaseThumbLinksProps) {
    const updateShowcase = useReduxAction(updateShowcaseAction);
    const relatedShowcases = useRelatedShowcases();
    const images = relatedShowcases.map((showcase: Showcase, index: number) => (
        <Image
            key={index}
            src={showcase.list_of_images[0].thumb}
            onClick={() => updateShowcase(showcase)}
        />
    ));
    return ( <ImageGrid>{images}</ImageGrid> );
}



function RelatedSection(props: Props) {
    return (
        <Root>
            <SectionTitle>국립중앙박물관의 다른 전시</SectionTitle>
            <ShowcaseThumbLinks />
        </Root>
    );
}

export default RelatedSection;
