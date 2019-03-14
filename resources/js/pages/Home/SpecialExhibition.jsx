import React from "react";
import {connect} from "react-redux";
import * as R from "ramda";
import {Row, Col} from "styled-bootstrap-grid";

import ExhibitionList from "./components/ExhibitionList";


type Props = {
    text: {
        title: string,
    },
    showcases: Array<string>,
};


function SpecialExhibition(props: Props) {
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
            text: R.path(['lang', 'pages', 'home', 'specialExhibition']),
            showcases: R.path(['config', 'pages', 'home', 'specialExhibition']),
        }),
        R.always({})
    )
)(SpecialExhibition);
