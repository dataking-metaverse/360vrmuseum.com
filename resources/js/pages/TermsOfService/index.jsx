import React from "react";
import * as R from "ramda";
import {connect} from "react-redux";

import page from "../../decorators/page";
import PolicyPage from "../../components/PolicyPage/index";

import type {Props as PolicyPageProps} from "../../components/PolicyPage";


type Props = {
    content: PolicyPageProps,
};

function TermsOfService(props: Props) {
    return ( <PolicyPage {...props.content} /> );
}

export default R.compose(
    connect(R.applySpec({
        content: R.path(['lang', 'pages', 'terms-of-service']),
    })),
    page('terms-of-service')
)(TermsOfService);
