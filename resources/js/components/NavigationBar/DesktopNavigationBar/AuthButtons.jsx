import React from "react";
import * as R from "ramda";
import {connect} from "react-redux";
import User from "../../../models/User";

import LogoutButton from "./LogoutButton";
import {
    Item,
} from "./styled";

type AuthButtonsProps = {
    user: User,
    show: boolean,
    loginRoute: {|
        name: string,
        title: string,
        to: string,
    |}
};

const AuthButtons = R.compose(
    connect(R.applySpec({
        user: R.prop('user'),
        show: R.path(['config', 'navigationBar', 'showAuth']),
        loginRoute: R.applySpec({
            name: R.path(['config', 'navigationBar', 'login']),
            title: R.path(['lang', 'navigation', 'login', 'title']),
            to: R.path(['app', 'routes', 'login']),
        }),
    }))
)(function AuthButtons(props: AuthButtonsProps) {
    const {user, show, loginRoute} = props;
    if (!show) { return null; }
    if (!user) { return <Item to={loginRoute.to}>{loginRoute.title}</Item>; }
    return <LogoutButton />;
});

export default AuthButtons;
