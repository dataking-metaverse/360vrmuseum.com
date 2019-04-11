import {SHOWCASE_GROUPS_ELEMENTS_REGISTER} from "../actionTypes";

export const showcaseGroupsElements = (state = [], action) => {
    if (action.type === SHOWCASE_GROUPS_ELEMENTS_REGISTER) { return action.value; }
    return state;
};
