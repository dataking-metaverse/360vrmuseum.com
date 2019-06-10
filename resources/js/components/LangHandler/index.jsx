import React, {useEffect} from "react";
import * as R from "ramda";
import {connect} from "react-redux";

import useReduxAction from "~/hooks/useReduxAction";
import useReduxState from "~/hooks/useReduxState";
import * as actions from "~/redux/actionCreators/global";

import type {Axios} from "axios";

type Props = {|  |};

const useLangRoute = R.pipe(
    useReduxState,
    R.path(['app', 'routes', 'api.lang']),
);

export default function LangHandler(props: Props) {
    const {locale, axios} = useReduxState();
    const langRoute = useLangRoute();
    const registerLang = useReduxAction(actions.registerLang);

    const effect = async () => {
        if (!axios || !locale) { return; }
        const response = await axios.get(langRoute, {params: {locale}});
        R.pipe(
            R.path(['data', 'data']),
            registerLang
        )(response);
    };

    useEffect(() => {
        effect();
    }, [locale, axios]);

    return null;
};
