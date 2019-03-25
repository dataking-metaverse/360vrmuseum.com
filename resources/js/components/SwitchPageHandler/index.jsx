import React from "react";
import * as R from "ramda";
import {connect} from "react-redux";

import {pushMessage, removeFirstMessage} from "../../redux/actionBuilders/global";

import type {Axios} from "axios";
import {withRouter } from "react-router";
import noSSR from "../../decorators/noSSR";

type Props = {
    location: {
        pathname: string,
    }
};

@withRouter
@noSSR
export default class SwitchPageHandler extends React.Component<Props> {
    shouldComponentUpdate(nextProps) { return nextProps.location.pathname !== this.props.location.pathname; }
    componentDidMount() { this.effect(); }
    componentDidUpdate() { this.effect(); }
    async effect() { window.scrollTo(0, 0); }
    render() { return null; }
}
