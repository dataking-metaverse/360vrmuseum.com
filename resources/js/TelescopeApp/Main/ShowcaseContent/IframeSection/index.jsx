import React from "react";
import * as R from "ramda";

import useShowcase from "../../../hooks/useShowcase";
import {
    Iframe,
} from "./styled";

import type {Showcase} from "../../../types";


type Props = {|

|};

const embedRoute = 'https://embed.360vrmuseum.com/showcase/:mid';
const embedUrl: (showcase: Showcase) => string = R.pipe(
    R.prop('mid'),
    R.replace(':mid', R.__, embedRoute)
);

export default function IframeSection(props: Props) {
    const showcase: ?Showcase = useShowcase();
    if (!showcase) { return null; }
    const src = embedUrl(showcase);
    return (
        <Iframe src={src} allowFullScreen />
    );
}
