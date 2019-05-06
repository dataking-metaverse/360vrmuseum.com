import React from "react";

import page from "../../decorators/page";
import ForgotPasswordForm from "./ForgotPasswordForm";


type Props = {

};


@page("forgot-password")
export default class ForgotPassword extends React.PureComponent<Props> {
    render() {
        return (
            <ForgotPasswordForm />
        );
    }
}
