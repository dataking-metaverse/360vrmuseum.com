import React from "react";

import page from "../../decorators/page";
import NavigationBar from "../../components/NavigationBar/index"


type Props = {

};


@page
export default class Home extends React.PureComponent<Props> {
    render() {
        return (
            <React.Fragment>
                <NavigationBar />
            </React.Fragment>
        );
    }
}
