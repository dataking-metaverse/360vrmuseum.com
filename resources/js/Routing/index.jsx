import React from "react";
import {BrowserRouter as Router, Route, Link} from "react-router-dom";

import routes from "./routes";

export default class Routing extends React.Component {
    render() {
        return (
            <Router>
                <Route {...routes.home} />
            </Router>
        );
    }
}
