import React from "react";
import * as R from "ramda";
import {connect} from "react-redux";

import ExhibitionList from "./components/ExhibitionList";


function PermanentExhibition(props: Props) {
    const {text, showcases} = props;
    return (
        <ExhibitionList
            title={text.title}
            showcases={showcases}
        />
    )
}

export default R.compose(
    connect(
        R.applySpec({
            text: R.path(['lang', 'pages', 'home', 'permanentExhibition']),
            showcases: R.path(['config', 'pages', 'home', 'permanentExhibition']),
        }),
        R.always({})
    )
)(PermanentExhibition);
