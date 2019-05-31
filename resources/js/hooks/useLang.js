import * as R from "ramda";

import useReduxState from "./useReduxState";

const useLang = R.pipe(
    useReduxState,
    R.prop('lang'),
);

export default useLang;
