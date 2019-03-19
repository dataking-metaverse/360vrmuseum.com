
import {
    CONFIG_REGISTER,
    APP_REGISTER,
    ASSETS_REGISTER,
    LOCALE_REGISTER,
    LANG_REGISTER,
    AXIOS_REGISTER,
} from "../actionTypes";

import type {Axios} from "axios";
import type {ReduxAction} from "../../types";

type ObjectState = {} | void;
type ObjectReducer = (state: ObjectState, action: ReduxAction) => ObjectState;

type AxiosState = Axios | void;
type AxiosReducer = (state: AxiosState, action: ReduxAction) => AxiosState;

const objectReducerBuilder = (type: string) => (state, action) => {
    if (action.type === type) { return action.value; }
    return state || {};
};

export const config: ObjectReducer = objectReducerBuilder(CONFIG_REGISTER);
export const app: ObjectReducer = objectReducerBuilder(APP_REGISTER);
export const assets: ObjectReducer = objectReducerBuilder(ASSETS_REGISTER);
export const lang: ObjectReducer = objectReducerBuilder(LANG_REGISTER);
export const locale: ObjectReducer = objectReducerBuilder(LOCALE_REGISTER);

export const axios: AxiosReducer = (state, action) => {
    if (action.type === AXIOS_REGISTER) { return action.value; }
    return state || null;
};
