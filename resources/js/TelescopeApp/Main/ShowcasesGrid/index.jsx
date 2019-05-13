import React from "react";

import {
    Root,
    Poster,
} from "./styled";

import type {Showcases, Showcase} from "../../types";


type Props = {
    showcases: Showcases,
};


export default function ShowcasesGrid(props: Props) {
    return (
        <Root>
            {props.showcases.map((showcase: Showcase, index: number) => (
                <Poster key={index} src={showcase.poster} />
            ))}
        </Root>
    );
}
