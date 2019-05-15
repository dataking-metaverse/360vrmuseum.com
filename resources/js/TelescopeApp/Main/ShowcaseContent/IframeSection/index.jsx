import React from "react";
import * as R from "ramda";

import useShowcase from "../../../hooks/useShowcase";
import {
    Iframe,
} from "./styled";

import type {Node} from "react";
import type {Showcase} from "../../../types";


type Props = {|

|};

const embedRoute: string = 'https://embed.360vrmuseum.com/showcase/:mid?autoplay=1&hl=2';
const makeEmbedRoute: (mid: string) => string = R.replace(':mid', R.__, embedRoute);
const embedUrl: (showcase: Showcase) => string = R.pipe(
    R.prop('mid'),
    makeEmbedRoute,
);

export default function IframeSection(props: Props): ?Node {
    const showcase: ?Showcase = useShowcase();
    if (!showcase) { return null; }
    const src = embedUrl(showcase);
    return (
        <Iframe key={src} src={src} allowFullScreen allow="vr" />
    );
}
