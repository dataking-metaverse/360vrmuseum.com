import * as R from "ramda";

import {
    UPDATE_SHOWCASE,
    EMPTY_SHOWCASE,
} from "../actionTypes";
import Showcase from "../../../models/Showcase";
import {combineReducers} from "redux";
import type {Action} from "../../../types";

const showcase = R.cond<any, ?Showcase>([
    [R.equals(UPDATE_SHOWCASE), R.pipe(R.nthArg(1), R.prop<string, {}>('value'))],
    [R.equals(EMPTY_SHOWCASE), R.always(null)],
    [R.T, R.nthArg<?Showcase>(0)],
]);

export default combineReducers<function, Action>({
    showcase,
});
