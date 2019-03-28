import React from "react";
import {renderToString} from "react-dom/server";
import {createStore} from "redux";
import {Provider} from "react-redux";
import {ServerStyleSheet} from "styled-components";

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

function metaTags() {
    return {
        keywords: 'vrmuseum, dataking, vr, museum, 360, bediomap, national museum, 국립박물관, 박물관, 데이터킹',
        title: context.meta.title || '360°VR Museum',
        description: context.meta.description || 'Next-generation museum - 360°VR Museum',
        image: context.meta.image || '/og-logo.png',
        imageWidth: context.meta.imageWidth || '113',
        imageHeight: context.meta.imageHeight || '42',
        url: context.meta.url || 'https://360vrmuseum.com',
    };
}

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

    Model.subscribe(store);

    const sheet = new ServerStyleSheet();
    body += renderToString(sheet.collectStyles(
        <div id="app">
            <Provider store={store}>
                <ModelsContext.Provider value={models}>
                    <Main />
                </ModelsContext.Provider>
            </Provider>
        </div>
    ));

    const meta = metaTags();

    head = sheet.getStyleTags();
    head += `
<title>${meta.title}</title>
<meta name="keywords" content="${meta.keywords}" />
<meta name="subtitle" content="${meta.description}" />
<meta name="description" content="${meta.description}" />
<meta property="og:title" content="${meta.title}" />
<meta property="og:description" content="${meta.description}" />
<meta property="og:image" content="${meta.image}" />
<meta property="og:image:width" content="${meta.imageWidth}" />
<meta property="og:image:height" content="${meta.imageHeight}" />
<meta property="og:url" content="${meta.url}" />
`;

} catch (ex) {
    console.error(ex); // TODO : handling this instead of just log it out
}

dispatch(ServerLayout(head, body, context.viewProps));
