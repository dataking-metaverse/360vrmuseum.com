import React from "react";

import useShowcases from "../../hooks/useShowcases";
import MuseumShowcases from "../MuseumShowcases";

import type {ShowcasesGroup} from "../../types";

type Props = {
    showcases: ShowcasesGroup,
};


export default function MuseumIndex(props: Props) {
    const showcases = useShowcases();
    const keys: Array<string> = Object.keys(showcases);
    return keys.map(key => <MuseumShowcases key={key} name={key} showcases={showcases[key]} />);
}
