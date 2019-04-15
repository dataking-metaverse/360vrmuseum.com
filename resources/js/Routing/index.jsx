import React from "react";
import {Route} from "react-router";
import {BrowserRouter, StaticRouter} from "react-router-dom";
import {connect} from "react-redux";
import * as R from "ramda";

import RedirectHandler from "../components/RedirectHandler";
import LangHandler from "../components/LangHandler";
import NotificationHandler from "../components/NotificationHandler";
import SwitchPageHandler from "../components/SwitchPageHandler";
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
    const {lang, routePaths} = props;

    const content = (
        <React.Fragment>
            <RedirectHandler />
            <LangHandler />
            <NotificationHandler />
            <SwitchPageHandler />
            {lang && (
                <React.Fragment>
                    <NavigationBar />
                    {renderRoutes(makeRouteParams(routePaths, routes))}
                    <Footer />
                </React.Fragment>
            )}
        </React.Fragment>
    );

    if (props.ssr) {
        return (
            <StaticRouter location={context.route || '/'} context={{}}>
                {content}
            </StaticRouter>
        );
    }
    return (
        <BrowserRouter>
            {content}
        </BrowserRouter>
    );
}

export default R.compose(
    connect(R.applySpec({
        lang: R.prop('lang'),
        routePaths: R.path(['app', 'routes']),
        ssr: R.prop('ssr'),
    }))
)(Routing);

