import React from "react";
import {Route} from "react-router";
import {BrowserRouter, StaticRouter} from "react-router-dom";
import {connect} from "react-redux";
import * as R from "ramda";

import RedirectHandler from "../components/RedirectHandler";
import LangHandler from "../components/LangHandler";
import useLang from "~/hooks/useLang";
import useReduxState from "~/hooks/useReduxState";
import NotificationHandler from "../components/NotificationHandler";
import SwitchPageHandler from "../components/SwitchPageHandler";
import RecaptchaHandler from "../components/RecaptchaHandler";
import NavigationBar from "../components/NavigationBar";
import Footer from "../components/Footer";
import routes from "./routes";

import type {ComponentType, Node, Element} from "react";
import type {Props as PageProps} from "~/components/Page";


type RouteParams = {
    key: string,
    name: string,
    path: string,
    exact: ?boolean,
    component: ComponentType<PageProps>,
};

type Props = {

};

function refineRoute(route: string): string {
    if (typeof route !== 'string') { return '/'; }
    return route[0] !== '/' ? '/' + route : route;
}

function makeRouteParams(routeUris, routeParams): Array<RouteParams> {
    return R.pipe(
        R.mapObjIndexed((routeParam, key) => ({
            key,
            name: key,
            path: routeUris[key],
            exact: routeParam.exact,
            component: routeParam.component,
        })),
        R.values,
    )(routeParams);
}

const renderRoutes: (routeParams: Array<RouteParams>) => Node = R.map(R.curryN<Node, Element>(2, React.createElement)(Route));

const useRoutePaths = R.pipe(
    useReduxState,
    R.path(['app', 'routes'])
);

export default function Routing(props: Props) {
    const lang = useLang();
    const routePaths = useRoutePaths();

    const content = (
        <React.Fragment>
            <RedirectHandler />
            <LangHandler />
            <NotificationHandler />
            <SwitchPageHandler />
            <RecaptchaHandler />
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
            <StaticRouter location={refineRoute(context.route)} context={{}}>
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
