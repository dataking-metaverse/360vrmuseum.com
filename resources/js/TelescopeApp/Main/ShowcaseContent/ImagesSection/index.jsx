import React from "react";

import {updateLightBoxImageIndex as updateLightBoxImageIndexAction} from "../../../redux/actionCreators";
import useReduxAction from "../../../hooks/useReduxAction";
import useShowcase from "../../../hooks/useShowcase";
import {
    Root,
    Image,
} from "./styled";

import type {Node} from "react";
import type {Showcase} from "../../../types";

type Props = {|

|};

export default function ImagesSection(props: Props): Node {
    const showcase: Showcase = useShowcase();
    const updateLightBoxImageIndex = useReduxAction(updateLightBoxImageIndexAction);
    const images: Array<string> = showcase.list_of_images;
    return (
        <Root>
            {images.map((image: string, index: number) => (
                <Image key={image} src={image} onClick={() => updateLightBoxImageIndex(index)} />
            ))}
        </Root>
    );
}
