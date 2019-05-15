import {
    REGISTER_APP,
    UPDATE_SHOWCASE,
    EMPTY_SHOWCASE,
    UPDATE_LIGHT_BOX_IMAGES,
    EMPTY_LIGHT_BOX_IMAGES,
} from "../actionTypes";

import type {Dispatch} from "redux";

const valueAssign = <V>(type: string) => (dispatch: Dispatch<{ type: string, value: V }>) => (value: V) => dispatch({type, value});
const emptyAssign = (type: string) => (dispatch: Dispatch<{ type: string }>) => () => dispatch({type});


export const registerApp = valueAssign(REGISTER_APP);

export const updateShowcase = valueAssign(UPDATE_SHOWCASE);
export const emptyShowcase = emptyAssign(EMPTY_SHOWCASE);

export const updateLightBoxImages = valueAssign(UPDATE_LIGHT_BOX_IMAGES);
export const emptyLightBoxImages = emptyAssign(EMPTY_LIGHT_BOX_IMAGES);
