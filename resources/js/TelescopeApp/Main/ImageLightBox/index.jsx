import React, {useState} from "react";
import Lightbox from 'react-image-lightbox';

import {emptyLightBoxImages as emptyLightBoxImagesAction} from "../../redux/actionCreators";
import useReduxState from "../../hooks/useReduxState";
import useReduxAction from "../../hooks/useReduxAction";

import type {Node} from "react";

type Props = {|

|};

function getNextPrevIndex(length: number, index: number): number {
    return {
        prev: index !== 0 ? index - 1 : length - 1,
        next: index !== length - 1 ? index + 1 : 0,
    };
}

function ImageLightBoxActual(props: Props): Node {
    const {lightBoxImages} = useReduxState();
    const emptyLightBoxImages = useReduxAction(emptyLightBoxImagesAction);
    const [index, setIndex] = useState(0);
    const {prev, next} = getNextPrevIndex(lightBoxImages.length, index);
    const goPrev = () => setIndex(prev);
    const goNext = () => setIndex(next);
    return (
        <Lightbox
            mainSrc={lightBoxImages[index]}
            prevSrc={lightBoxImages[prev]}
            nextSrc={lightBoxImages[next]}
            onCloseRequest={emptyLightBoxImages}
            onMovePrevRequest={goPrev}
            onMoveNextRequest={goNext}
        />
    );
}

export default function ImageLightBox(props: Props): ?Node {
    const {lightBoxImages} = useReduxState();
    return lightBoxImages ? <ImageLightBoxActual /> : null;
}
