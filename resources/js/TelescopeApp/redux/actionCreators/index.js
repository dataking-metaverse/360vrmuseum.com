import {
    REGISTER_APP,
    UPDATE_SHOWCASE,
    EMPTY_SHOWCASE,
    UPDATE_LIGHT_BOX_IMAGE_INDEX,
    EMPTY_LIGHT_BOX_IMAGE_INDEX,
    UPDATE_MENU_SCROLLABLE_REF,
    UPDATE_SHOWCASE_IFRAME_REF,
    EMPTY_SHOWCASE_IFRAME_REF,
} from "../actionTypes";

import type {Dispatch} from "redux";


const valueAssign = <V>(type: string) => (dispatch: Dispatch<{ type: string, value: V }>) => (value: V) => dispatch({type, value});
const emptyAssign = (type: string) => (dispatch: Dispatch<{ type: string }>) => () => dispatch({type});


export const registerApp = valueAssign(REGISTER_APP);

export const updateShowcase = valueAssign(UPDATE_SHOWCASE);
export const emptyShowcase = emptyAssign(EMPTY_SHOWCASE);

export const updateLightBoxImageIndex = valueAssign(UPDATE_LIGHT_BOX_IMAGE_INDEX);
export const emptyLightBoxImageIndex = emptyAssign(EMPTY_LIGHT_BOX_IMAGE_INDEX);

export const updateMenuScrollableRef = valueAssign(UPDATE_MENU_SCROLLABLE_REF);

export const updateShowcaseIframeRef = valueAssign(UPDATE_SHOWCASE_IFRAME_REF);
export const emptyShowcaseIframeRef = valueAssign(EMPTY_SHOWCASE_IFRAME_REF);
