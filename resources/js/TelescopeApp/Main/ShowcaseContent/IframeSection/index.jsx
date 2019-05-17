import React, {useEffect, useRef} from "react";
import * as R from "ramda";

import {
    updateShowcaseIframeRef as updateShowcaseIframeRefAction,
    emptyShowcaseIframeRef as emptyShowcaseIframeRefAction,
} from "../../../redux/actionCreators";
import useShowcase from "../../../hooks/useShowcase";
import useReduxAction from "../../../hooks/useReduxAction";
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
    const src = embedUrl(showcase);
    const updateShowcaseIframeRef = useReduxAction(updateShowcaseIframeRefAction);
    const emptyShowcaseIframeRef = useReduxAction(emptyShowcaseIframeRefAction);
    const iframeRef = useRef();

    useEffect(() => {
        updateShowcaseIframeRef(iframeRef);
        return emptyShowcaseIframeRef;
    }, [src]);

    if (!showcase) { return null; }
    return (
        <Iframe key={src} ref={iframeRef} src={src} allowFullScreen allow="vr" />
    );
}
