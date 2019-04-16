import React from "react";
import * as R from "ramda";

import page from "../../decorators/page";
import SignupForm from "./SignupForm";


type Props = {

};

function Signup(props: Props) {
    return (
        <SignupForm />
    );
}

export default R.compose(
    page('signup')
)(Signup);

