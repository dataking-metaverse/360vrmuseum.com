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

const paddingBottom = R.path(['theme', 'showcaseContent', 'imagesSection', 'paddingBottom']);
const Root = styled.div`
    margin-bottom: ${paddingBottom}rem;
`;

export default function ImagesSection(props: Props): Node {
    const showcase: Showcase = useShowcase();
    const updateLightBoxImageIndex = useReduxAction(updateLightBoxImageIndexAction);
    const images: Array<string> = showcase.list_of_images;
    return (
        <Root>
            <ImageGrid>
                {images.map((image: string, index: number) => (
                    <Image key={image} src={image} onClick={() => updateLightBoxImageIndex(index)} />
                ))}
            </ImageGrid>
        </Root>
    );
}
