import React from "react";
import {connect} from "react-redux";
import * as R from "ramda";
import {Route} from "react-router-dom";

import useReduxState from "~/hooks/useReduxState";
import routesConfig from "./routes";

type Props = {
    name: string,
};


const useRoutes = R.pipe(
    useReduxState,
    R.path(['app', 'routes'])
);

export default function CustomRoute(props: Props) {
    const routes = useRoutes();
    return (
        <Route
            {...routesConfig[props.name]}
            path={routes[props.name]}
        />
    );
}
