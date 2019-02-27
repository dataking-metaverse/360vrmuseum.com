import React from "react";
import ReactDOM from "react-dom";
import {createStore} from "redux";
import {Provider} from "react-redux";

import reducers from "./redux/reducers";

try {

    // react wrapper node
    const node = document.getElementById('app');

    // redux
    const store = createStore(reducers);

    ReactDOM.render((
        <Provider store={store}>
            <Main />
        </Provider>
    ), node);
} catch (ex) {
    // TODO : handling this
}
