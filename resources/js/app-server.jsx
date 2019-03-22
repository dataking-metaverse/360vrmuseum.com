import React from "react";
import {renderToString} from "react-dom/server";
import {createStore} from "redux";
import {Provider} from "react-redux";
import {ServerStyleSheet} from "styled-components";

import Main from "./Main";
import reducers from "./redux/reducers";
import * as assets from "./assets";
import SSRLayout from "./ServerLayout";

import type {Store} from "redux";
import type {ReduxAction} from "./types";

let head = '';
let body = '';

try {

    const store: Store<{}, ReduxAction> = createStore(reducers, { // TODO : here, flow typing says there is an error here but I don't know what it is even checked for an hour
        ssr: true,
        user: context.user,
        app: context.app,
        config: context.config,
        assets,
        lang: context.lang,
        locale: 'ko',
    });

    const sheet = new ServerStyleSheet();
    body = renderToString(sheet.collectStyles(
        <Provider store={store}>
            <Main />
        </Provider>
    ));
    head = sheet.getStyleTags();

} catch (ex) {
    console.error(ex); // TODO : handling this instead of just log it out
}

dispatch(SSRLayout(head, body, context.viewProps));
