import React from "react";
import styled from "styled-components";
import * as R from "ramda";

import {updateLightBoxImageIndex as updateLightBoxImageIndexAction} from "../../../redux/actionCreators";
import useReduxAction from "../../../hooks/useReduxAction";
import useShowcase from "../../../hooks/useShowcase";
import ImageGrid, {Image} from "../../../components/ImageGrid";

import type {Node} from "react";
import type {ImageItem, ListOfImages, Showcase} from "../../../types";

type Props = {|

|};

const paddingBottom = R.path(['theme', 'showcaseContent', 'imagesSection', 'paddingBottom']);
const Root = styled.div`
    margin-bottom: ${paddingBottom}rem;
`;

const useImageThumbnails = R.pipe<[], Array<string>, Showcase, ListOfImages>(
    useShowcase,
    R.prop<'list_of_images', Showcase>('list_of_images'),
    R.pluck<ImageItem, 'thumb'>('thumb')
);

export default function ImagesSection(props: Props): Node {
    const imageThumbnails: Array<string> = useImageThumbnails();
    const updateLightBoxImageIndex = useReduxAction(updateLightBoxImageIndexAction);
    return (
        <Root>
            <ImageGrid>
                {imageThumbnails.map((thumb: string, index: number) => (
                    <Image key={thumb} src={thumb} onClick={() => updateLightBoxImageIndex(index)} />
                ))}
            </ImageGrid>
        </Root>
    );
}
