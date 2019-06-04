import React from "react";
import {connect} from "react-redux";
import * as R from "ramda";
import {Axios} from "axios";

import {clearUser} from "~/redux/actionCreators/global";
import {Submit} from "./styled";


type LogoutFormProps = {|
    axios: Axios,
    submitRoute: string,
    logoutRoute: string,
    clearUser: () => void,
|};

const LogoutButton = R.compose(
    connect(
        R.applySpec({
            axios: R.prop('axios'),
            submitRoute: R.path(['app', 'routes', 'api.auth.logout']),
            logoutRoute: R.applySpec({
                name: R.path(['config', 'navigationBar', 'logout']),
                title: R.path(['lang', 'navigation', 'logout', 'title']),
                to: R.path(['app', 'routes', 'logout']),
            }),
        }),
        R.applySpec({clearUser}),
    )
)(function(props: LogoutFormProps) {
    const {axios, submitRoute, logoutRoute, clearUser} = props;

    async function onSubmit(event) {
        event.preventDefault();
        const response = await axios.post(submitRoute);
        const success = R.path(['data', 'data', 'success'])(response);
        if (success) {
            clearUser();
        }
    }

    return (
        <React.Fragment>
            <form onSubmit={onSubmit}>
                <Submit type="submit">{logoutRoute.title}</Submit>
            </form>
        </React.Fragment>
    );
});

export default LogoutButton;
