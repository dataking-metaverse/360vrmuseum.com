import * as R from "ramda";
import {
    CONFIG_REGISTER,
    APP_REGISTER,
    ASSETS_REGISTER,
    LOCALE_REGISTER,
    LANG_REGISTER,
    AXIOS_REGISTER,
    ACCESS_CREDENTIAL_REGISTER,
    MESSAGES_PUSH,
    MESSAGES_REMOVE_FIRST,
    REDIRECT_PUSH,
    REDIRECT_CLEAR,
    USER_REGISTER,
    USER_CLEAR,
} from "../actionTypes";
import User from "../../models/User";

import type {Axios} from "axios";
import type {ReduxAction} from "../../types";


type StringState = string | void;
type StringReducer = (state: StringState, action: ReduxAction) => StringState;

type ObjectState = {} | void;
type ObjectReducer = (state: ObjectState, action: ReduxAction) => ObjectState;

type AxiosState = Axios | void;
type AxiosReducer = (state: AxiosState, action: ReduxAction) => AxiosState;

type ArrayReducer = (state: Array<any>, action: ReduxAction) => Array<any>;

const stringReducerBuilder = (type: ReduxAction) => (state, action) => {
    if (action.type === type) { return action.value; }
    return state || null;
};

const objectReducerBuilder = (type: ReduxAction, clearType: ReduxAction) => (state, action) => {
    if (action.type === type) { return action.value; }
    if (action.type === clearType) { return null; }
    return state || null;
};

export const ssr = R.when(R.isNil, R.always(false));
export const config: ObjectReducer = objectReducerBuilder(CONFIG_REGISTER);
export const app: ObjectReducer = objectReducerBuilder(APP_REGISTER);
export const assets: ObjectReducer = objectReducerBuilder(ASSETS_REGISTER);
export const lang: ObjectReducer = objectReducerBuilder(LANG_REGISTER);
export const locale: ObjectReducer = objectReducerBuilder(LOCALE_REGISTER);

export const axios: AxiosReducer = (state, action) => {
    if (action.type === AXIOS_REGISTER) { return action.value; }
    return state || null;
};

export const accessCredential: ObjectReducer = objectReducerBuilder(ACCESS_CREDENTIAL_REGISTER);

export const messages: ArrayReducer = (state = [], action: ReduxAction) => {
    switch(action.type) {
        case MESSAGES_PUSH: return [...state, action.value];
        case MESSAGES_REMOVE_FIRST: return state.slice(1);
        default: return state;
    }
};

export const redirect: StringReducer = objectReducerBuilder(REDIRECT_PUSH, REDIRECT_CLEAR);

export const user: (state: User | void, action: ReduxAction) => User | void = (state = null, action) => {
    switch(action.type) {
        case USER_REGISTER: return action.value;
        case USER_CLEAR: return null;
        default: return state;
    }
};
