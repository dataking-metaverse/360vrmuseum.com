import {connect} from "react-redux";
import * as R from "ramda";
import {Route} from "react-router-dom";
import React from "react";

import Injected from "../components/Injected";
import routes from "./routes";

type Props = {
    name: string,
};

type InjectedProps = {
    app: {
        routes: {
            [string]: string,
        },
    },
};

@connect(R.applySpec({
    routes: R.path(['app', 'routes']),
}))
export default class CustomRoute extends Injected.Component<Props, InjectedProps> {
    render() {
        return (
            <Route
                {...routes[this.props.name]}
                path={this.props.routes[this.props.name]}
            />
        );
    }
}
