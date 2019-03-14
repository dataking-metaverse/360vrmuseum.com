import React from "react";
import * as R from "ramda";
import {connect} from "react-redux";

import PolicyPage from "../../components/PolicyPage/index";

import type {ContentType} from "../../components/PolicyPage";


type Props = {
    content: ContentType,
};

function TermsOfService(props: Props) {
    return ( <PolicyPage {...props.content} /> );
}

export default R.compose(
    connect(R.applySpec({
        content: R.path(['lang', 'pages', 'terms-of-service']),
    }))
)(TermsOfService);
