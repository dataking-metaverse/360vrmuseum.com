import React from "react";

import {Consumer} from "./Context";

import {Interpolation} from "styled-components";

type ButtonProps = {|
    [string]: Interpolation | string,
|};

export default function Submit(props: ButtonProps) {
    return (
        <Consumer>
            {({onSubmit}) => (
                <button type="submit" {...props} onClick={onSubmit} />
            )}
        </Consumer>
    );
};
