import React from "react";
import styled from "styled-components";

import useReduxState from "../../hooks/useReduxState";

type Props = {|

|};

const Root = styled.div`
    position: absolute;
    display: flex;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    justify-content: center;
    align-items: center;
`;

const Button = styled.div`
    text-align: center;
`;

function goInFullscreen(element) {
    if(element.requestFullscreen)
        element.requestFullscreen();
    else if(element.mozRequestFullScreen)
        element.mozRequestFullScreen();
    else if(element.webkitRequestFullscreen)
        element.webkitRequestFullscreen();
    else if(element.msRequestFullscreen)
        element.msRequestFullscreen();
}

export default function FullScreenButtonPage(props: Props) {
    const {root} = useReduxState();

    function goFullScreen() {
        goInFullscreen(root)
    }

    return (
        <Root onClick={goFullScreen}>
            <Button>
                Tap anywhere to go fullscreen <br />
                화면을 터치하시면 전체화면으로 전환됩니다.
            </Button>
        </Root>
    );
}
