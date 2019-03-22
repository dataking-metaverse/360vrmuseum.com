import React from "react";
import * as R from "ramda";

import page from "../../decorators/page";
import LoginForm from "./components/LoginForm";


type Props = {

};

function Login(props: Props) {
    return (
        <LoginForm />
    );
}

export default R.compose(
    page('login')
)(Login);

