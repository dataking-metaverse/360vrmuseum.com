import {withRouter} from "react-router";
import {connect} from "react-redux";
import * as R from "ramda";
import React from "react";

import {clearRedirect} from "../../redux/actionBuilders/global";

import type {RouterHistory} from "react-router";

type RedirectHandlerProps = {
    redirect?: RedirectHandlerProps,
    history: RouterHistory,
};

@withRouter
@connect(R.pick(['redirect']), R.applySpec({clearRedirect}))
export default class RedirectHandler extends React.Component<RedirectHandlerProps> {
    shouldComponentUpdate(nextProps) { return nextProps.redirect !== this.props.redirect; }
    componentDidMount() { this.effect(this.props.redirect); }
    componentDidUpdate(nextProps) { this.effect(this.props.redirect); }
    effect(redirect: string | void) { redirect && this.props.history.push(redirect); this.props.clearRedirect(); }
    render() { return null; }
}
