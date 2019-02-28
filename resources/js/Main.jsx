import React from "react";
import {connect} from "react-redux";
import {ThemeProvider} from "styled-components";
import {GridThemeProvider} from "styled-bootstrap-grid";
import {BaseCSS} from "styled-bootstrap-grid";


import BasicOverridingStyle from "./styling/BasicOverridingStyle";
import "./styling/ThridPartyCSSImports";
import theme from "./styling/theme";
import gridTheme from "./styling/gridTheme";
import Routing from "./Routing";


type Props = {

};



export default class Main extends React.PureComponent<Props> {
    render() {
        return (
            <ThemeProvider theme={theme}>
                <GridThemeProvider gridTheme={gridTheme}>
                    <React.Fragment>
                        <BaseCSS />
                        <BasicOverridingStyle />
                        <Routing />
                    </React.Fragment>
                </GridThemeProvider>
            </ThemeProvider>
        );
    }
}
