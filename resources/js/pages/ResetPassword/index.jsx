import React, {useContext} from "react";
import * as R from "ramda";

import ResetPasswordForm from "./ResetPasswordForm";

type Props = {

};

// functions
const getToken = R.path(['match', 'params', 'token']);

function ResetPassword(props: Props) {
    const token = getToken(props);

    return ( <ResetPasswordForm token={token} /> );
}

export default ResetPassword;
