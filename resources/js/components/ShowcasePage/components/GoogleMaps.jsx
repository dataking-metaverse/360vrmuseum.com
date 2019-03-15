import React from "react";
import {connect} from "react-redux";
import * as R from "ramda";

import RatioGrid from "../../RatioGrid";


function GoogleMaps(props: Props) {
    return (
        <RatioGrid ratio={.5625}>
            TODO
        </RatioGrid>
    );
}

export default R.compose(
    connect(
        R.applySpec({

        }),
        R.always({})
    )
)(GoogleMaps);
