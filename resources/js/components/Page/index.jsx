import React from "react";
import * as R from "ramda";
import {connect} from "react-redux";
import {Helmet} from "react-helmet";


type Props = {
    pageName: string,
};

const Page: function = function(props: Props) {
    const Component = connect(
        R.applySpec({
            title: R.path(['lang', 'pages', props.pageName, 'meta', 'title'])
        })
    )(({title}) => (
        <React.Fragment>
            <Helmet>
                <title>{title}</title>
            </Helmet>
            {props.children}
        </React.Fragment>
    ));
    return <Component />;
};

export default Page;

