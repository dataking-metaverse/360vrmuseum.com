import * as R from "ramda";

import useReduxState from "./useReduxState";

const useShowcase = R.pipe(
    useReduxState,
    R.prop('showcase')
);

export default useShowcase;
