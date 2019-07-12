import React, {useEffect, useReducer, useState} from "react";
import * as R from "ramda";
import styled from "styled-components";

type Props = {|  |};

type TouchStackAction = 'top-left' | 'bottom-right' | 'empty';

const quitFullScreenButtonZIndex = R.path<string, number>(['theme', 'zIndexes', 'quitFullScreenButtonZIndex']);
const QuitFullScreenButton = styled.div`
    position: fixed;
    bottom: 0;
    right: 0;
    width: 150px;
    height: 150px;
    z-index: ${quitFullScreenButtonZIndex};
`;

function isTopLeft(x: number, y: number): boolean {
    return x <= 150 && y <= 150;
}

function isBottomRight(x: number, y: number): boolean {
    return x + 150 > window.innerWidth && y + 150 > window.innerHeight;
}

function requestLeaveFullScreen() {
    if(document.exitFullscreen)
        document.exitFullscreen();
    else if(document.mozCancelFullScreen)
        document.mozCancelFullScreen();
    else if(document.webkitExitFullscreen)
        document.webkitExitFullscreen();
    else if(document.msExitFullscreen)
        document.msExitFullscreen();
}

function touchStackReducer(state: Array<string>, action) {
    console.log(action);
    switch (action) {
        case 'top-left': return R.append('top-left', state);
        case 'bottom-right': return R.append('bottom-right', state);
        case 'empty': return [];
    }
    return state;
}

export default function HiddenQuitButtonSideEffect(props: Props) {
    const [touchStack, dispatchTouchStack] = useReducer<Array<string>, TouchStackAction>(touchStackReducer, []);
    const [show, setShow] = useState<boolean>(false);

    function onWindowClickEventListener(event: MouseEvent) {
        const x = event.clientX, y = event.clientY;
        if (isTopLeft(x, y)) { dispatchTouchStack('top-left'); }
        else if (isBottomRight(x, y)) { dispatchTouchStack('bottom-right'); }
        else { dispatchTouchStack('empty'); }
    }

    function quitFullScreen(event: MouseEvent) {
        requestLeaveFullScreen();
        setShow(false);
    }

    useEffect(() => {
        document.addEventListener('click', onWindowClickEventListener);
        return () => document.removeEventListener('click', onWindowClickEventListener);
    }, []);

    useEffect(() => {
        const tl = 'top-left';
        const br = 'bottom-right';
        if (R.equals(touchStack, [tl, tl, br, tl])) {
            setShow(true);
            dispatchTouchStack('empty');
        }
    }, [touchStack]);

    if (show) {
        return <QuitFullScreenButton onClick={quitFullScreen} />
    }
    return null;
};
