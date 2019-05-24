import React from "react";
import styled from "styled-components";
import * as R from "ramda";

import {updateLightBoxImageIndex as updateLightBoxImageIndexAction} from "../../../redux/actionCreators";
import useReduxAction from "../../../hooks/useReduxAction";
import useShowcase from "../../../hooks/useShowcase";
import ImageGrid, {Image} from "../../../components/ImageGrid";

import type {Node} from "react";
import type {Showcase} from "../../../types";

type Props = {|

|};

type ListOfImagesType = $ElementType<Showcase, 'list_of_images'>;

const paddingBottom = R.path(['theme', 'showcaseContent', 'imagesSection', 'paddingBottom']);
const Root = styled.div`
    margin-bottom: ${paddingBottom}rem;
`;

const useImageThumbnails = R.pipe<any, Array<string>>(
    useShowcase,
    R.prop<Showcase, 'list_of_images'>('list_of_images'),
    R.pluck<'thumb', ListOfImagesType>('thumb')
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
