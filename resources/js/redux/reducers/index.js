import {combineReducers} from "redux";
import * as global from "./global";
import * as home from "./home";

export default combineReducers({
    ...global,
    ...home,
});
