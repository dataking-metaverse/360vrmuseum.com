import React from "react";
import * as R from "ramda";

import page from "../../decorators/page";
import SignupForm from "./components/SignupForm";


type Props = {

};

function Signup(props: Props) {
    return (
        <SignupForm />
    );
}

export default R.compose(
    page
)(Signup);
