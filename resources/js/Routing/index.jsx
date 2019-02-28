import React from "react";
import {BrowserRouter as Router, Switch, } from "react-router-dom";
import {connect} from "react-redux";
import * as R from "ramda";

import Route from "./Route";
import NavigationBar from "../components/NavigationBar";


type Props = {

};

export default class Routing extends React.Component<Props> {
    render() {
        return (
            <Router>
                <Switch>
                    <NavigationBar />
                    <Route name="contact-us" />
                    <Route name="vrmuseum" />
                    <Route name="national-museum" />
                    <Route name="home" />
                </Switch>
            </Router>
        );
    }
}
