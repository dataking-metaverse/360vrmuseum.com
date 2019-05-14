import React from "react";
import useShowcase from "../../../hooks/useShowcase";

import {
    Root,
    Image,
} from "./styled";
import type {Showcase} from "../../../types";

export default function ImagesSection(props: Props): Node {
    const showcase: Showcase = useShowcase();
    const images = showcase.list_of_images;
    return (
        <Root>
            {images.map(image => (
                <Image key={image} src={image} />
            ))}
        </Root>
    );
}
