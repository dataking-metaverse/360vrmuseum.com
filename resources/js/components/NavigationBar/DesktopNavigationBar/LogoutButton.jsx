import React from "react";
import * as R from "ramda";
import {connect} from "react-redux";

import {clearUser} from "~/redux/actionCreators/global";
import useRoute from "~/hooks/useRoute";
import useLangPath from "~/hooks/useLangPath";
import {
    LogoutButtonsWrap,
    LogoutForm,
    MyAccountItem,
    Submit,
} from "./styled";


type LogoutFormProps = {

};

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
)(function LogoutButton(props: LogoutFormProps) {
    const {axios, submitRoute, logoutRoute, clearUser} = props;
    const myAccountRoute = useRoute('my-account');
    const myAccountTitle = useLangPath(['navigation', 'my-account', 'title']);

    async function onSubmit(event) {
        event.preventDefault();
        const response = await axios.post(submitRoute);
        const success = R.path(['data', 'success'])(response);
        if (success) { clearUser(); }
    }

    return (
        <LogoutButtonsWrap>
            <MyAccountItem to={myAccountRoute}>{myAccountTitle}</MyAccountItem>
            <LogoutForm onSubmit={onSubmit}>
                <Submit type="submit">{logoutRoute.title}</Submit>
            </LogoutForm>
        </LogoutButtonsWrap>
    );
});

export default LogoutButton;
