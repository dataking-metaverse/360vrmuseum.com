import React from "react";
import * as R from "ramda";
import {connect} from "react-redux";

import {registerLang} from "../../redux/actionBuilders/global";

import type {Axios} from "axios";

type Props = {
    locale: string,
    axios: Axios,
    langRoute: string,
    registerLang: ({}) => void,
};

@connect(
    R.applySpec({
        lang: R.prop('lang'),
        locale: R.prop('locale'),
        axios: R.prop('axios'),
        langRoute: R.path(['app', 'routes', 'api.lang']),
    }),
    R.applySpec({registerLang})
)
export default class LangHandler extends React.Component<Props> {
    shouldComponentUpdate(nextProps) { return nextProps.locale !== this.props.locale || (nextProps.axios && !this.props.axios); }
    componentDidMount() { this.effect(); }
    componentDidUpdate() { this.effect(); }
    async effect() {
        const {axios, locale, langRoute, registerLang} = this.props;
        if (!axios) { return; }
        const response = await axios.get(langRoute, {params: {locale}});
        R.pipe(
            R.path(['data', 'data']),
            registerLang
        )(response);
    }
    render() { return null; }
}
