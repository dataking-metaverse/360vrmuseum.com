import React, {useMemo} from "react";
import {Provider, ReactReduxContext} from "react-redux";
import {ThemeProvider} from "styled-components";
import * as R from "ramda";

import createStoreWithPreloadedState from "./redux/createStoreWithPreloadedState";
import FullScreenRequest from "./components/FullScreenRequest";
import BasicTheme from "./styling/BasicTheme";
import theme from "./styling/theme";
import SideEffects from "./SideEffects";
import Main from "./Main";

import type {State} from "./types";

type Props = {
    preloadedState: State,
};

function renderMainScreen() {
    return (
        <ReactReduxContext.Consumer>
            {R.pipe(
                R.path(['storeState', 'debug']),
                R.ifElse(
                    Boolean,
                    () => <Main />,
                    () => <FullScreenRequest><Main /></FullScreenRequest>,
                )
            )}
        </ReactReduxContext.Consumer>
    );
}

export default function TelescopeApp(props: Props) {

    // initial state
    const preloadedState: State = props.preloadedState;
    const store = useMemo(() => createStoreWithPreloadedState(preloadedState), []);

    return (
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                <React.Fragment>
                    <BasicTheme />
                    {renderMainScreen()}
                    <SideEffects />
                </React.Fragment>
            </ThemeProvider>
        </Provider>
    );
};
