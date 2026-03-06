import React from "react";
import {renderToString} from "react-dom/server";
import {createStore} from "redux";
import {Provider} from "react-redux";
import {ServerStyleSheet} from "styled-components";
import Helmet from "react-helmet";

import Main from "./Main";
import reducers from "./redux/reducers";
import * as assets from "./assets";
import ServerLayout from "./ServerLayout";

import type {Store} from "redux";
import type {ReduxAction} from "./types";
import * as models from "./models/all";
import ModelsContext from "./contexts/ModelsContext";
import Model from "./models/Model";


let head = '';
let body = '';


try {

    const store: Store<{}, ReduxAction> = createStore(reducers, { // TODO : here, flow typing says there is an error here but I don't know what it is even checked for an hour
        ssr: true,
        user: context.user ? new models.User(context.user) : null,
        app: context.app,
        config: context.config,
        assets,
        lang: context.lang,
        locale: 'ko',
    });

    Model.subscribe(store);

    const sheet = new ServerStyleSheet();
    body += renderToString(sheet.collectStyles(
        <Provider store={store}>
            <ModelsContext.Provider value={models}>
                <Main />
            </ModelsContext.Provider>
        </Provider>
    ));

    const helmet = Helmet.renderStatic();

    head += sheet.getStyleTags();
    head += helmet.title.toString();
    head += helmet.meta.toString();

} catch (ex) {
    console.error(ex); // TODO : handling this instead of just log it out
}

dispatch(ServerLayout(head, body, context.viewProps));
