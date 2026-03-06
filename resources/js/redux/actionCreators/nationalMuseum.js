import {SHOWCASE_GROUPS_ELEMENTS_REGISTER, SHOWCASE_GROUPS_ELEMENTS_APPEND} from "../actionTypes";

export const registerShowcaseGroupsElements = dispatch => value => dispatch({type: SHOWCASE_GROUPS_ELEMENTS_REGISTER, value});
export const appendShowcaseGroupsElements = dispatch => value => dispatch({type: SHOWCASE_GROUPS_ELEMENTS_APPEND, value});
