import React from "react";
import * as R from "ramda";
import {Route} from "react-router-dom";

import useReduxState from "~/hooks/useReduxState";
import routesConfig from "./routes";

type Props = {|
    name: string,
|};

type Routes = {| [string]: string |};

const useRoutes = R.pipe<[], ?Routes, any>(
    useReduxState,
    R.path<string, Routes>(['app', 'routes'])
);

export default function CustomRoute(props: Props) {
    const routes = useRoutes();
    if (!routes || !routes.hasOwnProperty(props.name)) { return null; }
    return (
        <Route
            {...routesConfig[props.name]}
            path={routes[props.name]}
        />
    );
}
