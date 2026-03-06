import React, {useEffect, useRef, useState} from "react";
import * as R from "ramda";

import * as actions from "../../../redux/actionCreators";
import useShowcase from "../../../hooks/useShowcase";
import useReduxAction from "../../../hooks/useReduxAction";
import {
    Iframe,
    Placeholder,
} from "./styled";

import type {Showcase} from "../../../types";


type Props = {|  |};

const embedRoute: string = 'https://embed.360vrmuseum.com/showcase/:mid?autoplay=1&hl=2';
const makeEmbedRoute: (mid: string) => string = mid => embedRoute.replace(':mid', mid);
const embedUrl: (showcase: Showcase) => string = R.o<Showcase, string, string>( makeEmbedRoute, R.prop<'mid', Showcase>('mid') );;

export default function IframeSection(props: Props) {
    const showcase: ?Showcase = useShowcase();
    const src = showcase ? embedUrl(showcase) : null;
    const updateShowcaseIframeRef = useReduxAction(actions.updateShowcaseIframeRef);
    const emptyShowcaseIframeRef = useReduxAction(actions.emptyShowcaseIframeRef);
    const iframeRef = useRef();
    const [loadHold, setLoadHold] = useState(true);

    useEffect(() => {
        window.setTimeout(() => {
            setLoadHold(false);
        }, 1000);
        return () => setLoadHold(true);
    }, [src]);

    useEffect(() => {
        updateShowcaseIframeRef(iframeRef);
        return emptyShowcaseIframeRef;
    }, [src]);

    if (!showcase) { return <Placeholder />; }
    if (loadHold) { return <Placeholder />; }



    return <Iframe key={src} ref={iframeRef} src={src} allow="vr" allowFullScreen />;
}
