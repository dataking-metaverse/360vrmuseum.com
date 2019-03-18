import React from "react";
import * as R from "ramda";
import {withRouter} from "react-router";
import getParam from "../../helpers/getParam";

type Props = {
    location: Location,
}

function Search(props: Props) {
    const query = getParam('q');
    return (
        <React.Fragment>
            search page
        </React.Fragment>
    );
}

export default R.compose(
    withRouter
)(Search);
