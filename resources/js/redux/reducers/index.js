import {combineReducers} from "redux";
import * as global from "./global";
import * as home from "./home";
import * as nationalMuseum from "./nationalMuseum";
import * as showcase from "./showcase";
import type {CombinedReducer} from "redux";

const reducers: CombinedReducer<{
    app: {},
    config: {},
    assets: {},
}, {}> = combineReducers({
    ...global,
    ...home,
    ...nationalMuseum,
    ...showcase,
});

export default reducers;
