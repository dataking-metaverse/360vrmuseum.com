import React, {useState} from "react";
import Lightbox from 'react-image-lightbox';
import * as R from "ramda";

import {emptyLightBoxImageIndex as emptyLightBoxImageIndexAction} from "../../redux/actionCreators";
import useReduxState from "../../hooks/useReduxState";
import useReduxAction from "../../hooks/useReduxAction";
import useShowcase from "../../hooks/useShowcase";

import type {Node} from "react";

type Props = {|

|};

function getNextPrevIndex(length: number, index: number): {|prev: number, next: number|} {
    return {
        prev: index !== 0 ? index - 1 : length - 1,
        next: index !== length - 1 ? index + 1 : 0,
    };
}

function ImageLightBoxActual(props: Props): Node {
    const {list_of_images: images} = useShowcase();
    const emptyLightBoxImageIndex = useReduxAction(emptyLightBoxImageIndexAction);
    const [index, setIndex] = useState(0);
    const {prev, next} = getNextPrevIndex(images.length, index);
    const goPrev = () => setIndex(prev);
    const goNext = () => setIndex(next);
    return (
        <Lightbox
            mainSrc={images[index]}
            prevSrc={images[prev]}
            nextSrc={images[next]}
            onCloseRequest={emptyLightBoxImageIndex}
            onMovePrevRequest={goPrev}
            onMoveNextRequest={goNext}
        />
    );
}

export default function ImageLightBox(props: Props): Node | null {
    const {lightBoxImageIndex} = useReduxState();
    return R.complement(R.isNil)(lightBoxImageIndex) ? <ImageLightBoxActual /> : null;
}
