import React from "react";
import styled from "styled-components";


type Props = {|

|};

function requestEnterFullScreen(element: Element) {
    if(element.requestFullscreen)
        element.requestFullscreen();
    else if(element.mozRequestFullScreen)
        element.mozRequestFullScreen();
    else if(element.webkitRequestFullscreen)
        element.webkitRequestFullscreen();
    else if(element.msRequestFullscreen)
        element.msRequestFullscreen();
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

export default function FullScreenButtonPage(props: Props) {
    return (
        <Root onClick={() => requestEnterFullScreen(document.body)}>
            <Button>
                Tap anywhere to go fullscreen <br />
                화면을 터치하시면 전체화면으로 전환됩니다.
            </Button>
        </Root>
    );
}
