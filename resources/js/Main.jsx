import React from "react";

import Routing from "./Routing";
import connect from "react-redux/es/connect/connect";

type Props = {

};


@connect()
export default class Main extends React.PureComponent<Props> {
    render() {
        return (
            <Routing />
        );
    }
}
