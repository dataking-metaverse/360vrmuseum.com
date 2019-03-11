import React from "react";
import styled from "styled-components";
import Showcase from "../models/Showcase";

import type ResponsiveImage from "../types/ResponsiveImage";


type Props = ResponsiveImage | {
    reference: ?Showcase,
};

const Root = styled.img`
    position: relative;
    display: block;
    max-width: 100%;
`;

export default function ShowcasePoster(props: Props) {
    const {image} = props;
    return (
        <Root src={image} />
    );
}
