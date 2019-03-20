import React from "react";
import {Route, withRouter} from "react-router";
import {BrowserRouter as Router} from "react-router-dom";
import {connect} from "react-redux";
import * as R from "ramda";

import NavigationBar from "../components/NavigationBar";
import Footer from "../components/Footer";
import routes from "./routes";

import type {ComponentType} from "react";
import type {RouterHistory} from "react-router";

type RouteParams = {
    key: string,
    name: string,
    path: string,
    exact: ?boolean,
    component: ComponentType<{}>,
}

type Props = {

};

type RedirectHandlerProps = {
    redirect: ?RedirectHandlerProps,
    history: RouterHistory,
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

@withRouter
@connect(R.pick(['redirect']))
class RedirectHandler extends React.Component<RedirectHandlerProps> {
    shouldComponentUpdate(nextProps) { return nextProps.redirect !== this.props.redirect; }
    componentDidMount() { this.effect(this.props.redirect); }
    componentDidUpdate(nextProps) { this.effect(this.props.redirect); }
    effect(redirect) { redirect && this.props.history.push(redirect); }
    render() { return null; }
}

function Routing(props: Props) {
    const {routePaths} = props;
    return (
        <Router>
            <React.Fragment>
                <RedirectHandler />
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

