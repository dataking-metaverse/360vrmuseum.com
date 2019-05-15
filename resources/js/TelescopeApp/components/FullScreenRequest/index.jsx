import React, {useState, useEffect} from "react";
import FullScreenButtonPage from "./FullScreenButtonPage";

import type {Node} from "react";

type Props = {|
    children: Node,
|};

const isFullScreen = () => screen.width === innerWidth;

export default function FullScreenRequest(props: Props): Node {
    const [show, setShow] = (useState(false): [boolean, (show: boolean) => void]);

    useEffect(() => {
        const onResizeListener = () => { setShow(isFullScreen() && !show); };
        addEventListener('resize', onResizeListener);
        return () => removeEventListener('resize', onResizeListener);
    });

    return show ? props.children : <FullScreenButtonPage />;
}
