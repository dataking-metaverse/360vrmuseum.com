import React from "react";

import {
    Root,
} from "./styled";

import ShowcasePoster from "../ShowcasePoster";

import type {Showcases, Showcase} from "../../types";


type Props = {
    showcases: Showcases,
};

export default function ShowcasesGrid(props: Props) {
    return (
        <Root>
            {props.showcases.map((showcase: Showcase, index: number) => (
                <ShowcasePoster
                    key={index}
                    showcase={showcase}
                />
            ))}
        </Root>
    );
}
