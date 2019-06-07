import {useContext} from "react";
import {ReactReduxContext} from "react-redux";
import * as R from "ramda";

const useReduxState = R.pipe(
    R.always(ReactReduxContext),
    useContext,
    R.prop('storeState')
);

export default useReduxState;
