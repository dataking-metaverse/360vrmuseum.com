import {connect} from "react-redux";
import {withRouter} from "react-router";
import * as R from "ramda";
import {media} from "styled-bootstrap-grid";

export type RouteProps = {
    item: string,
    title: string,
    to: string,
};

export type DecoratedProps = {
    showHome: boolean,
    logo: string,
    routes: Array<RouteParams>,
    homeRoute: string,
};

export const desktopBreakpoint = media.lg;

const navigationBarDecorators = R.compose(
    connect(
        R.applySpec({
            showHome: R.path(['config', 'navigationBar', 'showHome']),
            logo: R.path(['assets', 'logo']),
            homeRoute: R.path(['app', 'routes', 'home']),
            routes: R.pipe(
                R.applySpec({
                    items: R.path(['config', 'navigationBar', 'staticItems']),
                    titles: R.pipe(
                        R.path(['lang', 'navigation']),
                        R.mapObjIndexed(R.path(['title']))
                    ),
                    routes: R.path(['app', 'routes']),
                }),
                params => params.items.map(item => ({
                    name: item,
                    title: params.titles[item],
                    to: params.routes[item],
                })),
            ),
        }),
        R.always({})
    ),
    withRouter
);

export default navigationBarDecorators;
