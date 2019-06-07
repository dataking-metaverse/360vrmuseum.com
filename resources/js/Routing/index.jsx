import React from "react";
import {Route} from "react-router";
import {BrowserRouter, StaticRouter} from "react-router-dom";
import * as R from "ramda";

import Footer from "~/components/Footer";
import LangHandler from "~/components/LangHandler";
import NavigationBar from "~/components/NavigationBar";
import NotificationHandler from "~/components/NotificationHandler";
import RecaptchaHandler from "~/components/RecaptchaHandler";
import RedirectHandler from "~/components/RedirectHandler";
import SwitchPageHandler from "~/components/SwitchPageHandler";
import useLang from "~/hooks/useLang";
import useReduxState from "~/hooks/useReduxState";
import routes from "./routes";

import type {ComponentType, Node, Element} from "react";
import type {Props as PageProps} from "~/components/Page";


type RouteParams = {|
    key: string,
    path: string,
    exact: boolean,
    component: ComponentType<PageProps>,
|};

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
            path: routeUris[key],
            exact: routeParam.exact,
            component: routeParam.component,
        })),
        R.values,
    )(routeParams);
}

const renderRoutes = R.map<RouteParams, Node, (routeParams: RouteParams) => Node>(routeParam => React.createElement(Route, routeParam));

const useRoutePaths = R.pipe(
    useReduxState,
    R.path(['app', 'routes'])
);

export default function Routing(props: Props) {
    const lang = useLang();
    const routePaths = useRoutePaths();
    const {ssr} = useReduxState();

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

    if (ssr && typeof global.context !== 'undefined') {
        return (
            <StaticRouter location={refineRoute(global.context.route)} context={{}}>
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
