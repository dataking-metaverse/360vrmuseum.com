import {useContext} from "react";
import {ReactReduxContext} from "react-redux";
import * as R from "ramda";

const useShowcase = R.pipe(
    R.always(ReactReduxContext),
    useContext,
    R.prop('storeState')
);

export default useShowcase;
