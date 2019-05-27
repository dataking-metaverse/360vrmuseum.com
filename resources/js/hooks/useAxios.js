import {useState, useEffect} from "react";
import * as R from "ramda";

import useReduxState from "./useReduxState";

const dataProp = R.ifElse(
    R.allPass([
        R.complement(R.isNil),
        R.hasPath(['data', 'data']),
    ]),
    R.path(['data', 'data']),
    R.always(null)
);

function useAxios(route: string) {
    const [loading, setLoading] = useState<boolean>(false);
    const [response, setResponse] = useState<{}>(null);
    const {axios} = useReduxState();
    useEffect(() => {
        setLoading(true);
        axios.get(route).then(response => {
            setLoading(false);
            setResponse(response);
        });
    }, [route]);
    const data = dataProp(response);
    return [data, loading, response];
}

export default useAxios;
