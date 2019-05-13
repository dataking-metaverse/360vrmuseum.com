import * as R from "ramda";
import {combineReducers} from "redux";

import {
    REGISTER_APP,
    REGISTER_SHOWCASES,
    UPDATE_SHOWCASE,
    EMPTY_SHOWCASE,
} from "../actionTypes";

import type {Action, App, ShowcasesGroup, Showcase} from "../../types";

const actionValue = R.pipe(R.nthArg(1), R.prop<string, {}>('value'));

const app = R.cond<any, App>([
    [R.equals(REGISTER_APP), actionValue],
    [R.T, R.nthArg<App>(0)],
]);

const showcases = R.cond<any, ShowcasesGroup>([
    [R.equals(REGISTER_SHOWCASES), actionValue],
    [R.nthArg<ShowcasesGroup>(0), R.nthArg<ShowcasesGroup>(0)],
    [R.T, R.always(null)],
]);

const showcase = R.cond<any, Showcase>([
    [R.equals(UPDATE_SHOWCASE), actionValue],
    [R.equals(EMPTY_SHOWCASE), R.always(null)],
    [R.nthArg<Showcase>(0), R.nthArg<Showcases>(0)],
    [R.T, R.always(null)],
]);

export default combineReducers<function, Action>({
    // app,
    showcases,
    showcase,
});
