import React from "react";
import ReactDOM from "react-dom";

import TelescopeApp from "./TelescopeApp";

const node = document.getElementById('app');
const preloadedState = window.__PRELOADED_STATE__;
delete window.__PRELOADED_STATE__;

ReactDOM.render((
    <TelescopeApp preloadedState={preloadedState} />
), node);
