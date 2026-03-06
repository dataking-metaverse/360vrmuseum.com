import {useContext} from "react";
import {ReactReduxContext} from "react-redux";
import * as R from "ramda";

const getDispatch = R.pipe(
    R.always(ReactReduxContext),
    useContext,
    R.path(['store', 'dispatch'])
);

const useReduxAction = R.pipe(
    Array,
    R.concat([getDispatch]),
    R.apply(R.pipe),
    R.call
);

export default useReduxAction;
