import React from "react";
import ReactDOM from "react-dom";

import TelescopeApp from "./TelescopeApp";
import isDebugMode from "./TelescopeApp/sideEffectFunctions/isDebugMode";

const node = document.getElementById('app');
const debug = isDebugMode();
const preloadedState = Object.assign({debug}, window.__PRELOADED_STATE__);
delete window.__PRELOADED_STATE__;

ReactDOM.render((
    <TelescopeApp preloadedState={preloadedState} />
), node);
