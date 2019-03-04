import React from "react";
import {connect} from "react-redux";
import {ThemeProvider} from "styled-components";
import {GridThemeProvider} from "styled-bootstrap-grid";
import {BaseCSS} from "styled-bootstrap-grid";

import "./styling/ThirdPartyCSSImports";
import BasicOverridingStyle from "./styling/BasicOverridingStyle";
import ThirdPartyOverridingStyle from "./styling/ThirdPartyOverridingStyle";
import theme from "./styling/theme";
import gridTheme from "./styling/gridTheme";
import Routing from "./Routing";


type Props = {

};

function StyleSheets() {
    return (
        <React.Fragment>
            <BaseCSS />
            <BasicOverridingStyle />
            <ThirdPartyOverridingStyle />
        </React.Fragment>
    );
}

export default class Main extends React.PureComponent<Props> {
    render() {
        return (
            <ThemeProvider theme={theme}>
                <GridThemeProvider gridTheme={gridTheme}>
                    <React.Fragment>
                        <StyleSheets />
                        <Routing />
                    </React.Fragment>
                </GridThemeProvider>
            </ThemeProvider>
        );
    }
}
