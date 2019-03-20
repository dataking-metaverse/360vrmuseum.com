import React from "react";
import {Route, withRouter} from "react-router";
import {BrowserRouter as Router} from "react-router-dom";
import {connect} from "react-redux";
import * as R from "ramda";

import AuthHandler from "../components/AuthHandler";
import RedirectHandler from "../components/RedirectHandler";
import NavigationBar from "../components/NavigationBar";
import Footer from "../components/Footer";
import routes from "./routes";

import type {ComponentType} from "react";

type RouteParams = {
    key: string,
    name: string,
    path: string,
    exact: ?boolean,
    component: ComponentType<{}>,
}

type Props = {

};

function makeRouteParams(routeUris, routeParams): Array<RouteParams> {
    return R.pipe(
        R.mapObjIndexed((routeParam, key) => ({
            key,
            name: key,
            path: routeUris[key],
            ...routeParam,
        })),
        R.values,
    )(routeParams);
}

const renderRoutes: (routeParams: Array<RouteParams>) => Node = R.map(R.curryN(2, React.createElement)(Route));


function Routing(props: Props) {
    const {routePaths} = props;
    return (
        <Router>
            <React.Fragment>
                <RedirectHandler />
                {/*<AuthHandler />*/}
                <NavigationBar />
                {renderRoutes(makeRouteParams(routePaths, routes))}
                <Footer />
            </React.Fragment>
        </Router>
    );
}

export default R.compose(
    connect(R.applySpec({
        routePaths: R.path(['app', 'routes']),
    }))
)(Routing);

