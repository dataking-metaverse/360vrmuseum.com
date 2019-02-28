import {
    CONFIG_REGISTER,
    APP_REGISTER,
    ASSETS_REGISTER,
    LOCALE_REGISTER,
    LANG_REGISTER,
} from "../actionTypes";

import type {Action} from "../../types/redux";


export const config = (state: {} | void, action: Action) => {
    if (action.type === CONFIG_REGISTER) { return action.value; }
    return state || {};
};

export const app = (state: {} | void, action: Action) => {
    if (action.type === APP_REGISTER) { return action.value; }
    return state || {};
};

export const assets = (state: {} | void, action: Action) => {
    if (action.type === ASSETS_REGISTER) { return action.value; }
    return state || {};
};

export const lang = (state: {} | void, action: Action) => {
    if (action.type === LANG_REGISTER) { return action.value; }
    return state || {};
};

export const locale = (state: {} | void, action: Action) => {
    if (action.type === LOCALE_REGISTER) { return action.value; }
    return state || null;
};
