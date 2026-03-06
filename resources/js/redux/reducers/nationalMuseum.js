import {SHOWCASE_GROUPS_ELEMENTS_REGISTER, SHOWCASE_GROUPS_ELEMENTS_APPEND} from "../actionTypes";

export const showcaseGroupsElements = (state = [], action) => {
    if (action.type === SHOWCASE_GROUPS_ELEMENTS_REGISTER) { return action.value; }
    if (action.type === SHOWCASE_GROUPS_ELEMENTS_APPEND) { return [...state, ...action.value]; }
    return state;
};
