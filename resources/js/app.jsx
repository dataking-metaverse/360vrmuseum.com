import React from "react";
import ReactDOM from "react-dom";
import {createStore} from "redux";
import {Provider} from "react-redux";

import reducers from "./redux/reducers";
import assets from "./assets";
import Main from "./Main";

try {

    // react wrapper node
    const node = document.getElementById('app');

    // redux
    const app = window.app();
    const config = window.config();
    const store = createStore(reducers, {
        app,
        config,
        assets,
    });

    ReactDOM.render((
        <Provider store={store}>
            <Main />
        </Provider>
    ), node);
} catch (ex) {
    // TODO : handling this
}
