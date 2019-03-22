import React from "react";
import {connect} from "react-redux";
import * as R from "ramda";

import PolicyPage from "../../components/PolicyPage/index";

import type {Props as PolicyPageProps} from "../../components/PolicyPage";
import page from "../../decorators/page";


type Props = {
    content: PolicyPageProps,
};


function PrivacyPolicy(props: Props) {
    return ( <PolicyPage {...props.content} /> );
}

export default R.compose(
    connect(R.applySpec({
        content: R.path(['lang', 'pages', 'privacy-policy']),
    })),
    page('privacy-policy')
)(PrivacyPolicy);
