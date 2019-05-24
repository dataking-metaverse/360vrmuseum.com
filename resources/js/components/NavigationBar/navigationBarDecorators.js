import {connect} from "react-redux";
import {withRouter} from "react-router";
import * as R from "ramda";

export type RouteProps = {|
    item: string,
    title: string,
    to: string,
|};

export type DecoratedProps = {
    config: {
        authSwitch: {
            loginNav: boolean,
        },
    },
    showHome: boolean,
    logo: string,
    routes: Array<RouteProps>,
    homeRoute: string,
};


const mapStateToRoutes = R.pipe(
    R.applySpec({
        items: R.path(['config', 'navigationBar', 'staticItems']),
        titles: R.pipe(
            R.path(['lang', 'navigation']),
            R.mapObjIndexed(R.path(['title']))
        ),
        routes: R.path(['app', 'routes']),
    }),
    prop => prop.items.map(item => ({
        name: item,
        title: prop.titles[item],
        to: prop.routes[item],
    })),
);

const mapStateToLoginRoute = R.applySpec({
    name: R.path(['config', 'navigationBar', 'login']),
    title: R.path(['lang', 'navigation', 'login', 'title']),
    to: R.path(['app', 'routes', 'login']),
});

const navigationBarDecorators = R.compose(
    connect(
        R.applySpec({
            config: R.prop('config'),
            user: R.prop('user'),
            showHome: R.path(['config', 'navigationBar', 'showHome']),
            logo: R.path(['assets', 'logo']),
            homeRoute: R.path(['app', 'routes', 'home']),
            routes: mapStateToRoutes,
            loginRoute: mapStateToLoginRoute,
        }),
        R.always({})
    ),
    withRouter
);

export default navigationBarDecorators;
