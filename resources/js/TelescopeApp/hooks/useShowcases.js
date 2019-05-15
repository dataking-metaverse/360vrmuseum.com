import * as R from "ramda";

import useReduxState from "./useReduxState";

const useShowcases = R.pipe(
    useReduxState,
    R.prop('showcases')
);

export default useShowcases;
