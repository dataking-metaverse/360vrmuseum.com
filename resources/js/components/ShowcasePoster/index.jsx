import React from "react";
import styled from "styled-components";
import * as R from "ramda";

import Showcase from "~/models/Showcase";
import ShowcaseThumbnail from "../ShowcaseThumbnail";

type Props = {
    showcase: Showcase,
};

const ratio: number = 1.5;
const ratioPercentage: number = 100 * ratio;

const Root = styled.div`
    position: relative;
    display: block;
    background-image: url(${R.prop('background')});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: 50% 50%;
    
    &:before {
        content: '';
        position: relative;
        display: block;
        padding-top: ${ratioPercentage}%;
    }
`;

export default function ShowcasePoster(props: Props) {
    const {showcase} = props;
    const poster = showcase.getAttribute('poster');

    // 1. case when there is actually a poster
    if (typeof poster === 'string') { return ( <Root background={poster} /> ); }

    // 2. case when there is no poster, but image thumbnail
    return ( <ShowcaseThumbnail ratio={ratio} showcase={showcase} /> );

};
