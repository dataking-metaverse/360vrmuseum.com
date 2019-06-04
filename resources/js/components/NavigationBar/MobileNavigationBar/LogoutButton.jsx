import React from "react";
import * as R from "ramda";
import {Axios} from "axios";

import {clearUser} from "~/redux/actionCreators/global";
import {Submit} from "./styled";
import useReduxState from "../../../hooks/useReduxState";
import useRoute from "../../../hooks/useRoute";


type Props = {|  |};

const useLogoutTitle = R.pipe(
    useReduxState,
    R.path(['lang', 'navigation', 'logout', 'title']),
);

export default function LogoutButton(props: Props) {
    const {axios} = useReduxState();
    const submitRoute = useRoute('api.auth.logout');
    const logoutTitle = useLogoutTitle();

    async function onSubmit(event) {
        event.preventDefault();
        const response = await axios.post(submitRoute);
        const success = R.path(['data', 'data', 'success'])(response);
        if (success) {
            clearUser();
        }
    }

    return (
        <>
            <form onSubmit={onSubmit}>
                <Submit type="submit">{logoutTitle}</Submit>
            </form>
        </>
    );
}
