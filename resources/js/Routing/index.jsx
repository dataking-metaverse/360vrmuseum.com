import React from "react";
import {BrowserRouter as Router, Route, Link} from "react-router-dom";

import routes from "./routes";

type Props = {

};

export default class Routing extends React.Component<Props> {
    render() {
        return (
            <Router>
                <Route {...routes.home} />
            </Router>
        );
    }
}
