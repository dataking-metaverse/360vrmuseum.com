import React from "react";

import {
    Root,
} from "./styled";
import useShowcases from "../../hooks/useShowcases";
import MuseumShowcases from "../MuseumShowcases";

import type {Node} from "react";
import type {ShowcasesGroup} from "../../types";

type Props = {|  |};


export default function MuseumIndex(props: Props): Node {
    const showcases: ShowcasesGroup = useShowcases();
    const keys: Array<string> = Object.keys(showcases);
    const museumShowcases = keys.map((key: string) => <MuseumShowcases key={key} name={key} showcases={showcases[key]} />);
    return (
        <Root>{museumShowcases}</Root>
    );
}
