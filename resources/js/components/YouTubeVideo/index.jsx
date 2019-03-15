import React from "react";
import styled from "styled-components";

import params from "../../helpers/params";
import RatioGrid from "../RatioGrid";


type Props = {
    v: string,
};

const paramStr = params({
    feature: 'oembed',
    start: '',
    end: '',
    loop: '0',
    controls: '1',
    mute: '0',
    rel: '0',
    modestbranding: '0',
    enablejsapi: '1',
    wmode: 'opaque',
});

const Iframe = styled.iframe`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    border: 0;
`;


export default function YouYubeVideo(props: Props) {
    const {v} = props;
    return (
        <RatioGrid ratio={.5625}>
            <Iframe
                src={`https://www.youtube.com/embed/${v}?${paramStr}`}
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            />
        </RatioGrid>
    );
}
