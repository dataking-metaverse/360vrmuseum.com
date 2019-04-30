import React from "react";

import page from "../../decorators/page";


type Props = {

};


@page("forgot-password")
export default class ForgotPassword extends React.PureComponent<Props> {
    render() {
        return (
            <React.Fragment>
                hello, world
            </React.Fragment>
        );
    }
}
