import React, {useEffect, useMemo} from "react";
import {Provider} from "react-redux";
import createStoreWithPreloadedState from "./redux/createStoreWithPreloadedState";

type Props = {

};

export default function TelescopeApp(props: Props) {
    const preloadedState: {} = window.__PRELOADED_STATE__ || {};
    const store = useMemo(() => createStoreWithPreloadedState(preloadedState), []);

    useEffect(() => {
        delete window.__PRELOADED_STATE__;
    }, []);
    return (
        <Provider store={store}>

        </Provider>
    );
};
