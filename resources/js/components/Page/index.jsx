import React from "react";
import * as R from "ramda";
import {connect} from "react-redux";
import CustomHelmet from "../CustomHelmet";


type Props = {
    pageName: string,
};

export default function Page(props: Props) {
    const Component = connect(
        R.applySpec({
            meta: R.converge(
                R.mergeLeft,
                [ R.path(['lang', 'pages', props.pageName, 'meta']), R.path(['config', 'defaultMeta']) ]
            ),
        })
    )(({meta}) => (
        <React.Fragment>
            <CustomHelmet {...meta} />
            {props.children}
        </React.Fragment>
    ));
    return <Component />;
};

Page.defaultProps = {
    children: null,
};
