import React from "react";
import * as R from "ramda";

import useRoute from "~/hooks/useRoute";
import useLangPath from "~/hooks/useLangPath";
import useReduxAction from "~/hooks/useReduxAction";
import useReduxState from "~/hooks/useReduxState";
import * as actions from "~/redux/actionCreators/global";
import {
    LogoutButtonsWrap,
    LogoutForm,
    MyAccountItem,
    Submit,
} from "./styled";


type Props = {|  |};

const useLogoutTitle = R.pipe(
    useReduxState,
    R.path(['lang', 'navigation', 'logout', 'title']),
);

export default function LogoutButton(props: Props) {
    const clearUser = useReduxAction(actions.clearUser);
    const {axios} = useReduxState();
    const submitRoute = useRoute('api.auth.logout');
    const logoutTitle = useLogoutTitle();

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
                <Submit type="submit">{logoutTitle}</Submit>
            </LogoutForm>
        </LogoutButtonsWrap>
    );
}
