import React, {useMemo} from "react";
import {Provider} from "react-redux";
import {ThemeProvider} from "styled-components";

import createStoreWithPreloadedState from "./redux/createStoreWithPreloadedState";
import theme from "./styling/theme";
import Main from "./Main";

type Props = {
    preloadedState: {}
};

export default function TelescopeApp(props: Props) {
    const preloadedState: any = props.preloadedState;
    const store = useMemo(() => createStoreWithPreloadedState(preloadedState), []);
    return (
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                <Main />
            </ThemeProvider>
        </Provider>
    );
};
