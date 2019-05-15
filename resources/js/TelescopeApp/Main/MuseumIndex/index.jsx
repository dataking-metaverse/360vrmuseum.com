import React from "react";

import useShowcases from "../../hooks/useShowcases";
import MuseumShowcases from "../MuseumShowcases";

import type {Showcases} from "../../types";

type Props = {|

|};


export default function MuseumIndex(props: Props) {
    const showcases: Showcases = useShowcases();
    const keys: Array<string> = Object.keys(showcases);
    return keys.map((key: string, index: number) => <MuseumShowcases key={key} index={index} name={key} showcases={showcases[key]} />);
}
