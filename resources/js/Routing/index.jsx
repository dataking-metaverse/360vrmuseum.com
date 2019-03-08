import React from "react";
import {Route} from "react-router";
import {BrowserRouter as Router} from "react-router-dom";
import {connect} from "react-redux";
import * as R from "ramda";

import NavigationBar from "../components/NavigationBar";
import Footer from "../components/Footer";
import routes from "./routes";


type Props = {

};

@connect(R.applySpec({
    routePaths: R.path(['app', 'routes']),
}))
export default class Routing extends React.Component {

    static renderRoutes(routePaths, routeComponents): Node {
        return R.pipe(
            R.mapObjIndexed((path, name) => (
                <Route
                    key={name}
                    path={path}
                    name={name}
                    {...routeComponents[name]}
                />
            )),
            R.values,
        )(routePaths);
    }

    render() {
        const {routePaths} = this.props;
        return (
            <Router>
                <React.Fragment>
                    <NavigationBar />
                    {Routing.renderRoutes(routePaths, routes)}
                    <Footer />
                </React.Fragment>
            </Router>
        );
    }
}
