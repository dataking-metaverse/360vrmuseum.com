import {createStore} from "redux";

import reducers from "./reducers";

import type {Dispatch, Store} from "redux";
import type {Action} from "../../types";


const createStoreWithPreloadedState = (preloadedState: any) => {
    const store: Store<any, Action, Dispatch<Action>> = createStore<any, Action, Dispatch<Action>>(reducers, preloadedState);
    return store;
};


export default createStoreWithPreloadedState;
