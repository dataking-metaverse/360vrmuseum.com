import React, {useContext} from "react";
import * as R from "ramda";
import {connect} from "react-redux";

import ShowcaseContext from "./ShowcaseContext";

type Props = {

};

function ShowcaseRelated(props: Props) {
    const showcase = useContext(ShowcaseContext);
    return (
        <React.Fragment>
            {JSON.stringify(showcase)}
        </React.Fragment>
    );
}

export default R.compose(
    connect(
        R.applySpec({
            text: R.path(['lang', 'pages', 'showcase', 'related', 'title']),
        })
    )
)(ShowcaseRelated);
