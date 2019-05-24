import React from "react";
import page from "../../decorators/page";

type Props = {|

|};

@page('my-account')
export default class MyAccount extends React.PureComponent<Props> {
    render() {
        return (
            <React.Fragment>
                hello, world
            </React.Fragment>
        );
    }
}
