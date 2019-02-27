import {combineReducers} from "redux";
import * as global from "./global";
import * as home from "./home";
import type {CombinedReducer} from "redux";

const reducers: CombinedReducer<{}, {}> = combineReducers({
    ...global,
    ...home,
});

export default reducers;
