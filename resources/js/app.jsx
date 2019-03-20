import React from "react";
import ReactDOM from "react-dom";
import {createStore} from "redux";
import {Provider} from "react-redux";
import axios from "axios";

import {initialUserAccessCredential} from "./redux/actionBuilders/global";
import Model from "./models/Model";
import ModelsContext from "./contexts/ModelsContext";
import reducers from "./redux/reducers";
import * as assets from "./assets";
import Main from "./Main";
import * as models from "./models/all";

import type {Store} from "redux";
import type {ReduxAction} from "./types";

try {

    // react wrapper node
    const node = document.getElementById('app');

    // redux
    const app = window.app();
    const config = window.config();
    const lang = window.lang();

    const store: Store<{}, ReduxAction> = createStore(reducers, { // TODO : here, flow typing says there is an error here but I don't know what it is even checked for an hour
        app,
        config,
        assets,
        lang,
        locale: document.getElementsByTagName('html')[0].getAttribute('lang'),
        axios: axios.create({
            header: {
                'Content-Type': 'application/json',
                'X-Requested-With': 'XMLHttpRequest',
            },
        })
    });

    initialUserAccessCredential(store.dispatch)();

    // model
    Model.subscribe(store);

    if (node === null) { throw new Error('hello, world'); }

    ReactDOM.render((
        <Provider store={store}>
            <ModelsContext.Provider value={models}>
                <Main />
            </ModelsContext.Provider>
        </Provider>
    ), node);
} catch (ex) {
    console.error(ex); // TODO : handling this instead of just log it out
}
