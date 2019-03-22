import React from "react";
import {connect} from "react-redux";
import {ThemeProvider} from "styled-components";
import {GridThemeProvider} from "styled-bootstrap-grid";
import {BaseCSS} from "styled-bootstrap-grid";

import "./styling/ThirdPartyCSSImports";
import BasicOverridingStyle from "./styling/BasicOverridingStyle";
import ThirdPartyOverridingStyle from "./styling/ThirdPartyOverridingStyle";
// import DebugBreakpoints from "./styling/DebugBreakpoints";
import theme from "./styling/theme";
import gridTheme from "./styling/gridTheme";
import BackToTopButton from "./components/BackToTopButton";
import Routing from "./Routing";


type Props = {

};

function StyleSheets() {
    return (
        <React.Fragment>
            <BaseCSS />
            <BasicOverridingStyle />
            <ThirdPartyOverridingStyle />
            {/*<DebugBreakpoints />*/}
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
                        <BackToTopButton portalId="app-back-to-top-portal" />
                    </React.Fragment>
                </GridThemeProvider>
            </ThemeProvider>
        );
    }
}
