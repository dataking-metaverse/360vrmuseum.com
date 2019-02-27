import {CONFIG_REGISTER, APP_REGISTER} from "../actionTypes";

export const config = (state = {}, action) => {
    if (action.type === CONFIG_REGISTER) { return action.value; }
    return state;
};

export const app = (state = {}, action) => {
    if (action.type === APP_REGISTER) { return action.value; }
    return state;
};
