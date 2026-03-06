import React from "react";

import HiddenQuitButtonSideEffect from "./HiddenQuitButtonSideEffect";

type Props = {|

|};

export default function SideEffects(props: Props) {
    return (
        <React.Fragment>
            <HiddenQuitButtonSideEffect />
        </React.Fragment>
    );
}
