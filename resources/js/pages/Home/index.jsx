import React from "react";

import page from "../../decorators/page";
import NavigationBar from "../../components/NavigationBar/index"


@page
export default class Home extends React.PureComponent {
    render() {
        return (
            <React.Fragment>
                <NavigationBar />
            </React.Fragment>
        );
    }
}
