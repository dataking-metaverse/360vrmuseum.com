import * as R from "ramda";
import {combineReducers} from "redux";

import {
    REGISTER_APP,
    REGISTER_SHOWCASES,
    UPDATE_SHOWCASE,
    EMPTY_SHOWCASE,
    UPDATE_LIGHT_BOX_IMAGE_INDEX,
    EMPTY_LIGHT_BOX_IMAGE_INDEX,
} from "../actionTypes";

import type {Action, App, ShowcasesGroup, Showcase} from "../../types";

const secondArg = R.nthArg(1);

const isAction = action => R.pipe(secondArg, R.prop('type'), R.equals(action));
const actionValue = R.pipe(secondArg, R.prop<string, {}>('value'));

const app = R.cond<any, App>([
    [isAction(REGISTER_APP), actionValue],
    [R.T, R.nthArg<App>(0)],
]);

const showcases = R.cond<any, ShowcasesGroup>([
    [isAction(REGISTER_SHOWCASES), actionValue],
    [R.nthArg<ShowcasesGroup>(0), R.nthArg<ShowcasesGroup>(0)],
    [R.T, R.always(null)],
]);

const showcase = R.cond<any, Showcase>([
    [isAction(UPDATE_SHOWCASE), actionValue],
    [isAction(EMPTY_SHOWCASE), R.always(null)],
    [R.nthArg<Showcase>(0), R.nthArg<Showcase>(0)],
    [R.T, R.always<any>(null)],
]);

const lightBoxImageIndex = R.cond<any, Array<string>>([
    [isAction(UPDATE_LIGHT_BOX_IMAGE_INDEX), actionValue],
    [isAction(EMPTY_LIGHT_BOX_IMAGE_INDEX), R.always(null)],
    [R.nthArg<string>(0), R.nthArg<string>(0)],
    [R.T, R.always<any>(null)],
]);

export default combineReducers<function, Action>({
    // app,
    showcases,
    showcase,
    lightBoxImageIndex,
});
