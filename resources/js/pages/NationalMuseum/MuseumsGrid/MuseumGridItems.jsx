import React from "react";
import * as R from "ramda";
import {connect} from "react-redux";


function MuseumGridItems(props: Props) {
    return [].map(R.identity);
}

export default R.compose(
    R.identity
)(MuseumGridItems);
