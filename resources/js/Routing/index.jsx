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

import type {ComponentType, Node} from "react";
import type {Props as PageProps} from "~/components/Page";

type RoutePaths = {[string]: string};

type RouteParams = {|
    key: string,
    path: string,
    exact: boolean,
    component: ComponentType<PageProps>,
|};

type Props = {|  |};

type ViewProps = {|
    ssr: boolean,
    routePaths: RoutePaths,
    lang: {},
|};

function refineRoute(route: string): string {
    if (typeof route !== 'string') { return '/'; }
    return route[0] !== '/' ? '/' + route : route;
}

function makeRouteParams(routeUris: RoutePaths, routeParams): Array<RouteParams> {
    const output = [];
    for(let key in routeParams) {
        if (!routeUris.hasOwnProperty(key) || !routeParams.hasOwnProperty(key)) { continue; }
        const routeParam = routeParams[key];
        output.push({
            key,
            path: routeUris[key],
            exact: routeParam.exact,
            component: routeParam.component,
        });
    }
    return output;
}

const renderRoutes = R.pipe<[RoutePaths], RouteParams>(
    makeRouteParams,
    R.map<RouteParams, Node, (routeParams: RouteParams) => Node>(routeParam => React.createElement(Route, routeParam))
);

const useRoutePaths = R.pipe(
    useReduxState,
    R.path<string, RoutePaths>(['app', 'routes'])
);

/**
 * NOTE : build a pure component here to stop rerender with the same set of props
 */
class RoutingPureView extends React.PureComponent<ViewProps> {
    render() {
        const {ssr, routePaths, lang} = this.props;
        const routeContent = renderRoutes(routePaths, routes);
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
                        {routeContent}
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
}

export default function Routing(props: Props) {
    const lang = useLang();
    const routePaths = useRoutePaths();
    const {ssr} = useReduxState();
    if (!routePaths) { return null; }
    return (
        <RoutingPureView
            ssr={ssr}
            routePaths={routePaths}
            lang={lang}
        />
    );
};
