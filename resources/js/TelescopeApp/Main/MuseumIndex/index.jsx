import React from "react";

import useShowcase from "../../hooks/useShowcase";
import MuseumShowcases from "../MuseumShowcases";

import type {ShowcasesGroup} from "../../types";

type Props = {
    showcases: ShowcasesGroup,
};


export default function MuseumIndex(props: Props) {
    const showcases = useShowcase();
    const keys: Array<string> = Object.keys(showcases);
    return keys.map(key => <MuseumShowcases key={key} name={key} showcases={showcases[key]} />);
}
