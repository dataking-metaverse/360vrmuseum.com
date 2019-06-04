import React from "react";
import * as R from "ramda";

import {Consumer} from "./Context";

import {Interpolation} from "styled-components";

type InputProps = {|
    [string]: Interpolation | string,
|};

const onEnterPressSubmit = R.when(
    R.propEq('key', 'Enter')
);

export default function Input(props: InputProps) {
    return (
        <Consumer>
            {({onInput, onSubmit}) => (
                <input type="text" {...props} onInput={onInput} onKeyPress={onEnterPressSubmit(onSubmit)} />
            )}
        </Consumer>
    );
};
