import React from "react";
import * as R from "ramda";
import {connect} from "react-redux";

import MuseumShowcases from "../MuseumShowcases";

import type {ShowcasesGroup} from "../../types";

type Props = {
    showcases: ShowcasesGroup,
};


function MuseumIndex(props: Props) {
    const {showcases} = props;
    const keys: Array<string> = Object.keys(showcases);
    return keys.map(key => <MuseumShowcases key={key} name={key} showcases={showcases[key]} />);
}

export default R.compose(
    connect(R.pick(['showcases']))
)(MuseumIndex);
