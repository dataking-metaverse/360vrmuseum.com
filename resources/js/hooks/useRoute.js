import * as R from "ramda";

import useRoutes from "./useRoutes";


const useRoute = R.pipe(
    R.prop,
    R.construct(Array),
    R.concat([useRoutes]),
    R.apply(R.pipe),
    R.call,
    R.when(
        R.equals(undefined),
        R.always(null)
    )
);

export default useRoute;
