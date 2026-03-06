import * as R from "ramda";

import useReduxState from "../../hooks/useReduxState";

export type NavRoutes = {|
    item: string,
    title: string,
    to: string,
|};

type Params = () => NavRoutes;

const useNavRoutes: Params = R.pipe(
    useReduxState,
    R.applySpec({
        items: R.path(['config', 'navigationBar', 'staticItems']),
        titles: R.pipe(
            R.path(['lang', 'navigation']),
            R.mapObjIndexed(R.path(['title']))
        ),
        routes: R.path(['app', 'routes']),
    }),
    prop => prop.items.map(item => ({
        name: item,
        title: prop.titles[item],
        to: prop.routes[item],
    }))
);

export default useNavRoutes;
