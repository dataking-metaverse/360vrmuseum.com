import React from "react";
import {connect} from "react-redux";
import {ThemeProvider} from "styled-components";
import {BaseCSS} from "styled-bootstrap-grid";

import BasicOverridingStyle from "./styling/BasicOverridingStyle";
import theme from "./styling/theme";
import Routing from "./Routing";


type Props = {

};


@connect()
export default class Main extends React.PureComponent<Props> {
    render() {
        return (
            <ThemeProvider theme={theme}>
                <React.Fragment>
                    <BaseCSS />
                    <BasicOverridingStyle />
                    <Routing />
                </React.Fragment>
            </ThemeProvider>
        );
    }
}
