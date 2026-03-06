import * as R from "ramda";

import useReduxState from "./useReduxState";

const getShowcaseList = R.pipe(
    R.prop('showcases'),
    R.values,
    R.reduce(R.concat, []),
);

const useRelatedShowcases = R.pipe(
    useReduxState,
    R.converge(R.filter, [
        R.pipe(
            R.path(['showcase', 'presented_by']),
            R.propEq('presented_by')
        ),
        getShowcaseList,
    ])
);

export default useRelatedShowcases;
