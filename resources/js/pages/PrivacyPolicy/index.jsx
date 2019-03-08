import React from "react";
import {connect} from "react-redux";
import * as R from "ramda";

import PolicyPage from "../../components/PolicyPage/index";

import type {ContentType} from "../../components/PolicyPage";


type Props = {
    content: ContentType,
};


function PrivacyPolicy(props: Props) {
    return ( <PolicyPage {...props.content} /> );
}

export default R.compose(
    connect(R.applySpec({
        content: R.path(['lang', 'pages', 'privacy-policy']),
    }))
)(PrivacyPolicy);
