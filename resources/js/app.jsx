import React from "react";
import ReactDOM from "react-dom";
import {createStore} from "redux";
import {Provider} from "react-redux";
import Axios from "axios";
import * as R from "ramda";

import {
    initialUserAccessCredential,
    pushMessage,
    pushRedirect,
    registerAxios,
    registerUser
} from "./redux/actionBuilders/global";
import Model from "./models/Model";
import ModelsContext from "./contexts/ModelsContext";
import reducers from "./redux/reducers";
import * as assets from "./assets";
import Main from "./Main";
import * as models from "./models/all";

import "./styling/ThirdPartyCSSImports";

import type {Store} from "redux";
import type {ReduxAction} from "./types";

try {

    // react wrapper node
    const node = document.getElementById('app');

    // redux
    const user = window.user();
    const app = window.app();
    const config = window.config();
    // const lang = window.lang();
    const axios = Axios.create({
        header: {
            'Content-Type': 'application/json',
            'X-Requested-With': 'XMLHttpRequest',
        },
    });

    const store: Store<{}, ReduxAction> = createStore(reducers, { // TODO : here, flow typing says there is an error here but I don't know what it is even checked for an hour
        ssr: false,
        user,
        app,
        config,
        assets,
        // lang,
        locale: document.getElementsByTagName('html')[0].getAttribute('lang'),
        axios: Axios.create({
            header: {
                'Content-Type': 'application/json',
                'X-Requested-With': 'XMLHttpRequest',
            },
        }),
    });


    registerAxios(store.dispatch)(Axios.create({
        header: {
            'Content-Type': 'application/json',
            'X-Requested-With': 'XMLHttpRequest',
        },
        transformResponse: [R.pipe(
            JSON.parse,
            R.tap(prop => {
                if (prop.message) {
                    pushMessage(store.dispatch)({
                        message: prop.message,
                        appearance: prop.success ? 'success' : 'error'
                    });
                }
            }),
            R.tap(R.when(
                R.has('redirect'),
                R.pipe(
                    R.prop('redirect'),
                    pushRedirect(store.dispatch)
                )
            ))
        )],
    }));

    // model
    Model.subscribe(store);

    if (node === null) { throw new Error('Node #app is not defined'); }

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
