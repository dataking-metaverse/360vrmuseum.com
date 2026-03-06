import React from "react";
import {connect} from "react-redux";
import * as R from "ramda";


type Props = {
    ssr: boolean,
    children: () => Node,
};

export default R.compose(
    connect(
        R.pick(['ssr']),
        R.always({})
    )
)(function NoSSR(props: Props) {
    if (props.ssr) { return null; }
    return props.children;
});
