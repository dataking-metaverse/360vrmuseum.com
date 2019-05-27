import * as R from "ramda";

import useReduxState from "./useReduxState";

const useRoutes = R.pipe(
    useReduxState,
    R.path(['app', 'routes'])
);

export default useRoutes;
