import React from "react";
import ReactDOM from "react-dom";
import {createStore} from "redux";
import {Provider} from "react-redux";


import reducers from "./redux/reducers";
import assets from "./assets";
import Main from "./Main";

import type {Store, StoreEnhancer} from "redux";
import type {Action} from "./types/redux";


try {

    // react wrapper node
    const node = document.getElementById('app');

    // redux
    const app = window.app();
    const config = window.config();
    const store: Store<{}, Action> = createStore(reducers, { // TODO : here, flow typing says there is an error here but I don't know what it is even checked for an hour
        app,
        config,
        assets,
    });

    if (node === null) { throw new Error('hello, world'); }

    ReactDOM.render((
        <Provider store={store}>
            <Main />
        </Provider>
    ), node);
} catch (ex) {
    // TODO : handling this
}
