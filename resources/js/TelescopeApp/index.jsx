import React, {useMemo} from "react";
import {Provider} from "react-redux";
import {ThemeProvider} from "styled-components";

import createStoreWithPreloadedState from "./redux/createStoreWithPreloadedState";
import BasicTheme from "./styling/BasicTheme";
import theme from "./styling/theme";
import SideEffects from "./SideEffects";
import Main from "./Main";

import type {State} from "./types";

type Props = {
    preloadedState: State,
};

export default function TelescopeApp(props: Props) {
    const preloadedState: State = props.preloadedState;
    const store = useMemo(() => createStoreWithPreloadedState(preloadedState), []);
    store.subscribe(() => {
        console.log(store.getState());
    });
    return (
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                <React.Fragment>
                    <BasicTheme />
                    <Main />
                    <SideEffects />
                </React.Fragment>
            </ThemeProvider>
        </Provider>
    );
};
