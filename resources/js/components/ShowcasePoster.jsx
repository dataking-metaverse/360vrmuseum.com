import React from "react";
import styled from "styled-components";
import Showcase from "../models/Showcase";
import * as R from "ramda";


type Props = {
    showcase: Showcase,
};

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
        padding-top: 150%;
    }
`;

export default function ShowcasePoster(props: Props) {
    const {showcase} = props;
    return (
        <Root background={showcase.getAttribute('poster')} />
    );
}
